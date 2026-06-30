#!/usr/bin/env node
/**
 * check-images.mjs
 *
 * Scans all source files for Unsplash image URLs, tests each one,
 * and optionally replaces broken URLs with working alternatives.
 *
 * Usage:
 *   node scripts/check-images.mjs          # report only
 *   node scripts/check-images.mjs --fix    # report + auto-fix broken URLs
 *
 * Optional env var:
 *   UNSPLASH_ACCESS_KEY=xxx   Uses Unsplash API for smarter replacements
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

const FIX_MODE = process.argv.includes('--fix');
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY ?? null;

// ─── Fallback photo IDs by keyword ────────────────────────────────────────────
// Known-good Unsplash IDs grouped by semantic category.
// Used when no API key is available or the API fails.
const FALLBACK_BY_KEYWORD = {
  homard:      'photo-1559742811-822873691df8',
  lobster:     'photo-1559742811-822873691df8',
  seafood:     'photo-1467003909585-2f8a72700288',
  crustace:    'photo-1467003909585-2f8a72700288',
  salle:       'photo-1517248135467-4c7edcad34c4',
  restaurant:  'photo-1517248135467-4c7edcad34c4',
  interior:    'photo-1517248135467-4c7edcad34c4',
  ambiance:    'photo-1414235077428-338989a2e8c0',
  table:       'photo-1414235077428-338989a2e8c0',
  gala:        'photo-1530103862676-de8c9debad1d',
  evenement:   'photo-1530103862676-de8c9debad1d',
  event:       'photo-1530103862676-de8c9debad1d',
  dessert:     'photo-1551504734-5ee1c4a1479b',
  patisserie:  'photo-1551504734-5ee1c4a1479b',
  gateau:      'photo-1551504734-5ee1c4a1479b',
  foie:        'photo-1414235077428-338989a2e8c0',
  viande:      'photo-1544025162-d76538769d48',
  boeuf:       'photo-1544025162-d76538769d48',
  chef:        'photo-1577219491135-ce391730fb2c',
  cuisine:     'photo-1547592180-85f173990554',
  fromage:     'photo-1452195100486-9cc805987862',
  wine:        'photo-1510812431401-41d2bd2722f3',
  cave:        'photo-1510812431401-41d2bd2722f3',
  // ultimate fallback
  default:     'photo-1414235077428-338989a2e8c0',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Recursively collect files with matching extensions */
function collectFiles(dir, exts, results = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === '.next') continue;
    const full = join(dir, entry.name);
    if (entry.isDirectory()) collectFiles(full, exts, results);
    else if (exts.includes(extname(entry.name))) results.push(full);
  }
  return results;
}

/** Extract all unique Unsplash image URLs from a string */
function extractUnsplashUrls(content) {
  const re = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+(?:\?[^'")\s]*)?/g;
  return [...new Set(content.match(re) ?? [])];
}

/** Check if an image URL is reachable (200 or 301/302 OK) */
async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(8000) });
    return res.ok || res.status === 301 || res.status === 302;
  } catch {
    return false;
  }
}

/**
 * Find a replacement URL for a broken one.
 * Strategy:
 *  1. Use Unsplash API search if UNSPLASH_ACCESS_KEY is available
 *  2. Otherwise pick from FALLBACK_BY_KEYWORD based on context keywords
 */
async function findReplacement(brokenUrl, context) {
  const contextLower = context.toLowerCase();

  if (UNSPLASH_KEY) {
    // Extract the best query term from context
    const query = extractQuery(contextLower);
    try {
      const apiUrl =
        `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape`;
      const res = await fetch(apiUrl, {
        headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        const data = await res.json();
        const newId = data.id;
        const params = brokenUrl.includes('?') ? '?' + brokenUrl.split('?')[1] : '';
        return `https://images.unsplash.com/${newId}${params}`;
      }
    } catch {
      // fall through to keyword fallback
    }
  }

  // Keyword fallback
  for (const [kw, photoId] of Object.entries(FALLBACK_BY_KEYWORD)) {
    if (kw !== 'default' && contextLower.includes(kw)) {
      const params = brokenUrl.includes('?') ? '?' + brokenUrl.split('?')[1] : '';
      return `https://images.unsplash.com/${photoId}${params}`;
    }
  }

  // Ultimate fallback
  const params = brokenUrl.includes('?') ? '?' + brokenUrl.split('?')[1] : '';
  return `https://images.unsplash.com/${FALLBACK_BY_KEYWORD.default}${params}`;
}

/** Extract a short search query from surrounding context text */
function extractQuery(context) {
  const foodWords = [
    'homard', 'lobster', 'foie gras', 'truffe', 'bœuf', 'wagyu',
    'saint-jacques', 'scallop', 'dessert', 'soufflé', 'fromage',
    'restaurant', 'salle', 'gala', 'chef', 'cuisine', 'gastronomique',
  ];
  for (const w of foodWords) {
    if (context.includes(w)) return `fine dining ${w}`;
  }
  return 'fine dining french restaurant';
}

/** Get a few lines of source around a URL for keyword context */
function getContext(content, url) {
  const idx = content.indexOf(url);
  if (idx === -1) return '';
  return content.slice(Math.max(0, idx - 200), idx + url.length + 200);
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const root = new URL('..', import.meta.url).pathname;
  const srcDir = join(root, 'src');

  const files = collectFiles(srcDir, ['.ts', '.tsx']);

  console.log(`\n🔍 Scanning ${files.length} source files for Unsplash URLs…\n`);

  // Collect all (url → [files that reference it])
  const urlToFiles = new Map();
  const fileContents = new Map();

  for (const file of files) {
    const content = readFileSync(file, 'utf8');
    fileContents.set(file, content);
    for (const url of extractUnsplashUrls(content)) {
      if (!urlToFiles.has(url)) urlToFiles.set(url, []);
      urlToFiles.get(url).push(file);
    }
  }

  console.log(`Found ${urlToFiles.size} unique Unsplash URLs.\n`);

  const broken = [];
  const ok = [];

  // Check each URL
  for (const [url, files] of urlToFiles) {
    process.stdout.write(`  Checking ${url.slice(0, 70)}… `);
    const isOk = await checkUrl(url);
    if (isOk) {
      process.stdout.write('✅\n');
      ok.push(url);
    } else {
      process.stdout.write('❌ BROKEN\n');
      broken.push({ url, files });
    }
  }

  console.log(`\n─────────────────────────────────────────`);
  console.log(`✅ OK:     ${ok.length}`);
  console.log(`❌ Broken: ${broken.length}`);

  if (broken.length === 0) {
    console.log('\nAll images are healthy. Nothing to fix.\n');
    return;
  }

  console.log('\nBroken URLs:');
  for (const { url, files } of broken) {
    console.log(`  ${url}`);
    for (const f of files) console.log(`    └─ ${f.replace(root, '')}`);
  }

  if (!FIX_MODE) {
    console.log('\nRun with --fix to automatically replace broken URLs.\n');
    return;
  }

  // Fix mode: find replacements and update files
  console.log('\n🔧 Finding replacements…\n');

  // Build replacement map: brokenUrl → replacementUrl
  const replacements = new Map();

  for (const { url, files } of broken) {
    // Use context from first file that references the URL
    const context = getContext(fileContents.get(files[0]) ?? '', url);
    const replacement = await findReplacement(url, context);

    // Verify the replacement actually works before committing
    process.stdout.write(`  Verifying replacement for broken URL… `);
    const replacementOk = await checkUrl(replacement);
    if (!replacementOk) {
      console.log(`⚠️  Replacement also broken, skipping.`);
      continue;
    }
    console.log(`✅`);
    replacements.set(url, replacement);
    console.log(`  ${url}`);
    console.log(`  → ${replacement}\n`);
  }

  // Apply replacements to files
  let filesUpdated = 0;
  for (const [url, replacement] of replacements) {
    for (const file of urlToFiles.get(url)) {
      let content = fileContents.get(file);
      const updated = content.replaceAll(url, replacement);
      if (updated !== content) {
        writeFileSync(file, updated, 'utf8');
        fileContents.set(file, updated); // update in-memory for subsequent passes
        filesUpdated++;
        console.log(`  Updated: ${file.replace(root, '')}`);
      }
    }
  }

  console.log(`\n✅ Fixed ${replacements.size} broken URL(s) across ${filesUpdated} file(s).\n`);
}

main().catch((err) => {
  console.error('\nFatal error:', err);
  process.exit(1);
});

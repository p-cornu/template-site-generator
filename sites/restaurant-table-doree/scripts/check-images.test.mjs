#!/usr/bin/env node
/**
 * check-images.test.mjs
 *
 * Unit tests for the image-check logic (no network calls).
 * Run: node scripts/check-images.test.mjs
 */

// ─── Inline the pure functions under test ─────────────────────────────────────
// (Duplicated here so the test has zero build/import overhead)

function extractUnsplashUrls(content) {
  const re = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9_-]+(?:\?[^'")\s]*)?/g;
  return [...new Set(content.match(re) ?? [])];
}

function getContext(content, url) {
  const idx = content.indexOf(url);
  if (idx === -1) return '';
  return content.slice(Math.max(0, idx - 200), idx + url.length + 200);
}

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

// ─── Test helpers ─────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

function assert(description, condition, detail = '') {
  if (condition) {
    console.log(`  ✅ ${description}`);
    passed++;
  } else {
    console.error(`  ❌ ${description}${detail ? ` — ${detail}` : ''}`);
    failed++;
  }
}

function assertEqual(description, actual, expected) {
  assert(description, actual === expected, `got "${actual}", expected "${expected}"`);
}

// ─── Tests ────────────────────────────────────────────────────────────────────

console.log('\n── extractUnsplashUrls ──────────────────────────────────────────\n');

{
  const content = `
    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85"
    src="https://images.unsplash.com/photo-1559339352-11d035aa65ce?w=800&q=80"
    src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=85"
  `;
  const urls = extractUnsplashUrls(content);
  assert('extracts 2 unique URLs (deduplication)', urls.length === 2);
  assert('first URL is correct', urls[0].includes('photo-1414235077428'));
  assert('second URL is correct', urls[1].includes('photo-1559339352'));
}

{
  const content = 'no images here at all';
  const urls = extractUnsplashUrls(content);
  assert('returns empty array when no URLs found', urls.length === 0);
}

{
  // URL with no query params
  const content = `background: url('https://images.unsplash.com/photo-abc123')`;
  const urls = extractUnsplashUrls(content);
  assert('extracts URL without query params', urls.length === 1);
  assertEqual('URL value is exact', urls[0], 'https://images.unsplash.com/photo-abc123');
}

{
  // Should NOT match non-image Unsplash URLs
  const content = `href="https://unsplash.com/@photographer"`;
  const urls = extractUnsplashUrls(content);
  assert('ignores unsplash.com profile links', urls.length === 0);
}

console.log('\n── getContext ───────────────────────────────────────────────────\n');

{
  const url = 'https://images.unsplash.com/photo-abc';
  const content = `
    id: 'homard',
    name: 'Homard Bleu Breton',
    image: '${url}?w=800',
    tags: ['seafood'],
  `;
  const ctx = getContext(content, url + '?w=800');
  assert('context contains surrounding text', ctx.includes('Homard Bleu Breton'));
  assert('context contains the URL', ctx.includes(url));
}

{
  const ctx = getContext('no url here', 'https://images.unsplash.com/photo-xyz');
  assert('returns empty string when URL not found', ctx === '');
}

console.log('\n── extractQuery ─────────────────────────────────────────────────\n');

{
  const ctx = `name: 'Homard Bleu Breton', alt: 'homard et crustacés'`;
  assertEqual('matches "homard" keyword', extractQuery(ctx), 'fine dining homard');
}

{
  const ctx = `alt: 'Salle principale de La Table Dorée', category: 'restaurant'`;
  assertEqual('matches "restaurant" keyword', extractQuery(ctx), 'fine dining restaurant');
}

{
  const ctx = `category: 'evenements', alt: 'Dîner de gala'`;
  assertEqual('matches "gala" keyword', extractQuery(ctx), 'fine dining gala');
}

{
  const ctx = `something totally unrelated`;
  assertEqual('falls back to default query', extractQuery(ctx), 'fine dining french restaurant');
}

{
  const ctx = `foie gras poêlé avec brioche`;
  assertEqual('matches multi-word "foie gras"', extractQuery(ctx), 'fine dining foie gras');
}

// ─── Summary ──────────────────────────────────────────────────────────────────

console.log(`\n─────────────────────────────────────────`);
console.log(`✅ Passed: ${passed}  ❌ Failed: ${failed}\n`);

if (failed > 0) process.exit(1);

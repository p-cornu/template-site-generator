import { getTranslations } from 'next-intl/server';
import { Zap, Twitter, Linkedin } from 'lucide-react';
import { socialLinks } from '@/content/pulsetrack';

export default async function Footer() {
  const t = await getTranslations('footer');

  const columns = [
    {
      titleKey: 'product',
      links: [
        { labelKey: 'linkFeatures', href: '#features' },
        { labelKey: 'linkPricing', href: '#pricing' },
        { labelKey: 'linkChangelog', href: '#' },
        { labelKey: 'linkRoadmap', href: '#' },
      ],
    },
    {
      titleKey: 'company',
      links: [
        { labelKey: 'linkAbout', href: '#' },
        { labelKey: 'linkBlog', href: '#' },
        { labelKey: 'linkCareers', href: '#' },
        { labelKey: 'linkPress', href: '#' },
      ],
    },
    {
      titleKey: 'resources',
      links: [
        { labelKey: 'linkDocs', href: '#' },
        { labelKey: 'linkApi', href: '#' },
        { labelKey: 'linkStatus', href: '#' },
        { labelKey: 'linkSecurity', href: '#' },
      ],
    },
    {
      titleKey: 'legal',
      links: [
        { labelKey: 'linkPrivacy', href: '#' },
        { labelKey: 'linkTerms', href: '#' },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border-subtle bg-bg-primary">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #7c3aed, #00f0ff, #7c3aed, transparent)' }}
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-violet-600">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="font-display font-bold text-lg text-text-primary tracking-tight">
                Pulse<span className="text-violet-500">Track</span>
              </span>
            </div>
            <p className="text-sm text-text-muted max-w-xs leading-relaxed mb-6">
              {t('tagline')}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.twitter}
                aria-label={t('twitterAlt')}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-card text-text-muted hover:text-neon hover:bg-bg-card-hover border border-border-subtle transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
<a
                href={socialLinks.linkedin}
                aria-label={t('linkedinAlt')}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-bg-card text-text-muted hover:text-neon hover:bg-bg-card-hover border border-border-subtle transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.titleKey}>
              <h3 className="text-xs font-display font-semibold text-text-primary uppercase tracking-widest mb-4">
                {t(col.titleKey)}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.labelKey}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
                    >
                      {t(link.labelKey)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-faint">{t('copyright')}</p>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            <span className="text-xs text-text-faint">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Nunito } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import '../globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: {
      default: t('title'),
      template: '%s | Maison Flour',
    },
    description: t('description'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      locale,
      type: 'website',
    },
    metadataBase: new URL('https://demo-cafe-maison-flour.vercel.app'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${playfair.variable} ${nunito.variable}`}
    >
      <body className="font-body antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

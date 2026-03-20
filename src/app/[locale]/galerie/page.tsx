import type { Metadata } from 'next';
import GalleryPage from '@/components/sections/GalleryPage';

type MetaMessages = {
  metadata: { galerieTitle: string; galerieDescription: string };
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages: MetaMessages = (
    await import(`@/i18n/messages/${locale}.json`)
  ).default;

  return {
    title: messages.metadata.galerieTitle,
    description: messages.metadata.galerieDescription,
    openGraph: {
      title: messages.metadata.galerieTitle,
      description: messages.metadata.galerieDescription,
      images: ['/og-image.jpg'],
    },
  };
}

export default function GaleriePage() {
  return <GalleryPage />;
}

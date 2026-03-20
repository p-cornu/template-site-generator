import type { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';

type MetaMessages = {
  metadata: { contactTitle: string; contactDescription: string };
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
    title: messages.metadata.contactTitle,
    description: messages.metadata.contactDescription,
    openGraph: {
      title: messages.metadata.contactTitle,
      description: messages.metadata.contactDescription,
      images: ['/og-image.jpg'],
    },
  };
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}

import Carousel from "@/components/shared/carousel/page";
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

interface GenerateMetadataParams {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: GenerateMetadataParams): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'meta' });
  const title = t('title');
  const description = t('description');
  const url = `https://humanoweb.com/${params.locale}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: ['https://humanoweb.com/og-image.jpg']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://humanoweb.com/og-image.jpg']
    },
    alternates: {
      canonical: url,
      languages: {
        en: 'https://humanoweb.com/en',
        es: 'https://humanoweb.com/es'
      }
    }
  };
}


const Homepage = () => {

  return (
    <div
      className="bg-humano-dark text-2xl col-span-2 text-humano-light rounded-lg overflow-hidden p-0 relative h-80 md:h-full"
    >
      <div className="absolute w-full h-full top-0 bottom-0 overflow-hidden rounded-sm">
        <Carousel />
      </div>
    </div>
  );
};

export default Homepage;

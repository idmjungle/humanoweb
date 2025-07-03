import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';

export async function generateLocalizedMetadata(
  locale: string,
  key: string,
  path: string
): Promise<Metadata> {
  const t = await getTranslations({ locale });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  const keywords = t(`${key}.keywords`);
  const url = `https://humanoweb.com/${locale}${path}`;

  return {
    title,
    description,
    keywords,
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
        en: `https://humanoweb.com/en${path}`,
        es: `https://humanoweb.com/es${path}`
      }
    }
  };
}

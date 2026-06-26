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
  const url = `https://www.humanoweb.com/${locale}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: ['https://www.humanoweb.com/images/humano_lines.png']
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://www.humanoweb.com/images/humano_lines.png']
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://www.humanoweb.com/en${path}`,
        es: `https://www.humanoweb.com/es${path}`
      }
    }
  };
}

import { generateLocalizedMetadata } from '@/lib/metadata';

type GenerateMetadataParams = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params }: GenerateMetadataParams) {
  return generateLocalizedMetadata(params.locale, 'works', '/works');
}

import WorksClient from './client';
import { generateLocalizedMetadata } from '@/lib/metadata';

interface GenerateMetadataParams {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: Promise<GenerateMetadataParams>) {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, 'WorksPage', '/works');
}

export default function WorksPage() {
  return <WorksClient />;
}

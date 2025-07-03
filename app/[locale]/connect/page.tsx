import ConnectClient from './client';
import { generateLocalizedMetadata } from '@/lib/metadata';

interface GenerateMetadataParams {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: GenerateMetadataParams) {
  const { locale } = params;
  return generateLocalizedMetadata(locale, 'ContactPage', '/connect');
}

export default function WorksPage() {
  return <ConnectClient />;
}

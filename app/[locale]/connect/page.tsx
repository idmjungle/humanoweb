import ConnectClient from './client';
import { generateLocalizedMetadata } from '@/lib/metadata';

interface GenerateMetadataParams {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: Promise<GenerateMetadataParams>) {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, 'ContactPage', '/connect');
}

export default function WorksPage() {
  return <ConnectClient />;
}

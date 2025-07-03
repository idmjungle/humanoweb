import ConnectClient from './client';
import { generateLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return generateLocalizedMetadata(locale, 'ContactPage', '/connect');
}

export default function WorksPage() {
  return <ConnectClient />;
}

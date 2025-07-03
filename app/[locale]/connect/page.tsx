import ConnectClient from './client';
import { generateLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }) {
  const { locale } = params;
  return generateLocalizedMetadata(locale, 'ContactPage', '/connect');
}

export default function WorksPage() {
  return <ConnectClient />;
}

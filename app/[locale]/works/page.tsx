import WorksClient from './client';
import { generateLocalizedMetadata } from '@/lib/metadata';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, "WorksPage", "/works");
}

export default function WorksPage() {
  return <WorksClient />;
}

import { generateLocalizedMetadata } from '@/lib/metadata';
import WorksClient from './client';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, "WorksPage", "/works");
}

export default function WorksPage() {
  return (
    <>
      <WorksClient />
    </>
  );
}

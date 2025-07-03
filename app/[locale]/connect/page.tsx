import ConnectClient from "./client";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, "ContactPage", "/connect");
}

export default function WorksPage() {
  return <ConnectClient />;
}

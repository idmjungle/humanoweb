import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
import Loading from "@/app/[locale]/loading";
import Header from "@/components/shared/header";
import Menu from "@/components/shared/header/menu";
import Footer from "@/components/shared/footer";

const funnel = Funnel_Display({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s >>> ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${funnel.className} antialiased`}>
        <NextIntlClientProvider>
          <div className="lg:bg-humano-light bg-humano-dark w-full h-lvh md:relative overflow-visible md:overflow-hidden md:p-4">
            <div className="flex flex-col bg-humano-dark md:rounded-4xl w-full md:h-full p-4 pb-32 md:pb-4">
              <Header />
              <div className="bg-humano-light rounded-2xl p-2 md:p-4 flex flex-auto w-full md:overflow-auto md:h-auto">
                <div className="grid md:grid-cols-3 grow-10 w-full gap-4 md:relative">
                  <Loading />
                  <Menu />
                  <main className="bg-humano-dark text-2xl col-span-2 text-humano-light rounded-lg md:overflow-auto relative">
                    {children}
                    <Footer />
                  </main>
                </div>
              </div>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

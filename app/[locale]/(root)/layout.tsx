'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/shared/header";
import Menu from "@/components/shared/header/menu";
import Footer from "@/components/shared/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="lg:bg-humano-light bg-humano-dark w-full h-lvh relative md:overflow-hidden md:p-4">
      <div className="flex flex-col bg-humano-dark md:rounded-4xl w-full md:h-full p-4 pb-20 md:pb-4">
        <Header />
        <div className="bg-humano-light rounded-2xl p-4 flex flex-auto w-full md:overflow-auto">
          <div className="grid grid-cols-3 grow-10 w-full gap-4 relative">
            <Menu />
            <main className={`bg-humano-dark text-2xl col-span-2 text-humano-light rounded-lg ${(pathname === "/en" || pathname === "/es") ? "overflow-hidden" : "overflow-auto"} ${(pathname === "/en" || pathname === "/es") ? "p-0" : "p-4"}`}>
              {children}
              <Footer />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

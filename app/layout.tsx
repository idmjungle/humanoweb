import "@/assets/styles/globals.css";
import { Funnel_Display } from "next/font/google";


const funnel = Funnel_Display({
  subsets: ["latin"],
});

import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={funnel.className}>{children}</body>
    </html>
  );
}

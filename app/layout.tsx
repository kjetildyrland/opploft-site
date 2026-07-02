import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oppløft — Vi finner flaskehalsene. KI fjerner dem.",
  description:
    "Oppløft hjelper norske virksomheter å finne flaskehalsene, løse dem med KI i verktøyene dere allerede har, og eie løsningen selv. For virksomheter i hele Norge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${familjenGrotesk.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}

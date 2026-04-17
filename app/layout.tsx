import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Ehab | Graphic & UI/UX Designer",
  description: "Creative designer crafting pixel-perfect user interfaces and brand identities. 4+ years of experience delivering design solutions across the Middle East.",
  keywords: ["Graphic Designer", "UI/UX Designer", "Brand Identity", "Web Design", "Cairo", "Egypt"],
  authors: [{ name: "Mohammed Ehab" }],
  openGraph: {
    title: "Mohammed Ehab | Graphic & UI/UX Designer",
    description: "Creative designer crafting pixel-perfect user interfaces and brand identities.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased noise">
        {children}
      </body>
    </html>
  );
}

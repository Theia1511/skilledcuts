import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SkilledCuts — Premium Digital Agency",
  description:
    "We design and develop websites, landing pages, and digital systems that help businesses scale faster. Premium website design, UI/UX, AI integrations, and automation.",
  keywords: [
    "digital agency",
    "website design",
    "web development",
    "UI/UX design",
    "landing pages",
    "AI integrations",
    "automation",
    "SkilledCuts",
  ],
  authors: [{ name: "SkilledCuts" }],
  openGraph: {
    title: "SkilledCuts — Premium Digital Agency",
    description: "Building Digital Experiences That Drive Growth",
    type: "website",
    url: "https://skilledcuts.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkilledCuts — Premium Digital Agency",
    description: "Building Digital Experiences That Drive Growth",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white`}
      >
        {children}
      </body>
    </html>
  );
}

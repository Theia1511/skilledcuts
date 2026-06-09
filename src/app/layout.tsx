import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkilledCuts — Premium Digital Agency",
  description:
    "We design and develop websites, landing pages, and digital systems that help businesses scale faster.",
  keywords: ["digital agency", "website design", "web development", "UI/UX", "AI integrations", "SkilledCuts"],
  openGraph: {
    title: "SkilledCuts — Premium Digital Agency",
    description: "Building Digital Experiences That Drive Growth",
    type: "website",
    url: "https://skilledcuts.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased bg-white text-[#111118]`}>
        {children}
      </body>
    </html>
  );
}

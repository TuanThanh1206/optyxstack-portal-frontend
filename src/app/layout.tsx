import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../lib/fontawesome";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OptyxStack Portal Dashboard",
  description: "OptyxStack Portal Dashboard",
  icons: {
    icon: [
      { url: "/icons/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon.ico",
  },
  openGraph: {
    title: "OptyxStack Portal Dashboard",
    description: "OptyxStack Portal Dashboard",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OptyxStack Portal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptyxStack Portal Dashboard",
    description: "OptyxStack Portal Dashboard",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


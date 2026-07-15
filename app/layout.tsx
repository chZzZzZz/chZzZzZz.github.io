import type { Metadata } from "next";
import { headers } from "next/headers";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Aster Vale — Independent Game Developer",
    description:
      "Small worlds, big feelings. Explore the games of independent developer Aster Vale.",
    openGraph: {
      title: "Aster Vale — Independent Game Developer",
      description: "Small worlds. Big feelings.",
      type: "website",
      images: [{ url: `${origin}/og.png`, width: 1732, height: 909, alt: "Aster Vale — Small worlds. Big feelings." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Aster Vale — Independent Game Developer",
      description: "Small worlds. Big feelings.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}

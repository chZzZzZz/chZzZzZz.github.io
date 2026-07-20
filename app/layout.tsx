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
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    title: "Inspiration Beggar — Independent Game Developer",
    description:
      "Explore IncreTop and Beat Shapes, incremental games by independent developer Inspiration Beggar.",
    openGraph: {
      title: "Inspiration Beggar — Independent Game Developer",
      description: "Systems that grow. Games that click.",
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1728,
          height: 904,
          alt: "Inspiration Beggar — IncreTop and Beat Shapes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Inspiration Beggar — Independent Game Developer",
      description: "Systems that grow. Games that click.",
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

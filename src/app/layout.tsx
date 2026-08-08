import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import { business } from "@/lib/content";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${business.name} | Alabama Remodeling & Landscaping`,
    template: `%s | ${business.shortName}`,
  },
  description:
    "TripleM Remodeling and Landscaping — home repairs, remodeling, lawn care, and outdoor projects in Greater Birmingham, Alabama. Call (205) 299-3791.",
  keywords: [
    "remodeling Birmingham AL",
    "handyman Alabama",
    "landscaping Birmingham",
    "home repairs",
    "deck construction",
    "lawn care",
    "TripleM Remodeling",
  ],
  openGraph: {
    title: `${business.name} | Alabama Remodeling & Landscaping`,
    description: business.tagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

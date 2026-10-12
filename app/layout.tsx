import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Mahima & Nitin | 22 July 2026",
  description:
    "Join us as we celebrate the beginning of our forever — Mahima & Nitin, July 22, 2026, Faridabad, Haryana. #MahikeSang",
  openGraph: {
    title: "Mahima & Nitin — 22 July 2026",
    description:
      "You are cordially invited to celebrate the union of Mahima & Nitin. #MahikeSang",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/couples-pic.jpeg",
        width: 1200,
        height: 630,
        alt: "Mahima & Nitin Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahima & Nitin — 22 July 2026",
    description:
      "You are cordially invited to celebrate the union of Mahima & Nitin. #MahikeSang",
    images: ["/images/couples-pic.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cormorant.variable} ${raleway.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

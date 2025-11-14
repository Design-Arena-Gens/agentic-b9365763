import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avery Chen · Frontend Developer",
  description:
    "Portfolio of Avery Chen, a React and Angular specialist with three years of frontend experience crafting thoughtful web products.",
  openGraph: {
    title: "Avery Chen · Frontend Developer",
    description:
      "React and Angular engineer with a focus on UX-driven delivery, rapid iteration, and measurable impact.",
    url: "https://agentic-b9365763.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avery Chen · Frontend Developer",
    description:
      "Three years of experience shipping polished experiences built with React and Angular.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        <Script
          id="angularjs"
          src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Appbar } from "@/components/Appbar";
import { Providers } from "@/components/providers/Providers";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "ImageAI - AI-Powered Photo Enhancement",
  description:
    "Transform your photos with AI-powered enhancement and editing tools.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="font-src * 'unsafe-inline';"
        />
        <link rel="icon" href="/favicon.ico" />
        <Script
          id="razorpay-checkout"
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Appbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
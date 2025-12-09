import type { Metadata } from "next";
import "./globals.css";
import GA from "./GA";
import { Suspense } from "react";   // 👈 ADD THIS

export const metadata: Metadata = {
  title: "Tellix · AI that talks like a human",
  description:
    "AI agents for enterprise support. Handle millions of calls with AI that talks like a human. Up and running in two weeks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">
        <Suspense fallback={null}>
          <GA />
        </Suspense>
        {children}
      </body>
    </html>
  );
}

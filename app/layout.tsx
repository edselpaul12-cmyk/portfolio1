import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edsel Paul Ortiz – Portfolio",
  description: "Portfolio of Edsel Paul Ortiz, BSIT student in Davao City.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
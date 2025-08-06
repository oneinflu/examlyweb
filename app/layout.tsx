import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Examly - Personalized Learning, Live Classes & AI-Powered Exam Prep",
  description: "Ace your exams with Examly — India's smartest platform for personalized learning paths, real exam simulations, live expert-led classes, AI tutor support, community discussions, and performance analytics. Learn smarter, not harder.",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "any",
      },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-foreground bg-background`}
      >
        {children}
      </body>
    </html>
  );
}

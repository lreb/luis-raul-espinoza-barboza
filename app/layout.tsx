import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Software Engineer | Professional IT Services",
  description: "Professional software engineering services - Full-stack development, system architecture, and technical consulting.",
  keywords: ["software engineer", "web development", "IT services", "full-stack developer"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Software Engineer | Professional IT Services",
    description: "Professional software engineering services - Full-stack development, system architecture, and technical consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

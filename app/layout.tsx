import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ScopeTraceAI",
  description: "Transform your software development workflow with AI-powered requirements clarity and test plan generation.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) - GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HFZNBZX2PG"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HFZNBZX2PG');
            `,
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

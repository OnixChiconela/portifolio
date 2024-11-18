import type { Metadata } from "next";
import "./globals.css";
import { ClientOnly } from "./components/ClientOnly";
import { Nunito_Sans } from "next/font/google"

export const metadata: Metadata = {
  title: "Jose Chiconela",
  description: "Hi welcome to my page",
};

const font = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],

});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body className={font.className}>
        <ClientOnly>
          <div></div>
        </ClientOnly>
        <div className="pb-20">
          {children}
        </div>
      </body>
    </html>
  );
}

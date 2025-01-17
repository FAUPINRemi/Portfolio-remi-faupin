import type { Metadata } from "next";
import "./globals.css";
import Head from 'next/head';


export const metadata: Metadata = {
  title: "Faupin Rémi",
  description: "Portfolio de Faupin Rémi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        style={{ backgroundColor: "#F6F6F6" }}
      >
        {children}
      </body>
    </html>
  );
}
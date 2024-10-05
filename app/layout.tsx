import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from 'next/font/google'

import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700','100','200','300','800','900'], // Add the weights you need
})

export const metadata: Metadata = {
  title: "MicronecBd",
  description: "Created By Sohanthink",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}>
          <Navbar/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}

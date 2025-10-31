'use client'

import { useEffect, useState } from 'react';
import {Inria_Serif } from "next/font/google";
import localFont from 'next/font/local'
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';
import Loading from './loading';
import ScrollToTop from '@/components/ui/ScrollToTop';
import WhatsappButton from '@/components/ui/WhatsappButton';

const textFont = Inria_Serif({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["300", "400", "700"]
});

const styeFont = localFont({ 
  src: '../styles/Civane.otf',
  variable: '--font-style'
})

export const metadata = {
  title: "GOASAYA | Asian Progressive Dining Experience",
  description:"Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
  openGraph: {
    title: "GOASAYA | Asian Progressive Dining Experience",
    description:"Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
    url: "https://goasaya.com",
    siteName: "GoaSaya",
    images: [
      {
        url: "/logo/09.jpg",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOASAYA | Asian Progressive Dining Experience",
    description:
      "Discovered the flavors of adventures at cave, where grilled dishes, unique drinks, and cozy cave vibes come together in one unforgetables experience",
    images: ["/logo/09.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <body className={`${textFont.variable} ${styeFont.variable}`}>
        {loading ? <Loading/> : (
          <>
            <Header />
            <ScrollToTop />
            <WhatsappButton/>
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}

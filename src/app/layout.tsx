// IMPORT SASS FILES
import '../styles.scss';

import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import TopHeader from '../components/Layout/TopHeader';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

// SLICK CAROUSEL
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js 14 - Boilerplate',
  description: 'Meta Description',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>
        {/* <TopHeader /> */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// IMPORT SASS FILES
import '../sass/style.scss';

import { Inter } from 'next/font/google';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js 13 - Boilerplate',
  description: 'Meta Description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

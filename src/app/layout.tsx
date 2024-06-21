import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import Header from '@/components/header/Header';
import FooterPage from '@/components/footer/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cloud Hosting',
  description: 'Cloud Hosting project',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastContainer theme='colored' position='top-center' />
        <main>{children}</main>
        <FooterPage />
      </body>
    </html>
  );
}

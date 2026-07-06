import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/app/components/layout/navbar';
import ClientOnly from '@/app/components/layout/ClientOnly';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Commonwealth Facilities & Security',
  description: 'Reliable Workforce. Secure Sites. Clean Environments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //<ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-[#272980]`}>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          {children}
          <Toaster />
        </body>
      </html>
    //</ClerkProvider>
  );
}

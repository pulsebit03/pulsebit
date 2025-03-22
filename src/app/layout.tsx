'use client';

import { GeistSans } from 'geist/font/sans';
import './globals.css';
import './animations.css';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initAnimations } from './initAnimations';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  useEffect(() => {
    initAnimations();
  }, [pathname]);

  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}

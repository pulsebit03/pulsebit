'use client';

import { GeistSans } from 'geist/font/sans';
import './globals.css';
import './animations.css';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import MaintenancePage from '@/components/MaintenancePage';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { initAnimations } from './initAnimations';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  useEffect(() => {
    initAnimations();
    const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
    setIsMaintenanceMode(maintenanceMode);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {isMaintenanceMode ? (
          <MaintenancePage />
        ) : (
          <>
            <Header />
            {children}
            <WhatsAppButton />
          </>
        )}
      </body>
    </html>
  );
}

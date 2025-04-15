import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PulseBit - Converting Imagination into Innovation',
  description: 'PulseBit is a leading technology company specializing in web development, AI solutions, and digital innovation.',
  keywords: ['web development', 'AI solutions', 'digital innovation', 'technology consulting', 'software development'],
  authors: [{ name: 'PulseBit' }],
  creator: 'PulseBit',
  publisher: 'PulseBit',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://pulsebit.tech',
    siteName: 'PulseBit',
    title: 'PulseBit - Converting Imagination into Innovation',
    description: 'PulseBit is a leading technology company specializing in web development, AI solutions, and digital innovation.',
    images: [
      {
        url: '/projects/brand-logo.png',
        width: 1200,
        height: 630,
        alt: 'PulseBit Hero Image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PulseBit - Converting Imagination into Innovation',
    description: 'PulseBit is a leading technology company specializing in web development, AI solutions, and digital innovation.',
    images: ['/projects/brand-logo.png']
  }
};
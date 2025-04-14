import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PulseBit | Professional Web & Mobile App Development (iOS/Android) Solutions',
  description: 'Leading development agency specializing in iOS & Android mobile apps, web applications, and digital solutions. Expert in native and cross-platform mobile development, modern web applications, and innovative technology consulting. Transform your business with our professional development services.',
  keywords: ['mobile app development', 'iOS app development', 'Android app development', 'native mobile apps', 'cross-platform development', 'web development', 'custom software development', 'digital solutions', 'web applications', 'technology consulting', 'MERN stack', 'Next.js development', 'responsive design', 'PulseBit', 'professional development services'],
  authors: [{ name: 'PulseBit Technologies' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow, max-image-preview:large',
  alternates: {
    canonical: 'https://pulsebit.tech'
  },
  verification: {
    google: 'FJRmTKvjKPyaZ6ofgrP8v5W7bMiuPgeSDqrBTvSt--8',
    yandex: 'b5529fc3155db79c'
  },
  openGraph: {
    title: 'PulseBit | Professional Web & Mobile App Development Solutions',
    description: 'Transform your business with our expert mobile and web development services. Specializing in iOS & Android apps, custom digital solutions, modern web applications, and innovative technology consulting.',
    url: 'https://pulsebit.tech',
    siteName: 'PulseBit Technologies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://pulsebit.tech/projects/brand-logo.png',
        width: 1200,
        height: 630,
        alt: 'PulseBit Technologies - Web Development and Digital Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PulseBit | Mobile & Web Development Solutions',
    description: 'Transform your business with our expert iOS/Android mobile app development, web development services and innovative digital solutions.',
    creator: '@PulseBit',
    images: ['https://pulsebit.tech/projects/brand-logo.png']
  },
  other: {
    'theme-color': '#000000',
    'msapplication-TileColor': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black'
  }
};
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { clsx } from 'clsx';
import { Providers } from '@/components/Providers';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'Essentials by MPB Health — Premium Virtual Care & Concierge Services',
    template: '%s | MPB Health'
  },
  description: 'Unlimited $0 virtual urgent care, primary care, mental health, expert concierge assistance, pharmacy & supplement discounts, QR LifeCode, Medical Records Vault, and more. Join thousands of satisfied members.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://essentials.mpb.health'),
  alternates: { 
    canonical: '/' 
  },
  keywords: [
    'virtual healthcare', 'telemedicine', 'urgent care', 'primary care', 'mental health',
    'healthcare concierge', 'medical records', 'pharmacy discounts', 'MPB Health',
    'telehealth', 'online doctor', 'virtual consultation', 'healthcare membership'
  ],
  authors: [{ name: 'MPB Health' }],
  creator: 'MPB Health',
  publisher: 'MPB Health',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: { 
    title: 'Essentials by MPB Health — Premium Virtual Care & Concierge Services',
    description: 'Unlimited $0 virtual urgent care, primary care, mental health, expert concierge assistance, and smart savings. Join thousands of satisfied members.',
    type: 'website', 
    url: '/', 
    siteName: 'MPB Health Essentials',
    locale: 'en_US',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'MPB Health Essentials - Virtual Healthcare & Concierge Services'
    }]
  },
  twitter: { 
    card: 'summary_large_image', 
    title: 'Essentials by MPB Health — Premium Virtual Care',
    description: 'Unlimited $0 virtual care, expert concierge, and smart savings.',
    creator: '@mpbhealth',
    images: ['/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { 
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0a4e8e' },
    ],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.variable}>
      <head>
        <meta name="theme-color" content="#0a4e8e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={clsx(
        'min-h-dvh antialiased font-sans',
        'selection:bg-accent-200 selection:text-accent-900'
      )}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black p-3 rounded-lg shadow-lg z-50 font-medium">
          Skip to main content
        </a>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
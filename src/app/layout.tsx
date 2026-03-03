import type { Metadata } from 'next';
import { Bubblegum_Sans, Open_Sans } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/globals.scss';

const bubblegumSans = Bubblegum_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Instafluff — Raphael Mun',
    template: '%s | Instafluff',
  },
  description:
    'Builder, engineer, creator, entrepreneur. The personal home of Raphael (Instafluff) Mun — blog, projects, and everything comfy.',
  metadataBase: new URL('https://www.instafluff.tv'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Instafluff',
    title: 'Instafluff — Raphael Mun',
    description:
      'Builder, engineer, creator, entrepreneur. Blog, projects, and everything comfy.',
    url: 'https://www.instafluff.tv',
    images: [
      {
        url: '/assets/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Instafluff — Raphael Mun',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@inaboringroom',
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  icons: {
    icon: '/favicon.png',
    apple: '/icons/icon-192x192.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bubblegumSans.variable} ${openSans.variable}`}>
      <body>
        <a href="#main-content" className="visually-hidden">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

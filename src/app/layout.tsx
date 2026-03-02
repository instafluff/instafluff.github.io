import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '@/styles/globals.scss';

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
    <html lang="en">
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

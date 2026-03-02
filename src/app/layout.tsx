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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

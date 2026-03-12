import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pixel Art',
  description:
    'Pixel art gallery — animated dogs, cats, game sprites, emotes, and more by Raphael Mun (Instafluff).',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
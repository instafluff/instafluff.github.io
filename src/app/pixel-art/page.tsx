'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  PIXEL_ART_CATEGORIES,
  pixelArt,
  type PixelArt,
  type PixelArtCategory,
} from '@/lib/pixel-art';
import styles from './page.module.scss';

type FilterValue = 'All' | PixelArtCategory;

export default function PixelArtPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('All');
  const [selectedArt, setSelectedArt] = useState<PixelArt | null>(null);

  const filteredArt = useMemo(() => {
    if (activeFilter === 'All') return pixelArt;
    return pixelArt.filter((piece) => piece.category === activeFilter);
  }, [activeFilter]);

  const categoryCounts = useMemo(() => {
    return PIXEL_ART_CATEGORIES.reduce<Record<PixelArtCategory, number>>(
      (acc, category) => {
        acc[category] = pixelArt.filter((piece) => piece.category === category).length;
        return acc;
      },
      {
        'Pixel Pups': 0,
        'Pixel Kittens': 0,
        'Pixel Fun': 0,
        'Community Redeems': 0,
        'Icons & Effects': 0,
        'Game Sprites': 0,
        Emotes: 0,
      }
    );
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedArt(null);
      }
    }

    if (selectedArt) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedArt]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Pixel Art</h1>
      <p className={styles.subtitle}>
        Pixel art pieces created on stream — pups, kittens, emotes, game sprites,
        and lots of cozy animated chaos.
      </p>

      <div className={styles.filters}>
        <button
          type="button"
          onClick={() => setActiveFilter('All')}
          className={`${styles.filterBtn} ${activeFilter === 'All' ? styles.filterBtnActive : ''}`}
        >
          All ({pixelArt.length})
        </button>

        {PIXEL_ART_CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveFilter(category)}
            className={`${styles.filterBtn} ${activeFilter === category ? styles.filterBtnActive : ''}`}
          >
            {category} ({categoryCounts[category]})
          </button>
        ))}
      </div>

      <div className={styles.gallery}>
        {filteredArt.map((piece) => (
          <button
            key={piece.id}
            type="button"
            className={styles.card}
            onClick={() => setSelectedArt(piece)}
          >
            <img
              src={piece.src}
              alt={piece.name}
              className={styles.cardImage}
              loading="lazy"
            />
            <span className={styles.cardName}>{piece.name}</span>
          </button>
        ))}
      </div>

      {selectedArt && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedArt(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedArt.name}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setSelectedArt(null)}
            aria-label="Close lightbox"
          >
            ×
          </button>
          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedArt.src}
              alt={selectedArt.name}
              className={styles.lightboxImage}
            />
            <p className={styles.lightboxName}>{selectedArt.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
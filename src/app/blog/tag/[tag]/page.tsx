import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getAllTags } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';
import styles from '../../page.module.scss';

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllTags().map((tag) => ({ tag }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

type PageProps = { params: Promise<{ tag: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Posts tagged "${tag}"`,
    description: `Blog posts tagged with "${tag}" by Raphael Mun (Instafluff).`,
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const allTags = getAllTags();
  if (!allTags.includes(tag)) notFound();

  const posts = getAllPosts().filter((p) => p.tags.includes(tag));

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Tag: {tag}</h1>
      <p className={styles.subtitle}>
        {posts.length} post{posts.length !== 1 ? 's' : ''} tagged with &ldquo;{tag}&rdquo;
      </p>

      <div className={styles.tagFilters}>
        <Link href="/blog" className={styles.tagLink}>
          All posts
        </Link>
        {allTags.map((t) => (
          <Link
            key={t}
            href={`/blog/tag/${t}`}
            className={`${styles.tagLink} ${t === tag ? styles.tagLinkActive : ''}`}
          >
            {t}
          </Link>
        ))}
      </div>

      <div className={styles.grid}>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

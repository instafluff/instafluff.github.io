import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getPostBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';
import styles from './page.module.scss';

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      ...(post.coverImage && {
        images: [{ url: post.coverImage }],
      }),
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className={styles.article}>
      <Link href="/blog" className={styles.backLink}>
        ← Back to blog
      </Link>

      {post.coverImage && (
        <div className={styles.coverWrapper}>
          <Image
            src={post.coverImage}
            alt={post.title}
            width={760}
            height={400}
            className={styles.coverImage}
            priority
          />
        </div>
      )}

      <header className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
        {post.tags.length > 0 && (
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag}`} className={styles.tag}>
                {tag}
              </Link>
            ))}
          </div>
        )}
      </header>

      <div className={styles.prose}>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}

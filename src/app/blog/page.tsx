import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import styles from './page.module.scss';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on building, engineering, side businesses, and life — by Raphael Mun (Instafluff).',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.subtitle}>
        Building in public — engineering, side businesses, and life.
      </p>

      {tags.length > 0 && (
        <div className={styles.tagFilters}>
          {tags.map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag}`} className={styles.tagLink}>
              {tag}
            </Link>
          ))}
        </div>
      )}

      {posts.length > 0 ? (
        <div className={styles.grid}>
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <p>Posts are on their way! The blog is being built with MDX — stay tuned. ✨</p>
        </div>
      )}
    </div>
  );
}

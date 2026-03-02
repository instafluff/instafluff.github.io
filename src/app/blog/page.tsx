import styles from './page.module.scss';

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on building, engineering, side businesses, and life — by Raphael Mun (Instafluff).',
};

export default function BlogPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.placeholder}>
        <p>Posts are on their way! The blog is being built with MDX — stay tuned. ✨</p>
      </div>
    </div>
  );
}

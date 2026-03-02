import styles from './page.module.scss';

export const metadata = {
  title: 'Projects',
  description: 'Open source, side businesses, games, and tools by Raphael Mun (Instafluff).',
};

export default function ProjectsPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.placeholder}>
        <p>The full project showcase is coming soon — hundreds of projects, all in one place. 🚀</p>
      </div>
    </div>
  );
}

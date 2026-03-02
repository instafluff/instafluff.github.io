import { projects, CATEGORIES } from '@/lib/projects';
import type { Project } from '@/lib/projects';
import styles from './page.module.scss';

export const metadata = {
  title: 'Projects',
  description: 'Open source, side businesses, games, and tools by Raphael Mun (Instafluff).',
};

function StatusBadge({ status }: { status?: Project['status'] }) {
  if (!status) return null;
  const classMap: Record<string, string> = {
    active: styles.statusActive,
    maintained: styles.statusMaintained,
    archived: styles.statusArchived,
    beta: styles.statusBeta,
  };
  return (
    <span className={`${styles.cardStatus} ${classMap[status] ?? ''}`}>
      {status}
    </span>
  );
}

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.card} ${featured ? styles.cardFeatured : ''}`}
    >
      <div className={styles.cardHeader}>
        <span className={styles.cardTag}>{project.category}</span>
        <StatusBadge status={project.status} />
      </div>
      <h3 className={styles.cardName}>{project.name}</h3>
      <p className={styles.cardDesc}>{project.description}</p>
    </a>
  );
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.subtitle}>
        Open source tools, side businesses, games, and everything else
        I&rsquo;ve built over the years.
      </p>

      {/* Featured */}
      {featured.length > 0 && (
        <section className={styles.featuredSection}>
          <h2 className={styles.featuredTitle}>⭐ Featured</h2>
          <div className={styles.featuredGrid}>
            {featured.map((p) => (
              <ProjectCard key={p.name} project={p} featured />
            ))}
          </div>
        </section>
      )}

      {/* By Category */}
      {CATEGORIES.map((cat) => {
        const catProjects = projects.filter(
          (p) => p.category === cat && !p.featured
        );
        if (catProjects.length === 0) return null;
        return (
          <section key={cat} className={styles.categoryGroup}>
            <h2 className={styles.categoryTitle}>{cat}</h2>
            <div className={styles.grid}>
              {catProjects.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

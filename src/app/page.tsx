import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.greeting}>Hey there! I&rsquo;m</p>
          <h1 className={styles.title}>Raphael Mun</h1>
          <p className={styles.subtitle}>
            Builder, engineer, creator, entrepreneur. I make comfy things on the
            internet — from open source tools and side businesses to games and
            community projects.
          </p>
          <Link href="/about" className={styles.cta}>
            Learn more about me
          </Link>
        </div>
      </section>

      <div className={`container ${styles.sections}`}>
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Blog</h2>
          <p className={styles.sectionDesc}>
            Thoughts on building, engineering, side businesses, and life in
            Prague. Building in public, one post at a time.
          </p>
          <span className={styles.comingSoon}>Coming soon</span>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionDesc}>
            Hundreds of open source projects, side businesses, games, and Twitch
            tools — all in one place.
          </p>
          <span className={styles.comingSoon}>Coming soon</span>
        </div>
      </div>
    </>
  );
}

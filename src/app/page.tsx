import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import styles from './page.module.scss';

const FEATURED_PROJECTS = [
  {
    name: 'ComfyJS',
    desc: 'The comfiest Twitch chat library for JavaScript — used by thousands of streamers and developers.',
    url: 'https://github.com/instafluff/ComfyJS',
    tag: 'Open Source',
  },
  {
    name: 'PixelPlush',
    desc: 'Interactive stream pets and games that live on your Twitch stream. Community-built, endlessly fun.',
    url: 'https://pixelplush.dev',
    tag: 'Game',
  },
  {
    name: 'ComfySend',
    desc: 'Simple, secure file sharing — no account needed. Send files to anyone with a link.',
    url: 'https://comfysend.com',
    tag: 'Side Business',
  },
  {
    name: 'MediaOptimizer',
    desc: 'Batch-optimize images and media for the web. Fast, free, runs in the browser.',
    url: 'https://mediaoptimizer.io',
    tag: 'Side Business',
  },
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.greeting}>Hey there! I&rsquo;m</p>
          <h1 className={styles.title}>Raphael Mun</h1>
          <p className={styles.subtitle}>
            Builder, engineer, creator, entrepreneur. I make comfy things on the
            internet — from open source tools and side businesses to games and
            community projects.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/about" className={styles.cta}>
              About me
            </Link>
            <Link href="/projects" className={styles.ctaSecondary}>
              View projects
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      {recentPosts.length > 0 && (
        <section className={styles.postsSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Latest from the Blog</h2>
            <div className={styles.postsGrid}>
              {recentPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <div className={styles.sectionCta}>
              <Link href="/blog" className={styles.ctaSecondary}>
                All posts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      <section className={styles.projectsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <div className={styles.projectsGrid}>
            {FEATURED_PROJECTS.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectCard}
              >
                <span className={styles.projectTag}>{project.tag}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
              </a>
            ))}
          </div>
          <div className={styles.sectionCta}>
            <Link href="/projects" className={styles.ctaSecondary}>
              All projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className={styles.connectSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Let&rsquo;s Connect</h2>
          <p className={styles.connectDesc}>
            Join the community on Discord, follow along on GitHub, or just say
            hi on Twitter.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://discord.gg/instafluff" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Discord
            </a>
            <a href="https://github.com/instafluff" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              GitHub
            </a>
            <a href="https://twitter.com/inaboringroom" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Twitter / X
            </a>
            <a href="https://twitch.tv/instafluff" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Twitch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

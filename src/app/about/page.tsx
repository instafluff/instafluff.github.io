import Image from 'next/image';
import styles from './page.module.scss';

export const metadata = {
  title: 'About',
  description: 'About Raphael Mun (Instafluff) — Microsoft Principal Engineer, entrepreneur, pilot, community builder, and cookbook author.',
};

const TIMELINE = [
  { year: '2026', text: 'Rebuilding instafluff.tv — this site! — as a personal home base and blog.' },
  { year: '2025', text: 'Living in Prague, continuing to build side businesses and open source.' },
  { year: '2023', text: 'Earned pilot\'s license. Published The Spellbook Cookbook.' },
  { year: '2021', text: 'Joined Microsoft as a Principal Software Engineer.' },
  { year: '2019', text: 'Started the Instafluff Twitch community. Built 200+ open source projects live on stream.' },
  { year: '2018', text: 'Launched PixelPlush — interactive stream pets for Twitch.' },
  { year: '2017', text: 'Created ComfyJS — the most popular Twitch chat library for JavaScript.' },
];

const CONNECT_LINKS = [
  { label: 'GitHub', url: 'https://github.com/instafluff' },
  { label: 'Discord', url: 'https://discord.gg/instafluff' },
  { label: 'Twitter / X', url: 'https://twitter.com/inaboringroom' },
  { label: 'Twitch', url: 'https://twitch.tv/instafluff' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/nicemun/' },
  { label: 'Sponsor on GitHub', url: 'https://github.com/sponsors/instafluff' },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>About Me</h1>

      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <Image
          src="/assets/Profile.png"
          alt="Raphael Mun"
          width={160}
          height={160}
          className={styles.avatar}
        />
        <div className={styles.profileInfo}>
          <h2 className={styles.profileName}>Raphael Mun</h2>
          <p className={styles.profileTagline}>
            Also known as <strong>Instafluff</strong>. Principal Software
            Engineer at Microsoft, based in Prague. Builder of comfy things on
            the internet — open source, side businesses, games, communities, and
            the occasional cookbook.
          </p>
        </div>
      </div>

      {/* What I Do */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>What I Do</h2>
        <div className={styles.cardContent}>
          <p>
            By day, I&rsquo;m a Principal Engineer at Microsoft working on
            large-scale systems. By night (and weekends), I build open source
            tools like ComfyJS, run side businesses like ComfySend and
            MediaOptimizer, make games like PixelPlush, and occasionally stream
            on Twitch.
          </p>
          <p>
            I&rsquo;ve published a cookbook (<em>The Spellbook Cookbook</em>),
            learned to fly planes, built hundreds of projects live on stream with
            an incredible community, and I&rsquo;m always working on something
            new. I believe in building in public, shipping often, and making
            things that are genuinely useful — or at least genuinely fun.
          </p>
        </div>
      </div>

      {/* Journey */}
      <div className={styles.timeline}>
        <h2 className={styles.timelineTitle}>The Journey</h2>
        <ul className={styles.timelineList}>
          {TIMELINE.map(({ year, text }) => (
            <li key={year} className={styles.timelineItem}>
              <div className={styles.timelineYear}>{year}</div>
              <div className={styles.timelineText}>{text}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Fun Facts */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Fun Facts</h2>
        <div className={styles.cardContent}>
          <p>
            🛩️ Licensed private pilot — I fly small planes for fun.
          </p>
          <p>
            📖 Published <em>The Spellbook Cookbook</em> — a real cookbook with
            fantasy-themed recipes.
          </p>
          <p>
            🌍 Currently living in Prague, Czech Republic. Previously: California,
            New York, and more.
          </p>
          <p>
            🎮 Built 200+ projects live on Twitch with a community of hundreds
            of contributors.
          </p>
          <p>
            🐕 Dog dad. Cat enthusiast. Fluff is a way of life.
          </p>
        </div>
      </div>

      {/* Get in Touch */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Get in Touch</h2>
        <div className={styles.cardContent}>
          <p>
            The best way to reach me is through Discord or Twitter. I&rsquo;m
            also on GitHub if you want to see what I&rsquo;m building, or
            LinkedIn if that&rsquo;s more your speed.
          </p>
        </div>
        <div className={styles.connectGrid}>
          {CONNECT_LINKS.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.connectLink}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

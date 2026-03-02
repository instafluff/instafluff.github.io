import styles from './page.module.scss';

export const metadata = {
  title: 'About',
  description: 'About Raphael Mun (Instafluff) — Microsoft Principal Engineer, entrepreneur, pilot, community builder, and cookbook author.',
};

export default function AboutPage() {
  return (
    <div className={`container ${styles.page}`}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles.intro}>
        <p>
          Hi! I&rsquo;m Raphael Mun, also known as Instafluff. I&rsquo;m a
          Principal Software Engineer at Microsoft, currently based in Prague.
          I build things — open source libraries, side businesses, games,
          communities, and occasionally cookbooks.
        </p>
        <p>
          When I&rsquo;m not coding, you can find me flying planes, exploring
          new cities, or hanging out with the Instafluff community on Discord.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>What I Do</h2>
        <p>
          By day, I&rsquo;m a Principal Engineer at Microsoft. By night (and
          weekends), I build open source tools, run side businesses like
          ComfySend and MediaOptimizer, make games like PixelPlush, and stream
          on Twitch. I&rsquo;ve published a cookbook, learned to fly, and I&rsquo;m
          always working on something new.
        </p>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Get in Touch</h2>
        <p>
          The best way to reach me is through{' '}
          <a href="https://discord.gg/instafluff" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          . You can also find me on{' '}
          <a href="https://github.com/instafluff" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' '}and{' '}
          <a href="https://twitter.com/inaboringroom" target="_blank" rel="noopener noreferrer">
            Twitter/X
          </a>
          .
        </p>
      </div>
    </div>
  );
}

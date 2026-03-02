import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.brand}>
          <div className={styles.brandName}>Instafluff</div>
          <p className={styles.brandTagline}>
            Builder, engineer, creator, entrepreneur.
            <br />
            Making comfy things on the internet.
          </p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>Navigate</div>
          <ul className={styles.linksList}>
            <li><Link href="/" className={styles.linkItem}>Home</Link></li>
            <li><Link href="/blog" className={styles.linkItem}>Blog</Link></li>
            <li><Link href="/projects" className={styles.linkItem}>Projects</Link></li>
            <li><Link href="/about" className={styles.linkItem}>About</Link></li>
          </ul>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.linksTitle}>Connect</div>
          <ul className={styles.linksList}>
            <li>
              <a href="https://github.com/instafluff" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/instafluff" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                Discord
              </a>
            </li>
            <li>
              <a href="https://twitch.tv/instafluff" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                Twitch
              </a>
            </li>
            <li>
              <a href="https://twitter.com/inaboringroom" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                Twitter / X
              </a>
            </li>
            <li>
              <a href="/feed.xml" className={styles.linkItem}>
                RSS Feed
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Raphael Mun. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={`container ${styles.page}`}>
      <Image
        src="/assets/fluffle-sad.png"
        alt="Sad Fluffle"
        width={120}
        height={120}
        className={styles.sadFluffle}
      />
      <div className={styles.code}>404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>
        Looks like this page wandered off into the fluff. Let&rsquo;s get you
        back home!
      </p>
      <Link href="/" className={styles.homeLink}>
        Back to Home
      </Link>
    </div>
  );
}

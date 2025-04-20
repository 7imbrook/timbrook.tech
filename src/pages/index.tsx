import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <title>{siteConfig.title}</title>
      <div className={styles.main}>
        <header className={styles.header}>
          Michael Timbrook <sub className={styles.sub}>Software Engineer</sub>
          <article className={styles.article}>
            <Link className={styles.link} to={'blog'}>...read more</Link>
          </article>
        </header>
        <footer>
          Email: <a className={styles.link} href="michael@timbrook.tech">michael@timbrook.tech</a>
        </footer>
      </div>
    </>
  );
}

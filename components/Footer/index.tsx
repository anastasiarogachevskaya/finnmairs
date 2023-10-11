import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text20}>We serve in Finnish and English</div>
      <div className={styles.block}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/path-to-facebook-icon.svg"
            alt="Facebook"
            className={styles.icon}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="/path-to-twitter-icon.svg"
            alt="Twitter"
            className={styles.icon}
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/path-to-instagram-icon.svg"
            alt="Instagram"
            className={styles.icon}
          />
        </a>
      </div>
      <div className={styles.text14}>
        <Link href={'mailto:info@finmairs.fi'}>info@finmairs.fi</Link>, 044 517
        4878, Sahaajankatu 24, 00880 Helsinki{' '}
      </div>
      <div className={styles.text14}>
        <div>© Finmairs — All rights reserved</div>
        <Link href={'XXX'} target="_blank" className={styles.link}>
          Tietosuojaseloste
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

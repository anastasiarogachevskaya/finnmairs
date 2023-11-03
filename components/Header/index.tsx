import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SocialButtons from '../SocialButtons';

import styles from './Header.module.css';

const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.logo}>
        <Image src="/img/logo.svg" alt="Finmairs" width={154} height={36} />
      </div>
      <nav className={styles.menu}>
        <ul className={styles.horizontal}>
          <li className={styles.menuitem}>
            <Link href="#about-us">About Us</Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="#services">Services</Link>
          </li>
          <li className={styles.menuitem}>
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <Link
            href={'tel:+358445174878'}
            target="_blank"
            rel="noopener noreferrer"
          >
            044 517 4878
          </Link>
        </div>
        <div className={styles.contact}>
          <Link
            href={'mailto:info@finmairs.fi'}
            target="_blank"
            rel="noopener noreferrer"
          >
            info@finmairs.fi
          </Link>
        </div>
      </div>
      <SocialButtons variant="blue" />
    </section>
  );
};

export default Header;

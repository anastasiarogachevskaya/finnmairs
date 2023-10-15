import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <>
      <section className={styles.backgroundImage}>
        <Image
          src="/img/card.jpg"
          alt="Card"
          width="1024"
          height="555"
          quality={100}
          className={styles.card}
        />
      </section>

      <footer className={styles.footer}>
        <div className={styles.text20}>We serve in Finnish and English</div>
        <div className={styles.block}>
          <Link
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/icon_whatsapp.svg"
              alt="WhatsApp"
              width={20}
              height={20}
              className={styles.icon}
              quality={100}
            />
          </Link>
          <Link
            href="https://Instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/icon_instagram.svg"
              alt="Instagram"
              width={20}
              height={20}
              className={styles.icon}
              quality={100}
            />
          </Link>
          <Link
            href="https://messenger.com" // TODO: change this
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="img/icon_messenger.svg"
              alt="Messenger"
              width={20}
              height={20}
              className={styles.icon}
              quality={100}
            />
          </Link>
        </div>
        <div className={styles.text14}>
          <Link href={'mailto:info@finmairs.fi'}>info@finmairs.fi</Link>, 044
          517 4878, Sahaajankatu 24, 00880 Helsinki{' '}
        </div>
        <div className={styles.text14}>
          <div>© Finmairs — All rights reserved</div>
          <Link href={'XXX'} target="_blank" className={styles.link}>
            Tietosuojaseloste
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;

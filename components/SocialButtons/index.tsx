import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './SocialButtons.module.css';

type Variant = 'white' | 'blue';

interface Props {
  variant: Variant;
}

const SocialButtons: React.FC<Props> = ({ variant = 'white' }) => (
  <div className={styles.block}>
    <Link href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
      <Image
        src={`/img/icon_whatsapp${variant === 'blue' ? '-blue' : ''}.svg`}
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
        src={`/img/icon_instagram${variant === 'blue' ? '-blue' : ''}.svg`}
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
        src={`img/icon_messenger${variant === 'blue' ? '-blue' : ''}.svg`}
        alt="Messenger"
        width={20}
        height={20}
        className={styles.icon}
        quality={100}
      />
    </Link>
  </div>
);

export default SocialButtons;

import React from 'react';
import Image from 'next/image';
import styles from './Line.module.css';

const Line = () => (
  <div className={styles.thing}>
    <div className={styles.line}></div>
    <div className={styles.flex}>
      <div className={`${styles.dot} ${styles.blue}`}></div>
      <div className={styles.triangle}>
        <Image src="/img/triangle.svg" height="7" width="10" alt={'svg'} />
      </div>
      <div className={styles.triangle}>
        <Image src="/img/triangle.svg" height="7" width="10" alt={'svg'} />
      </div>
      <div className={styles.triangle}>
        <Image src="/img/triangle.svg" height="7" width="10" alt={'svg'} />
      </div>
      <div className={styles.triangle}>
        <Image src="/img/triangle.svg" height="7" width="10" alt={'svg'} />
      </div>
      <div className={`${styles.dot} ${styles.orange}`}></div>
    </div>
  </div>
);

export default Line;

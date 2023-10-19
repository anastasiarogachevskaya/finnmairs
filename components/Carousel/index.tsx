import React from 'react';
import Image from 'next/image';

import styles from './Carousel.module.css';

const Carousel = () => {
  return (
    <section>
      <div className={styles.carousel}>
        <Image
          src="/img/MainImageGroup.png"
          width="1024"
          height="555"
          quality={100}
          alt="Finmairs - your reliable logistics partner"
          className={styles.image}
        />
        <h1 className={styles.title}>
          Finmairs — your
          <br /> reliable logistics partner
        </h1>
      </div>
    </section>
  );
};

export default Carousel;

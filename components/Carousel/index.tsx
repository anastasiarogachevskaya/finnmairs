import React from 'react';

import styles from './Carousel.module.css';

const Carousel = () => {
  return (
    <section>
      <div className={styles.carousel}>
        <img
          src="/img/MainImageGroup.png"
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

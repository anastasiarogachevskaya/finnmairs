// components/Directions/index.tsx
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

import styles from './Directions.module.css';

const Directions: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // The animation will only be triggered once
    threshold: 0.1, // Percentage of the element's visibility before triggering
  });

  return (
    <section ref={ref}>
      <div className={`${styles.svgPattern} ${inView ? styles.fadeIn : ''}`} />

      <h2 className={`${styles.title} ${inView ? styles.fadeIn : ''}`}>
        Our main directions
      </h2>

      <div className={`${styles.mapContainer} ${inView ? styles.fadeIn : ''}`}>
        <div className={styles.mapBackground}>
          <Image src="/img/map.svg" alt="Map" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.mapOverlay}>
          <span className={styles.mapTextLeft}>
            EU
            <div className={styles.line} />
          </span>
          <Image
            src="/img/directions.png"
            alt="Overlay"
            layout="responsive"
            width={415}
            height={320}
            className={styles.mapOverlayImg}
          />
          <span className={styles.mapTextRight}>
            <div className={styles.line} />
            CIS
          </span>
        </div>
      </div>

      {/* Contact button */}
      <div
        className={`${styles.contactButtonContainer} ${
          inView ? styles.fadeIn : ''
        }`}
      >
        <button className={styles.contactButton}>Contact us online</button>
      </div>
    </section>
  );
};

export default Directions;

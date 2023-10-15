// components/Directions/index.tsx
import Image from 'next/image';
import styles from './Directions.module.css';

const Directions: React.FC = () => {
  return (
    <section className={styles.mainDirections}>
      <div className={styles.svgPattern} />

      <h2 className={styles.title}>Our main directions</h2>

      <div className={styles.mapContainer}>
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
      <div className={styles.contactButtonContainer}>
        <button className={styles.contactButton}>Contact us online</button>
      </div>
    </section>
  );
};

export default Directions;

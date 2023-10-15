// components/RepeatingSection/index.tsx
import Image from 'next/image';
import styles from './RepeatingSection.module.css'; // Reference your CSS module here
import { SectionProps } from './types';

const RepeatingSection: React.FC<SectionProps> = ({
  imageUrl,
  text,
  background,
  isImageRight,
  svgPatternUrl,
}) => {
  return (
    <div
      className={`${styles.sectionContainer} ${
        isImageRight ? styles.imageRight : ''
      }`}
    >
      <div className={styles.imageBox}>
        <Image src={imageUrl} alt="Section image" width="500" height="500" />
      </div>
      <div className={styles.textBox} style={{ backgroundColor: background }}>
        <div
          className={styles.pattern}
          style={{ backgroundImage: `url(${svgPatternUrl})` }}
        />
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default RepeatingSection;

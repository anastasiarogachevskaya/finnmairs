// components/RepeatingSection/index.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import styles from './RepeatingSection.module.css'; // Reference your CSS module here
import { SectionProps } from './types';

const RepeatingSection: React.FC<SectionProps> = ({
  imageUrl,
  text,
  background,
  isImageRight,
  svgPatternUrl,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // Percentage of the element's visibility before triggering
  });
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (inView) {
      // Element is in view, apply the animation
      setAnimationClass(isImageRight ? 'slideInLeft' : 'slideInRight');
    }
  }, [inView, isImageRight]);

  const animationStyle = isImageRight
    ? styles.slideInRight
    : styles.slideInLeft;

  const oppositeStyle = isImageRight ? styles.slideInLeft : styles.slideInRight;

  return (
    <div
      className={`${styles.sectionContainer} ${
        isImageRight ? styles.imageRight : ''
      }`}
      ref={ref}
    >
      <div className={`${styles.imageBox} ${inView ? animationStyle : ''}`}>
        <Image
          src={imageUrl}
          alt="Section image"
          quality={100}
          className={styles.imageBoxImage}
          width={500}
          height={500}
        />
      </div>
      <div
        className={`${styles.textBox} ${inView ? oppositeStyle : ''}`}
        style={{ backgroundColor: background }}
      >
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

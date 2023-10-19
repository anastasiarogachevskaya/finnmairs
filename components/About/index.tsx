import React, { useState } from 'react';
import Image from 'next/image';
import { InView } from 'react-intersection-observer';
import styles from './About.module.css';

const About: React.FC = () => {
  const [showFeature1, setShowFeature1] = useState(false);
  const [showFeature2, setShowFeature2] = useState(false);
  const [showFeature3, setShowFeature3] = useState(false);

  return (
    <section>
      <div className={styles.about}>
        <h2 className={styles.title}>Why FINMAIRS</h2>
        <div className={styles.features}>
          <InView
            as="div"
            onChange={(inView) => inView && setShowFeature1(true)}
          >
            <div
              className={`${styles.feature} ${
                showFeature1 ? styles.fadeIn : ''
              }`}
            >
              <Image src="/img/number.svg" alt="years" width={80} height={57} />
              <p>
                years on
                <br />
                the market
              </p>
            </div>
          </InView>

          <InView
            as="div"
            onChange={(inView) => inView && setShowFeature2(true)}
          >
            <div
              className={`${styles.feature} ${
                showFeature2 ? styles.fadeIn : ''
              }`}
            >
              <Image
                src="/img/lines.svg"
                alt="transportations"
                width={69}
                height={57}
              />
              <p>
                any
                <br />
                transportations
              </p>
            </div>
          </InView>

          <InView
            as="div"
            onChange={(inView) => inView && setShowFeature3(true)}
          >
            <div
              className={`${styles.feature} ${
                showFeature3 ? styles.fadeIn : ''
              }`}
            >
              <Image
                src="/img/terminal.svg"
                alt="terminal"
                width={108}
                height={57}
              />
              <p>
                terminal
                <br />
                in Helsinki
              </p>
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
};

export default About;

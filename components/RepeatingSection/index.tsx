import RepeatingSection from './Section';
import { SectionProps } from './types';

// Example sections data
const sectionsData: SectionProps[] = [
  {
    imageUrl: '/img/truck-1.jpg',
    text: 'Finmairs OY is a family-owned company established in 2006, with extensive experience and expertise in international logistics and transportation services. The company provides high-quality and fast transportation solutions in Finland, Europe, and the CIS countries.',
    background: '#006FB9',
    isImageRight: false,
    svgPatternUrl: '/img/pattern-1.svg',
  },
  {
    imageUrl: '/img/truck-2.jpg',
    text: 'The company possesses strong expertise in transportation and customs clearance. We find solutions to all customer challenges. The company is capable of executing the entire transportation chain from start to finish, utilizing either its own transport equipment or leveraging an extensive international transportation network.',
    background: '#999999',
    isImageRight: true,
    svgPatternUrl: '/img/pattern-2.svg',
  },
  {
    imageUrl: '/img/truck-3.jpg',
    text: 'The company is capable of addressing all heavy equipment transportation needs. Through us, you can accomplish regular trailer transportation, ADR parcel transportation, container transportation, as well as specialized transportations (e.g. using flatbed trailers).',
    background: '#999999',
    isImageRight: false,
    svgPatternUrl: '/img/pattern-3.svg',
  },
  {
    imageUrl: '/img/containers.jpg',
    text: 'Finmairs OY offers its own terminal services in the Uusimaa region, as well as customs warehousing in Finland and CIS countries. Our terminal handles both cargo reception and vehicle reloading. We provide services in both Finnish and English languages.',
    background: '#006FB9',
    isImageRight: true,
    svgPatternUrl: '/img/pattern-4.svg',
  },
];

const WhyFinmairs: React.FC = () => {
  return (
    <section>
      {sectionsData.map((section, index) => (
        <RepeatingSection key={index} {...section} />
      ))}
    </section>
  );
};

export default WhyFinmairs;

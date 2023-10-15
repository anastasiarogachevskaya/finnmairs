import React from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import Directions from '../components/Directions';
import WhyFinmairs from '../components/RepeatingSection';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Static Site!</h1>
      <p style={{ height: '1000px' }}>
        This is a static single page app built with React and Next.js using
        TypeScript.
      </p>
      <WhyFinmairs />
      <Directions />
      <Footer />
    </div>
  );
};

export default Home;

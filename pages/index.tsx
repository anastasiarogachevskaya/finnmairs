import React from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import Directions from '../components/Directions';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Static Site!</h1>
      <p>
        This is a static single page app built with React and Next.js using
        TypeScript.
      </p>
      <Directions />
      <Footer />
    </div>
  );
};

export default Home;

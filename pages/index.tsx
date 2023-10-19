import React from 'react';
import Footer from '../components/Footer';
import Directions from '../components/Directions';
import RepeatingSection from '../components/RepeatingSection';
import About from '../components/About';

const Home: React.FC = () => {
  return (
    <div>
      <p style={{ height: '1000px' }}></p>
      <About />
      <RepeatingSection />
      <Directions />
      <Footer />
    </div>
  );
};

export default Home;

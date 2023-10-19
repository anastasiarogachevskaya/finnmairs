import React from 'react';
import Footer from '../components/Footer';
import Directions from '../components/Directions';
import RepeatingSection from '../components/RepeatingSection';
import About from '../components/About';
import Carousel from '../components/Carousel';

const Home: React.FC = () => {
  return (
    <div>
      <p style={{ height: '1000px' }}></p>
      <Carousel />
      <About />
      <RepeatingSection />
      <Directions />
      <Footer />
    </div>
  );
};

export default Home;

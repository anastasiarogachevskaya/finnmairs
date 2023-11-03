import React from 'react';
import Footer from '../components/Footer';
import Directions from '../components/Directions';
import RepeatingSection from '../components/RepeatingSection';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Line from '../components/Header/Line';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Line />
      <Carousel />
      <About />
      <RepeatingSection />
      <Directions />
      <Footer />
    </div>
  );
};

export default Home;

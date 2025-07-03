
import React from 'react';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import PreFooterCTA from '../components/PreFooterCTA';

interface HomeProps {
  translations: any;
}

const Home: React.FC<HomeProps> = ({ translations }) => {
  return (
    <div className="overflow-x-hidden">
      <Hero translations={translations} />
      <ProductShowcase translations={translations} />
      <About translations={translations} />
      <Testimonials translations={translations} />
      <PreFooterCTA translations={translations} />
    </div>
  );
};

export default Home;

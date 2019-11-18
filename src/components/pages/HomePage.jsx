import React from 'react';

import Slider from 'components/common/slider/Slider';
import Header from './Header';
import AdSection from './AdSection';
import AboutSection from './AboutSection';
import Footer from './Footer';
import BuddhaSpacer from './BuddhaSpacer';

const HomePage = () => (
  <>
    <Header />
    <Slider />
    <AdSection />
    <BuddhaSpacer />
    <AboutSection />
    <Footer /> 
  </>
);

export default HomePage;
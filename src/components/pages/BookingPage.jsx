import React from 'react';

import BookingHeader from './BookingHeader';
import BookingSteps from './BookingSteps';
// import BookingGuide from './BookingGuide';
import BookingFooter from './BookingFooter';


const BookingPage = () => {

  return (
    <>
      <BookingHeader />
      <BookingSteps />
      {/* <BookingGuide /> */}
      <BookingFooter />
    </>
  );
};

export default BookingPage;
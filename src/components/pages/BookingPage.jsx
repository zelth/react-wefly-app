import React from 'react';
import BookingHeader from './BookingHeader';
import BookingSteps from './BookingSteps';
// import BookingGuide from './BookingGuide';
import BookingFooter from './BookingFooter';


const BookingPage = ({ passProps }) => {
  const { bookingDestination, bookingFromDate, bookingToDate } = passProps;
  const bookingParams = {
    bookingDestination,
    bookingFromDate,
    bookingToDate
  };

  return (
    <>
      <BookingHeader />
      <BookingSteps bookingParams={bookingParams} />
      {/* <BookingGuide /> */}
      <BookingFooter />
    </>
  );
};

export default BookingPage;
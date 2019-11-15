import React from 'react';
import firstImage from 'assets/img/slider/1.jpg';
import secondImage from 'assets/img/slider/2.jpg';
import thirdImage from 'assets/img/slider/3.jpg';

import TravelForm from './TravelForm';
import SideContent from './SideContent';
import PricingSection from '../../pages/PricingSection';

class Slider extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      images: [
        firstImage,
        secondImage,
        thirdImage,
      ],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  componentDidMount() {
    this._isMounted = true;
    setInterval(() => {
      if (this._isMounted) this.goToNextSlide();
    }, 10000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;
    
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  }

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      this.setState(() => ({
        currentIndex: 0,
        translateValue: 0
      }));
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  }

  slideWidth = () => document.querySelector('.slide').clientWidth;

  render() {
    return (
      <div className="slider">

        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}
        >
          {
            this.state.images.map((image, i) => (
              <Slide key={i} image={image} />
            ))
          }
        </div>

        <div className="slider-content">
          <div className="slider-info">
            <div className="slider-left-content">
              <SideContent />
            </div>
            <div className="slider-right-content">
              <TravelForm />
            </div>
          </div>
          <PricingSection />
        </div> 

      </div>
    );
  }
}


const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  };
  return <div className="slide" style={styles} />;
};

export default Slider;

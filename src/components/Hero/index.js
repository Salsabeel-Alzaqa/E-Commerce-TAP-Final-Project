import React from 'react';
import Carousel from 'react-material-ui-carousel';
import HeroItem from '../HeroItem';
import { heroItems } from '../../data';
const Hero = () => {
    const carouselSettings = {
        navButtonsProps: {
            style: {
                display: "none"
            }
        },
        indicatorIconButtonProps: {
            style: {
                display: "none"
            }
        }	
    };
  return (
    <Carousel {...carouselSettings}>
      {heroItems.map((item, index) => <HeroItem key={index} {...item} />)}
    </Carousel>
  );
}

export default Hero;
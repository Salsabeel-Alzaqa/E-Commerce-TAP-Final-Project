import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HeroItem from "../HeroItem/HeroItem";
import { heroItems } from "../../assets/data/data";
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
export const Hero = () => {
  return (
    <Carousel showDots={false} removeArrowOnDeviceType={['desktop']} responsive={responsive} infinite={true} autoPlaySpeed={6000} autoPlay={true}>
      {heroItems.map((item, index) => (
        <HeroItem key={index} {...item} />
      ))}
    </Carousel>
  );
};

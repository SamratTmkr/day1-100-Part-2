import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
  return (
    <div className="my-5">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={true}
        thumbWidth={100}
        transitionTime={600}
        swipeable={true}
        dynamicHeight={false}
        className="relative"
      >
        <div className="h-[60vh]"> 
          <img src="./carousel/carousel.png" className="object-cover h-full w-full" /> 
          <p className="legend">Legend 1</p>
        </div>
        <div className="h-[60vh]"> 
          <img src="./carousel/cover.png" className="object-cover h-full w-full" /> 
          <p className="legend">Legend 2</p>
        </div>
        <div className="h-[60vh]"> 
          <img src="./carousel/cover1.jpg" className="object-cover h-full w-full" /> 
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
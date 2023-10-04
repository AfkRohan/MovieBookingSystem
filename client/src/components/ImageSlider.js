import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import header1 from '../assets/Banner1.png';
import header2 from '../assets/Banner2.png';
import header3 from '../assets/Banner3.png';

function ImageSlider(){
  return (
    <div className="image-slider">
      <Carousel showArrows={true}  showThumbs={false}>
        <div>
          <img src={header1} alt="" />
        </div>
        <div> 
          <img src={header2} alt="" />
        </div>
        <div>
          <img src={header3} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;

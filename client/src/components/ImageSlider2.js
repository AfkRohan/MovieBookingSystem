import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


function ImageSlider2() {
  return (
    <div className="image-slider mt1">
      <Carousel showArrows={true} showThumbs={false}>
        <div> 
          <iframe width="671" height="450"  src="https://www.youtube.com/embed/ex3C1-5Dhb8" title="The Creator | Official Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Carousel>
    </div>
  );
}

export default ImageSlider2;

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

function ImageSlider(){
  return (
    <div className="image-slider">
      <Carousel showArrows={true} showThumbs={false}>
        <div>
          <img src="https://wallpapercave.com/wp/wp1946074.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Movie-Pictures.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="https://b4blaze.com/wp-content/uploads/2021/04/RRR.jpg?v=1618296611" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;

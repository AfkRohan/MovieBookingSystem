import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MovieShow from '../../components/MovieShow';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Tickets() {
  
  // /6542aa7e148dbfce5d5979fd
  // const movieData = {
  //   title: 'Taylor Swift: The Eras Tour',
  //   description: 'Experience Taylor Swift\'s iconic eras live in concert.',
  //   trailerUrl: '<iframe width="780" height="438" src="https://www.youtube.com/embed/OHWiTwH53lU" title="THANKSGIVING - Official Teaser Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
  //   image: 'https://wallpapercave.com/wp/wp1946065.jpg',
  //   showtimes: [
        
  //     { time: '12:00 PM', availableSeats: 100, screen: 1},
  //     { time: '3:00 PM', availableSeats: 75, screen: 2},
  //     {time: '6:00 PM', availableSeats: 30, screen: 3}
      
  //   ],
  // };




  return (
    <div>
        <Header></Header>
        <MovieShow></MovieShow>
    
    <Footer></Footer>
    </div>
  );
};

export default Tickets ;

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Tickets() {
  
  const movieData = {
    title: 'Taylor Swift: The Eras Tour',
    description: 'Experience Taylor Swift\'s iconic eras live in concert.',
    trailerUrl: '<iframe width="780" height="438" src="https://www.youtube.com/embed/OHWiTwH53lU" title="THANKSGIVING - Official Teaser Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    image: 'https://wallpapercave.com/wp/wp1946065.jpg',
    showtimes: [
        
      { time: '12:00 PM', availableSeats: 100, screen: 1},
      { time: '3:00 PM', availableSeats: 75, screen: 2},
      {time: '6:00 PM', availableSeats: 30, screen: 3}
      
    ],
  };

  return (
    <div>
        <Header></Header>
    <div className="movie-ticket-page">
      <div className="movie-details">
        <h1>{movieData.title}</h1>
        <img src={movieData.image} alt={movieData.title} />
        <p>{movieData.description}</p>
        <a href={movieData.trailerUrl} target="_blank" rel="open">Watch Trailer</a>
      </div>
      <div className="showtimes">
        <h2>Showtimes</h2>
        <ul>
            
          {movieData.showtimes.map((showtime, index) => (
            <li key={index}>
              <span>Showtime: {showtime.time}</span>
              <span>Available Seats: {showtime.availableSeats}</span>
              <span>Screen: {showtime.screen}</span>
              <button>Book Now</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Tickets ;

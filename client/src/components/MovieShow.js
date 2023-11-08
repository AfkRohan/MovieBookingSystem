import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function MovieShow(){

    const {searchparam} =   useParams() ?? "6542aa7e148dbfce5d5979fd";
  const [movieData,setMovieData] = useState([]);
  const [showByMovieId,setShowByMovieId] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  
 

  const availableDates = ['2023-11-12', '2023-11-13', '2023-11-14']; 

  const availableShowtimes = ['10:00 AM', '2:00 PM', '6:00 PM', '9:00 PM']; 

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/movie/${searchparam}`)
      .then((response) => {
        setMovieData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/shows/${searchparam}`).then((res)=>{
      setShowByMovieId(res.data)
      console.log(showByMovieId)
    }).catch((err)=>{
      console.log(err)
    })
  }, []);

  return (
    <div className="movie-show-container">
        <div className="movie-ticket-page">
            <div className="movie-details">
                <h1>{movieData.title}parthiben</h1>
                <img src={movieData.image} alt={movieData.title} />
                 <p>{movieData.description}</p>
                 <a href={movieData.trailerUrl} target="_blank" rel="open">
                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-caret-right-square-fill" viewBox="0 0 16 16">
                 <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"/>
                </svg>
                 Watch Trailer</a>
            </div>
        </div>
      
      <h2 className='dateh2'>ShowDate</h2>
      <div className="date-carousel">
        {availableDates.map((date) => (
          <div
            key={date}
            className={`date-item ${date === selectedDate ? 'selected' : ''}`}
            onClick={() => handleDateChange(date)}
          >
            {date}
          </div>
        ))}
      </div>
      <div className="showtimes">
        <h3>Showtimes</h3>
      <div className="time-buttons">
        {availableShowtimes.map((time) => (
          <div
            key={time}
            className={`time-button ${time === selectedTime ? 'selected' : ''}`}
            onClick={() => handleTimeChange(time)}
          >
            {time}
          </div>
        ))}
    </div>
    <center><button>Select Seats</button></center>
   
      </div>
    </div>
  );
};

export default MovieShow;

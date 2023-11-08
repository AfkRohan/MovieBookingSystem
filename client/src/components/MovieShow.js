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
                <h1>{movieData.title}parthiban</h1>
                <img src={movieData.image} alt={movieData.title} />
                 <p>{movieData.description}</p>
                <a href={movieData.trailerUrl} target="_blank" rel="open">Watch Trailer</a>
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
   
      </div>
    </div>
  );
};

export default MovieShow;

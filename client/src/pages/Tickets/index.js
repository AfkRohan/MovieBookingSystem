import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookNowButton from '../../components/BookNowButton';
import TabbedView from '../../components/TabbedView';
function Tickets() {
  const {searchparam} =   useParams() ?? "6542aa7e148dbfce5d5979f";
  const [dates, setDates] = useState([]);
  const [isAvailable,setAvailable] = useState(false);
  const removeDuplicates = (data) =>{ return [... new Set(data)]}
  const [movieData,setMovieData] = useState([])
  const [showByMovieId,setShowByMovieId] = useState([])
  const [movieId] = useState([])
  // 6542aa7e148dbfce5d5979fd
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
      axios.get(`http://localhost:4000/api/shows/${searchparam}`).then((res)=>{
          let dates = [];
          (res.data).map((show)=>{dates.push(show.showDate)})
          dates = removeDuplicates(dates)
          setDates(dates)
          setAvailable(true);
          setShowByMovieId(res.data);
        console.log(showByMovieId)
      }).catch((err)=>{
        console.log(err)
      })
  }, []);
  console.log(dates)
  return (
    <div>
        <Header></Header>
    <div className="movie-ticket-page">
      <div className="movie-details">
        <h1>{movieData.title}</h1>
        <img src={movieData.image} alt={movieData.title} />
        <p>{movieData.description}</p>
        <a href={movieData.trailerLink} target="_blank" rel="open">Watch Trailer</a>
      </div>
        {!isAvailable ? 
        <h1 className='text-center'> No Shows available now for this movie </h1> : (
          <div className="showtimes">
        <h1 className='text-center p3'>Showtimes</h1>
        <TabbedView dates={dates} shows={showByMovieId} movies={movieData.name}/>
        <table class="table table-striped table-hover table-light ">
          <thead>
            <tr>
              <th> Date </th>
              <th> TimeSlot </th>
              <th> Screen </th>
              <th> Price</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {showByMovieId.map((show) => (
            <tr key={show._id}>
              <td >{new Date(show.showDate.toString()).toDateString()}</td>
              <td>{show.showTime}</td>
              <td>{show.screen}</td>
              <td>${show.price}</td> 
              <td> <BookNowButton id={show._id} /> </td>
            </tr>
          ))}
          </tbody>
        </table>
        </div>
        )   
        }
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Tickets ;

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
  useEffect(() => {
    const formattedDates = dates.map(date => new Date(date).toLocaleDateString());
    localStorage.setItem('dates', formattedDates);
  }, [dates]);
  const [isAvailable,setAvailable] = useState(false);
  const removeDuplicates = (data) =>{ return [... new Set(data)]}
  const [movieData,setMovieData] = useState([])
  const [showByMovieId,setShowByMovieId] = useState([])
  const [movieId] = useState([])
  // 6542aa7e148dbfce5d5979fd
  useEffect(() => {
    axios
      .get(`https://movie-booking-system-sable.vercel.app/api/movie/${searchparam}`)
      .then((response) => {
        setMovieData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
      axios.get(`https://movie-booking-system-sable.vercel.app/api/shows/${searchparam}`).then((res)=>{
          let dates = [];
          (res.data).map((show)=>{dates.push(show.showDate)})
          dates = removeDuplicates(dates)
          setDates(dates)
          if(dates.length > 0)
            setAvailable(true);
          setShowByMovieId(res.data);
        console.log(showByMovieId);
      }).catch((err)=>{
        console.log(err)
      })
  }, []);
  console.log(dates)
  return (
    <div>
        <Header></Header>
    <div className="movie-ticket-page">
    <center><h1>Select a show for {movieData.name}</h1></center>
    <p style={{padding:'1em'}}>{movieData.description}</p>
    <center><a className='trailerlink' href={movieData.trailerLink} target="_blank" rel="open">- Watch Trailer -</a></center>
    {!isAvailable ? 
        (<h4 className='text-center'> No Shows available now for this movie </h4>) : (
          <TabbedView dates={dates} shows={showByMovieId} style={{
            backgroundImage: `url("${movieData.image}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
         }} movies={movieData.name}/>
        )   
        }
      <div className="movie-details">
     
     
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Tickets ;

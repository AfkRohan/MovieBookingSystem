import React, { useState } from 'react';
import AdminMovieCard from '../../components/AdminMovieCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ImageSlider2 from '../../components/ImageSlider2';
import MovieList from './MovieList';
import axios from 'axios';
import { useEffect } from 'react';


function Movies() {
  const [movie,setMovies] = useState([]);
  useEffect( () => {
     axios.get("http://localhost:4000/api/movie").then((response)=>{
      setMovies(response.data)
     }).catch(err => {
      console.log(err)
     })    
       },[])


  return (
    <>
      <Header />
     

   
      <div className='centerDivStyle'>
      <div className="movie-list">
          {movie.map((movie, index) => (
           <AdminMovieCard movie={movie } index ={index}/>
          ))}
        </div>
      </div>


      
      <Footer />
    </>
  );
}

export default Movies;

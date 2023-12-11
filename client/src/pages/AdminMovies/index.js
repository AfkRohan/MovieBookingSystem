import React, { useState } from 'react';
import AdminMovieCard from '../../components/AdminMovieCard';
import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import ImageSlider2 from '../../components/ImageSlider2';
import MovieList from './MovieList';
import axios from 'axios';
import { useEffect } from 'react';
import UserMovieCard from '../../components/UserMovieCard';


function AdminMovies() {
  const [movie,setMovies] = useState([]);
  useEffect( () => {
     axios.get("https://movie-booking-system-sable.vercel.app/api/movie").then((response)=>{
      setMovies(response.data)
     }).catch(err => {
      console.log(err)
     })    
       },[])


  return (
    <>
      <AdminHeader />
      <MovieList />
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

export default AdminMovies;

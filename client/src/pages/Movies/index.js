import React from 'react'
import UserMovieCard from '../../components/UserMovieCard';
import { useState,useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

function searchResults(movies, search) {
  if(search!=null)
  return movies.filter((movie) => {
    return movie.name.toLowerCase().includes(search.toLowerCase());
  });
  else
     return movies;
}

function Movies() {
  const [movie, setMovies] = useState([]);
  const searchParam = new URLSearchParams(window.location.search).get("searchParam") ?? null;
  const [language,setLanguage] = useState("0");
  const [rating, setRatingFilter] = useState(0);
  const [filteredMovies,setFilteredMovies] = useState([]);

  useEffect( () => {
    axios
      .get("http://localhost:4000/api/movie")
      .then((response) => {
        setMovies(searchResults(response.data, searchParam));
        setFilteredMovies(searchResults(response.data, searchParam));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(()=>{
    // Just for re-rendering 
  },[filteredMovies])

  useEffect(()=>{
    const movies2 = movie;
     if(rating != 0){
        const movies = movies2.filter((movie)=>movie.rating==Number(rating));
        setFilteredMovies(movies);
        setLanguage("0");
     }
     else{
      setFilteredMovies(movies2)
     }
     
  },[rating])

   useEffect(()=>{
    if(language!='0'){
      const filteredMovies = movie.filter((movie) => movie.languages === language);
      setFilteredMovies(filteredMovies);
      setRatingFilter(0);
    }
    else{
      setFilteredMovies(movie)
    }
    console.log(language)
  },[language]);
 
  return (
    <>
      <Header />
      <div className="centerDivStyleFilterOptions">
      <div className="filter-options">
      <label className='filteroptionslabel'>
        Rating
        <select value={rating} name='rating'  onChange={(e) => setRatingFilter(e.target.value)}>
          <option value={0}>All</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>

      <label className='filteroptionslabel'>
        Language
        <select value={language ?? '0'} name='language'  onChange={(e) => setLanguage(e.target.value)}>
          <option value="0">All</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Telugu">Telugu</option>
          <option value="Tamil">Tamil</option>
          <option value="Gujarati">Gujarati</option>
        </select>
      </label>
    </div>
    </div>
      <div className="centerDivStyle">
   
        {(movie!=null)?( 
        <div className="movie-list">
       { filteredMovies.map((movie) => {
    return <UserMovieCard movie={movie} />;
  }) }
        </div>
        ):(<><h1> Loading... </h1></>)}
      </div>
      <Footer />
    </>
  );
}

export default Movies
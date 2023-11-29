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

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/movie")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredMovies = searchResults(movie, searchParam);
  const movieCards = filteredMovies.map((movie) => {
    return <UserMovieCard movie={movie} />;
  });

  return (
    <>
      <Header />
      <div className="centerDivStyle">
        <div className="movie-list">
          {movieCards}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Movies
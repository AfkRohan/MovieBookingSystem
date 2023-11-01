import React from 'react'
import UserMovieCard from '../../components/UserMovieCard';
import { useState,useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Dropdown, Menu } from 'antd';

function Movies() {
    const [movie,setMovies] = useState([]);
    // const [searchPrompt,setSearchPrompt] = useState(null)
    // const [languageFilter,setFilterLanguage] = useState(null)
    // const [categoryFilter,setCategoryFilter] = useState(null)
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
            {movie.map((movie) =>(
             <UserMovieCard movie={movie}/>
            )).length(3)}
          </div>
        </div>      
        <Footer />
      </>
    );
}

export default Movies
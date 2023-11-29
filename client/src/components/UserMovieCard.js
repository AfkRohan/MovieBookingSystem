import Heart from 'react-animated-heart';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ViewDetailsButton from '../components/ViewDetailsButton';
import FilterMovies from './FilterMovies';

function UserMovieCard(props) {
    const [isClick, setClick] = useState(false);
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
    
      axios.get(`/api/user/${props.username}/favorites`)
        .then(response => setFavorites(response.data))
        .catch(error => console.error(error));},[props.username]);
  
    
    const handleAddToFavorites = () => {
     
        axios.post(`/api/user/${props.username}/addFavorite`, { movieId: props.movie._id })
          .then(response => setFavorites(response.data))
          .catch(error => console.error(error));
  
        setClick(!isClick);
      };

      const MovieDetails = ({ movies }) => {
        const { id } = useParams();
        const [movie, setMovie] = useState(null);
        const [filteredMovies, setFilteredMovies] = useState([]);
        const [filterOptions, setFilterOptions] = useState({
          rating: null,
          nameSort: 'asc',
          language: null,
        });
      }

  
  return (
    <div>
    <div>
       <MovieFilter filterOptions={filterOptions} onFilterChange={(filter, value) => setFilterOptions({ ...filterOptions, [filter]: value })} />
    </div>
    <div className="movie-page" key={props.index}>
    <img src={props.movie.image} alt={props.movie.title} />
    <div className="movie-details">
      <h1 style={{color:"white"}}>{props.movie.name}</h1>
      <p>{props.movie.description}</p>
      <p>Rating: {props.movie.rating}</p>
      <p>Language: {props.movie.languages}</p>
      <div className='featured-movies'>
        <div>
        <Heart isClick={isClick} onClick={handleAddToFavorites} />
          </div>  
          <div>
          <ViewDetailsButton movieId={props.movie._id} btnText={"View More"} />
          </div>
      </div>    
    </div>
    
    </div>
  </div>
  )
}

export default UserMovieCard
import React from 'react'
import Heart from 'react-animated-heart';
import { useState } from 'react';
import ViewDetailsButton from '../components/ViewDetailsButton'

function UserMovieCard(props) {
    const [isClick, setClick] = useState(false);
  return (
    <div className="movie-page" key={props.index}>
    <img src={props.movie.image} alt={props.movie.title} />
    <div className="movie-details">
      <h2>{props.movie.name}</h2>
      <p>{props.movie.description}</p>
      <p>Rating: {props.movie.rating}</p>
      <p>Language: {props.movie.languages}</p>
      <div className='featured-movies'>
        <div>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </div>  
          <div>
          <ViewDetailsButton movieId={props.movie._id} btnText={"View More"} />
          </div>
      </div>    
    </div>
    </div>
  )
}

export default UserMovieCard
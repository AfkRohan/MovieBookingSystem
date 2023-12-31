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
      <h1 style={{color:"white"}}>{props.movie.name}</h1>
      {/* <p>{props.movie.description}</p> */}
      <p>Rating: {props.movie.rating}</p>
      <p>Language: {props.movie.languages}</p>
      <div className='featured-movies'>
        <div>
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </div>  
          <div>
          <ViewDetailsButton movieId={props.movie._id} moviename ={props.movie.name} btnText={"View More"} />
          </div>
      </div>    
    </div>
    </div>
  );
}

export default UserMovieCard
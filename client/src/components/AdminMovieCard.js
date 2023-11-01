import React from 'react'
import DeleteButton from './DeleteButton'

function AdminMovieCard(props) {
 
 
    return (

      <div className="movie-page" key={props.index}>
      <img src={props.movie.image} alt={props.movie.title} />
      <div className="movie-details">
        <h2>{props.movie.name}</h2>
        <p>{props.movie.description}</p>
        <p>Rating: {props.movie.rating}</p>
        <p>Language: {props.movie.languages}</p>
        <div>
         <button className="btnEditMovie">
               <span className="btnText">Edit Movie</span>
         </button>
         <DeleteButton id={props.movie.id} />
         </div>
      </div>
    </div>
       
    
    )
}

export default AdminMovieCard
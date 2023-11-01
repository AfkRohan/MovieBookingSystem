import React, { useState } from 'react';
import EditMovieForm from '../pages/AdminMovies/EditMovieForm';
import DeleteButton from './DeleteButton';
import ViewDetailsButton from './ViewDetailsButton';

function AdminMovieCard(props) {
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div className="movie-page" key={props.index}>
      <img src={props.movie.image} alt={props.movie.title} />
      <div className="movie-details">
        <h2>{props.movie.name}</h2>
        <p>{props.movie.description}</p>
        <p>Rating: {props.movie.rating}</p>
        <p>Language: {props.movie.languages}</p>

        <div>
          <button className="btnEditMovie" onClick={openModal}>
            <span className="btnText">Edit Movie</span>
          </button>
          <DeleteButton id={props.movie._id} />
          <ViewDetailsButton movieId={props.movie._id} btnText={"View More"} />
        </div>
      </div>

      
      {showModal && (
        <EditMovieForm
          showMovieFormModal={showModal}
          setShowMovieFormModal={setShowModal}
          selectedMovie={props.movie} 
          formType="edit" 
        />
      )}
    </div>
  );
}

export default AdminMovieCard;

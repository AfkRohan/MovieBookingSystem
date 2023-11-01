import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movieId = parseInt(id);
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-page">
      <img src={movie.image} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.name}</h2>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        <p>Language: {movie.languages}</p>
      </div>
    </div>
  );
};

export default MovieDetails;

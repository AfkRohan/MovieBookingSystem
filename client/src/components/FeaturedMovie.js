
import React from "react";

function FeaturedMovie({ title, description, imageSrc }) {
    
  return (
    <div className="featured-movie">
      <img src={imageSrc} alt={title} className="movie-poster" />
      <div className="movie-details">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-description">{description}</p>
      </div>
    </div>
  );
}

export default FeaturedMovie;

import React from 'react';
import { Link } from 'react-router-dom';

const ViewDetailsButton = ({ movieId }) => {
  return (
    <Link to={`/movie/${movieId}`}>
      <button type="button" className="btnViewDetailsMovie">
        View Details
      </button>
    </Link>
  );
};

export default ViewDetailsButton;

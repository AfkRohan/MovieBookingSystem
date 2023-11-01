import React from 'react';
import { Link } from 'react-router-dom';

const ViewDetailsButton = ({ movieId, btnText }) => {
  return (
    <Link to={`/movie/${movieId}`}>
      <button type="button" className="btnViewDetailsMovie">
        {btnText}
      </button>
    </Link>
  );
};

export default ViewDetailsButton;

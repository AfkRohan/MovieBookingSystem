import React from 'react';
import { Link } from 'react-router-dom';

const ViewDetailsButton = ({ movieId, moviename, btnText }) => {
  return (
    <Link to={`/movie/${movieId}/${moviename}`}>
      <button type="button" className="btnViewDetailsMovie">
        {btnText}
      </button>
    </Link>
  );
};

export default ViewDetailsButton;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTicket, faUtensils, faUsers } from '@fortawesome/free-solid-svg-icons';

function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="feature-box">
      <FontAwesomeIcon icon={faFilm} size="3x"/>
        <p style={{paddingTop:'10px'}}>Watch the latest movies</p>
      </div>
      <div className="feature-box">
      <FontAwesomeIcon icon={faTicket} size="3x" />
        <p style={{paddingTop:'10px'}}>Easy ticket booking</p>
      </div>
      <div className="feature-box">
      <FontAwesomeIcon icon={faUtensils} size="3x" />
        <p style={{paddingTop:'10px'}}>Delicious snacks</p>
      </div>
      <div className="feature-box">
      <FontAwesomeIcon icon={faUsers} size="3x" />
        <p style={{paddingTop:'10px'}}>Great movie experience</p>
      </div>
    </div>
  );
}

export default FeatureSection;
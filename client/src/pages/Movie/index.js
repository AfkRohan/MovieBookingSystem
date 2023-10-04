import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import movie_stamp from '../../assets/movie_stamp.png';


function Movies() {
  return (
    <>
      <Header />

      <div className='centerDivStyle'>
        <a href="/movie">
          <img
            src={movie_stamp}
            alt="Movies"
            style={{ width: '300px', height: '200px', margin: '10px' }}
          />
        </a>
        </div>

      
      
      <Footer />
    </>
  );
}

export default Movies;

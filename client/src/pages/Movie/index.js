import React from 'react'
import movie_stamp from '../../assets/movie_stamp.png';

function Movies() {
  return (
    <div className='centerDivStyle'>
         <a href="/movie" id='movie'>
          <img
            src={movie_stamp}
            alt="Movies"
            style={{ width: '300px', margin: '10px' }}
          />
        </a>

    </div>
  )
}

export default Movies
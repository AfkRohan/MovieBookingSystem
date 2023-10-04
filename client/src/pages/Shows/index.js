import React from 'react'
import shows_stamp from '../../assets/shows_stamp.png';
function Shows() {
  return (
    <div className='centerDivStyle' >
        <a href="/show" id='show'>
          <img
            src={shows_stamp}
            alt="Shows"
            style={{ width: '230px', margin: '45px' }}
          />
        </a>
    </div>
  )
}

export default Shows
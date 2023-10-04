import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import shows_stamp from '../../assets/shows_stamp.png';

function Shows() {
  return (
    <>
  <Header />

    <div className='centerDivStyle' >
        <a href="/show" id='show'>
          <img
            src={shows_stamp}
            alt="Shows"
            style={{ width: '230px', margin: '45px' }}
          />
        </a>
    </div>

<Footer />
</>

  )
}

export default Shows

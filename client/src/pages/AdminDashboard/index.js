import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import Footer from '../../components/Footer';
import movie_stamp from '../../assets/movie_stamp.png';
import shows_stamp from '../../assets/shows_stamp.png';


function AdminDashboard() {
  return (
    <>
      <AdminNavbar />
      <div>
        <div className='centerDivStyle'>
        <a href="/movie">
          <img
            src={movie_stamp}
            alt="Movies"
            style={{ width: '300px', height: '200px', margin: '10px' }}
          />
        </a>

        <a href="/show">
          <img
            src={shows_stamp}
            alt="Shows"
            style={{ width: '300px', height: '70px', margin: '10px' }}
          />
        </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminDashboard;

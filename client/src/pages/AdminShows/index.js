import React, { useState } from 'react';

import Footer from '../../components/Footer';
import AdminHeader from '../../components/AdminHeader';
import ImageSlider2 from '../../components/ImageSlider2';
import ShowList from './ShowList';
import axios from 'axios';
import { useEffect } from 'react';



function AdminShows() {
  const [show,setShow] = useState([]);
  useEffect( () => {
     axios.get("http://localhost:4000/api/show").then((response)=>{
      setShow(response.data)
     }).catch(err => {
      console.log(err)
     })    
       },[])


  return (
    <>
      {/* <AdminHeader /> */}
      <ShowList />
      <div className='centerDivStyle'>
      {/* <div className="movie-list">
          {shows.map((show, index) => (
           <AdminMovieCard movie={movie } index ={index}/>
          ))}
        </div> */}
      </div>      
      <Footer />
    </>
  );
}

export default AdminShows;

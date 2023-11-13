import React, { useState,useEffect } from 'react';
import ImageSlider from '../../components/ImageSlider';
import FeaturedMovieCard from '../../components/FeaturedMovieCard';
import ExperienceSection from '../../components/ExperienceSection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUS';
import axios from 'axios';

function Home(){
   const [movie,setMovies] = useState([])
  useEffect( () => {
    axios.get("http://localhost:4000/api/movie").then((response)=>{
    response.data = response.data.slice(0,3) 
    setMovies(response.data)
    }).catch(err => {
     console.log(err)
    })    
      },[])
    return(
 <>
       <Header/>
             <ImageSlider></ImageSlider>
             <main className="main-content">
             <center><h1 className='mt1'>Featured Movies</h1></center>
             <div className="featured-movies">
             {movie.map((movie, index) => (
              <FeaturedMovieCard movie={movie} index ={index}/>
            ))}
             </div>

      <h2>Experience</h2>
      <div className='experience experience-container'>
        <ExperienceSection
         imageSrc="https://mediafiles.cineplex.com/modernization/D1098GOTG_R1-6_2048x1280px_VOL3_DOM2_ENG_R02_20230426144640_0.jpg"
          title="IMAX"
          description="Experience the ultimate in movie-watching technology."
         
        />
        <ExperienceSection
          imageSrc="https://mediafiles.cineplex.com/Experiences/ultra-avx/UltraAVX_Billboard_Tablet.jpg"
          title="UltraAVX"
          description="Enhanced audio and visuals for a superior cinema experience."
         
        />
         <ExperienceSection
          imageSrc="https://media.npr.org/assets/img/2014/09/28/4dx_interior_img02_wide-c89a3d8756fae045234d9e7bc0a17258b43cdbcb.jpg"
          title="VIP"
          description="Enjoy an elevated night out in an intimate."
         
        />
    </div>
       <div>
        <AboutUs></AboutUs>
       </div>
      </main>
            
             <Footer/>
            
        </>
    )
}

export default Home
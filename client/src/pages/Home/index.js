import React, { useState,useEffect } from 'react';
import ImageSlider from '../../components/ImageSlider';
import FeaturedMovieCard from '../../components/FeaturedMovieCard';
import ExperienceSection from '../../components/ExperienceSection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUS';
import axios from 'axios';
import FeatureSection from '../../components/FeatureSection';
import FestiveMovies from '../../components/FestiveMovies';
import Snowfall from 'react-snowfall';

function Home(){
   const [movie,setMovies] = useState([])
  useEffect( () => {
    axios.get("https://movie-booking-system-sable.vercel.app/api/movie").then((response)=>{
    response.data = response.data.slice(0,3) 
    setMovies(response.data)
    }).catch(err => {
     console.log(err)
    })    
      },[])
    return(
 <>
       <Header/>
       <Snowfall snowflakeCount={100} color="#ffffff" style={{ zIndex: 1000, position: 'fixed' }} />
             <ImageSlider></ImageSlider>
             <main className="main-content">
             <AboutUs></AboutUs>
           
             <center><h1 className='mt1'>Featured Movies</h1></center>
             <div className="featured-movies">
             {movie.map((movie, index) => (
              <FeaturedMovieCard movie={movie} index ={index}/>
            ))}
            
             </div>
             <div style={{
          textAlign: 'center',
          margin: '20px 0',
          fontSize: '24px',
          fontStyle: 'italic',
          position: 'relative',
      
        }}>
          <div style={{
            position: 'relative',
            display: 'inline-block',
            padding: '10px 20px',
            margin:'2em',
            backgroundColor: 'transparent',
            border:'2px solid red',
            borderRadius: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}>
            <span style={{
              fontSize: '62px',
              lineHeight: '1',
              position: 'absolute',
              top: '-30px',
              left: '20px',
              color: '#f5f5f5',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}>“</span>
            <h5 style={{ margin: '1em', color: 'white', fontSize:'1.3em' }}>
              Immerse yourself in a world of cinematic wonders. Before you explore the finest cinematic experiences we offer, dive into the excitement that awaits!
            </h5>
            
          </div>
        </div>
        <div>
             
             <center> <h1 style={{color:'white' , textAlign: 'center',
          margin: '20px 0',
          fontSize: '33px',
          fontStyle: 'italic',
          position: 'relative',
       }}>~ Movies to watch this Christmas ~</h1></center>
       <center> <p style={{color:'white' , textAlign: 'center',
          margin: '20px 0',
          fontSize: '20px',
          fontStyle: 'italic',
          position: 'relative',
       }}>~ Coming Soon ~</p></center>
       
                <FestiveMovies></FestiveMovies>
             
            </div>
             
      <center><h1 className='mt2'>Experience</h1></center>
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
    
    <FeatureSection></FeatureSection>

  

      
      </main>
            
             <Footer/>
            
        </>
    )
}

export default Home
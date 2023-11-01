import React, { useState,useEffect } from 'react';
import ImageSlider from '../../components/ImageSlider';
import FeaturedMovieCard from '../../components/FeaturedMovieCard';
import ExperienceSection from '../../components/ExperienceSection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

function Home(){
   const [movie,setMovies] = useState([])
  useEffect( () => {
    axios.get("http://localhost:4000/api/movie").then((response)=>{
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
             <center><h1>Featured Movies</h1></center>
             <div className="app">
             {movie.map((movie, index) => (
             <FeaturedMovieCard movie={movie} index ={index}/>
            ))}
             </div>

      <h2>Experience</h2>
    <div className='experience'>
        <ExperienceSection
         imageSrc="https://th.bing.com/th/id/OIP.6s5SFaoI0vWjXjOFHMkbsgHaEA?pid=ImgDet&rs=1"
          title="IMAX"
          description="Experience the ultimate in movie-watching technology."
         
        />
        <ExperienceSection
          imageSrc="https://cms-assets.webediamovies.pro/cdn-cgi/image/dpr=1,fit=scale-down,gravity=auto,metadata=none,quality=85,width=400,height=550/production/3306/0979a2e3630c3098b095d2b2132f613b.jpg"
          title="UltraAVX"
          description="Enhanced audio and visuals for a superior cinema experience."
         
        />
         <ExperienceSection
          imageSrc="https://dubaitravelblog.com/wp-content/uploads/2018/08/reel-cinema-dubai-mall-platinum-seats.jpg"
          title="VIP"
          description="Enjoy an elevated night out in an intimate."
         
        />
    </div>
       
      </main>
            
             <Footer/>
            
        </>
    )
}

export default Home
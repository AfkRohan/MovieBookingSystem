import React from 'react';
import ImageSlider from '../../components/ImageSlider';
import FeaturedMovie from '../../components/FeaturedMovie';
import AdminMovieCard from '../../components/AdminMovieCard';
import ExperienceSection from '../../components/ExperienceSection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Home(){
   
    return(
 <>
       <Header/>
             
             <ImageSlider></ImageSlider>
             <main className="main-content">
             <center><h1>Featured Movies</h1></center>
             <div className="app">
                <FeaturedMovie
                   
                    title="Wednesday"
                    description="This is the description of the first movie."
                    imageSrc="https://m.media-amazon.com/images/I/61Nu7B0M5rL._AC_SL1000_.jpg"
                />
              <FeaturedMovie
                    title="Justice leage"
                    description="This is the description of the second movie."
                    imageSrc="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg"
                />
              <FeaturedMovie
                   
                   title="Tar"
                   description="This is the description of the third movie."
                   imageSrc="https://www.bing.com/th?id=OIP.3BTgWgTpbvTxR-ICopujEAHaLH&w=120&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>

             <FeaturedMovie
                   title="Scream"
                   description="This is the description of the fourth movie."
                   imageSrc="https://th.bing.com/th?id=OPHS.bTdI%2fXy61LsZjQ474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1"
             />
            <FeaturedMovie
                   title="Batman"
                   description="This is the description of the fourth movie."
                   imageSrc="https://m.media-amazon.com/images/I/81Yakb7GZuL._AC_SL1500_.jpg"
            />
            
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
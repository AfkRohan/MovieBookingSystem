import React from 'react'
import ImageSlider from '../../components/ImageSlider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Home(){
    return(
 <>
       <Header/>
             {/* <h1 className="m2 tacenter">Welcome to Cineplex Theatre</h1> */}
             <ImageSlider></ImageSlider>
             <Footer/>
            
        </>
    )
}

export default Home
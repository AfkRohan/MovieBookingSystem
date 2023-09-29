import React from 'react'
import logo from '../../assets/logowhite.png';

function Home(){
    return(
        
            <div className="bg-primary textxlarge textwhite flex justify-between p2">
         <img className="m1" src={logo} alt="My Logo" />
         <div className="p1">
            <h1 className="textsmall">Home</h1>
          
         </div>
             </div>
           
       
    )
}

export default Home
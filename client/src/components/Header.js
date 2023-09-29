import React from 'react'
import logo from '../assets/logowhite1.png';
import user from '../assets/user1.png';
import search from '../assets/search1.png'; 
import ticket from '../assets/ticket1.png'; 

function Header(){
    return(
 <>
        <div className="bg-primary textxlarge textwhite flex justify-between p2">
         <img className="m1" src={logo} alt="My Logo" />
         <div className="p1 flex gap1">

            <input className="m1" type="text" placeholder="Search..."></input>
          
              <img className="m1" src={user} alt="user" />
              <img className="m1" src={ticket} alt="ticket" />
              <img className="m1" src={search} alt="search" />
             </div>
             </div>
           
        </>
    )
}

export default Header
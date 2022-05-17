import React from 'react';
import {useState} from 'react';
import Intro from './Intro.js';
function Header() {

  const [toggleBar, setToggleBar]=useState(true);
    return (
      <div className="Header flex justify-between px-6 py-4">
         <Intro/>
         <svg xmlns="http://www.w3.org/2000/svg" className="lg:hidden flex h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth="2" onClick={()=>setToggleBar(!toggleBar)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
   </svg>
       <ul className={`sideNavbar ${toggleBar ? "hidden":"flex flex-col"} lg:flex lg:flex-col`}>
           <li className="text-red text-right text-subheading h-1/6"><a href="#home" className="font-bold">Home</a></li>
           <li className="text-red text-right text-subheading h-1/6"><a href="#about" className="font-bold">About</a></li>
           <li className="text-red text-right text-subheading h-1/6"><a href="#menu" className="font-bold">Menu</a></li>
           <li className="text-red text-right text-subheading h-1/6"><a href="#contact" className="font-bold">Contact</a></li>
       </ul>
       
      </div>
    );
  }
  
  export default Header;
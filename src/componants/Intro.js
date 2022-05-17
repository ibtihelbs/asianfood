import React from 'react';
import logo from '../images/logo-grey.svg';
function Intro() {
    return (
      <div className="Intro">
       <img className="w-28" src={logo} alt="logo"/>
       <h1 className="font-Marko-One lg:text-intro text-red text-intro text-left align-text-top md:text-introTablet sm:text-introMobile">It's</h1>
       <h1 className="font-Marko-One lg:text-intro text-red text-intro text-left align-text-top md:text-introTablet sm:text-introMobile"> a </h1>
       <h1 className="font-Marko-One lg:text-intro text-red text-intro text-left align-text-top md:text-introTablet sm:text-introMobile"> voyage</h1>
      </div>
    );
  }
  
  export default Intro;

import React from 'react';
import logo from '../images/logo-red.svg';
import RestaurantFront from '../images/RestaurantFront.svg';
function About() {
    return (
      <div className="About px-6" id="About">
       <div className="container mx-auto">
         <img className="w-28 mx-auto py-5" src={logo} alt="logo"/> 
       <p>
   
         The point of using Lorem Ipsum is that it has a more-or-less normal 
         distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. 
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, 
          and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
       </p></div>
       <div className="time flex items-center">
         <img className="img" src={RestaurantFront} alt="restaurant"/>
         <ul>
           <li className="px-6 py-2 w-full text-subheading">We Open at:</li>
           <li className="px-6 py-2 border-b border-gray-200 w-full text-sub_heading">Monday:8am to 10pm</li>
           <li className="px-6 py-2 border-b border-gray-200 w-full text-sub_heading">Tuesday:8am to 10pm</li>
           <li className="px-6 py-2 border-b border-gray-200 w-full text-sub_heading">wednesday:8am to 10pm</li>
           <li className="px-6 py-2 border-b border-gray-200 w-full text-sub_heading">thursday:8am to 10pm</li>
           <li className="px-6 py-2 border-b border-gray-200 w-full text-sub_heading">Friday:8am to 10pm</li>
           <li className="px-6 py-2 border-b border-gray-200 w-full text-sub_heading">Saturday:8am to 10pm</li>
         </ul>
       </div>
       <div className="service flex py-5 gap-5">
       <div className="block shadow-lg bg-white max-w-sm text-center">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="darkgrey" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
</svg>
    <div className="p-5">
        <a href="#home">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get you a luxerious expression</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        
    </div>
</div>
           
<div className="block shadow-lg bg-white max-w-sm text-center">
<svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="darkgrey" strokeWidth={1}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
</svg>
    <div className="p-5">
        <a href="About">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Gift card</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
    </div>
</div>
<div className="block shadow-lg bg-white max-w-sm text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="darkgrey" strokeWidth={1}>
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
    <div className="p-5">
        <a href="#About">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Delivery anywhere</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        
    </div>
</div>
       </div>
      </div>
    );
  }
  
  export default About;
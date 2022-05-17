import React from 'react';
/**testimonial.js*/
import Testimonial from './Testimonial.js';
import item1 from '../images/menu/item1.jpg';
import item2 from '../images/menu/item2.jpg';
import item3 from '../images/menu/item3.jpg';
import item4 from '../images/menu/item4.jpg';
import item5 from '../images/menu/item5.jpg';
import item6 from '../images/menu/item6.jpg';
function Menu() {
    return (
      <div className="Menu">
     
      <section className="overflow-hidden text-gray-700">
  <div className="container py-2 mx-auto">
    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full"
            src={item1}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full"
            src={item2}/>
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full"
            src={item3}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full"
            src={item4}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full"
            src={item5}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full"
            src={item6}/>
        </div>
      </div>
    </div>
  </div>
</section>
      <Testimonial/>
      </div>
      
    );
  }
  
  export default Menu;
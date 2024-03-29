import React from 'react';
import Header from './Header';

function Hero(){
   return (
      <div className="hero" >
        <Header/>
        <div className='content'>
            <img src="Assets/profile.jpg" alt="Profile Photo" />
            <div>
            <h1>S Riswanth Palani </h1>
            <p>Programmer | Software Developer | Full Stack Web Developer </p>
            </div>
         </div>
      </div>
   );

}
export default Hero;
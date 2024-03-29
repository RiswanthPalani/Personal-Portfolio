import React from 'react';

function Header(){
      return (
        <header>
            <h1>Portfolio</h1>
            <div className='links'>
               <p><a className="link-about" href="#about">About </a> | 
                <a className="link-contact" href="#contact">Contact </a> |
                <a className='link-resume' href="#resume">Resume </a>  </p>
            </div>
        </header>
      );
}

export default Header;
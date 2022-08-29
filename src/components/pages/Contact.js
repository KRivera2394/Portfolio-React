import React from 'react';
import uc from '../images/underConstruction.jpg'
import '../styles/blog.css';

export default function Contact() {
  return (
   
     <div className='blogContainer'>
      
      <img className='needsWork' src={uc} alt='UnderConstruction'/>
    </div>
   
  );
}

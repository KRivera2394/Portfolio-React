import React from 'react';
import '../styles/home-page.css';
import '../styles/projects.css';
import pp from '../images/HeadShot-BangJJ.jpg'

export default function Home() {
  return (
    
    <div className='homeBodyContainer'>
      <h1 className='homeHeader'>Keanu Rivera</h1>
      <img className='profilePic' src={pp} alt='ProfilePicture'/>
      <p className='homeText tH'>
      Hello! Welcome to my portfolio! My name is Keanu Rivera and I just might be your next Junior Full-Stack Developer!. I am a detail-oriented individual with knowledge across a range of applications and programming languages including HTML, CSS, JavaScript, MySQL, GraphSQL , and MongoDB. I'm always looking to utilize my programming skills to provide solutions to complex problems and create fully functional web applications for users to enjoy. 

      
      </p>
      
    </div>
    
  );
}

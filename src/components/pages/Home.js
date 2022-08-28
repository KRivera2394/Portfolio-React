import React from 'react';
import '../styles/home-page.css';
import '../styles/projects.css';
import pp from '../images/NewPP.jpg'

export default function Home() {
  return (
    
    <div className='homeBodyContainer'>
      <h1 className='homeHeader'>Keanu Rivera</h1>
      <img className='profilePic' src={pp} alt='ProfilePicture'/>
      <p className='homeText tH'>
      Hello! Welcome to my portfolio! I am Junior Full-Stack Software Developer. I've always been comfortable with computers and the fascinated with the tech industry. So in late 2021 began to do reasearch on coding and different programming languages. Using resources and literature available to me, I was able to get a very basic understanding of how the internet works and how Websites and Web Applications are created using laguages such as.. "HTML , CSS , and Javascript." plus many more. These were the 3 languages that kept getting mentions along with ones like "Python" and "C++". After months of just doing some self teaching on the weekends, I finally decided to make a decision to pursure a career as a Full-Stack Software Developer by enrolling into UCF's coding program.  
      </p>
    </div>
    
  );
}

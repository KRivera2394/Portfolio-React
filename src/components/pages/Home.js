import React from 'react';
import '../styles/home-page.css';
import '../styles/projects.css';
import pp from '../images/HeadShot-BangJJ.jpg'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    
    <div className='homeBodyContainer'>
      <motion.h1
      initial={{ y: -1500}}
      animate={{y: 0}}
      transition={{ delay: 1.0 , type: 'tween'}}
       className='homeHeader'>Keanu Rivera</motion.h1>
      <motion.img
      initial={{ x: -1500}}
      animate={{x: -0}}
      transition={{ delay: 1.5 , type: 'tween'}}
       className='profilePic' src={pp} alt='ProfilePicture'/>
      <motion.p
      initial={{ x: 1500}}
      animate={{x: -0}}
      transition={{ delay: 2.0 , type: 'tween'}}
      className='homeText tH'>
      Hello! Welcome to my portfolio! My name is Keanu Rivera, and I just might be your next Junior Full-Stack Developer! I am a detail-oriented individual with knowledge across a range of applications and programming languages including HTML, CSS, JavaScript, MySQL, GraphSQL , and MongoDB. I'm always looking to utilize my skills to provide solutions for complex problems, and create fully functional web applications for the user to enjoy!

      
      </motion.p>
      
    </div>
    
  );
}

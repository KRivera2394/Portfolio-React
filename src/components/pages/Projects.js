import React from 'react';
import vNV from '../images/screenshot.png'
import cluster from '../images/cluster.png'
// import weatherBot from '../images/WeatherBot.png'
import elevate from '../images/elevate.png'
import '../styles/projects.css';
import { motion } from 'framer-motion';

 

export default function Projects() {
  return (
    <div className='projectsMod'>
      <motion.h1 initial={{ x: -1400}}
      animate={{x: 0}}
      transition={{ delay: 1.0 , type: 'tween'}} className='projectHeader'>Projects</motion.h1>
      <motion.p initial={{ x: 1400}}
      animate={{x: 0}}
      transition={{ delay: 1.0 , type: 'tween'}} className='projectText'>
        These are a couple of projects I've had the privilege to work on...
      </motion.p>
      <div className='projectCont'>
      <motion.a initial={{ x: -1400}}
      animate={{x: 0}}
      transition={{ delay: 1.0 , type: 'tween'}} className='vnvImage' href='https://elevate-2.herokuapp.com/'><img className='vIG' src={elevate} alt='WeatherBot'/></motion.a>
     
       <motion.a initial={{ x: 1400}}
      animate={{x: 0}}
      transition={{ delay: 1.0 , type: 'tween'}} className='vnvImage' href='https://clusterr-1.herokuapp.com/home'><img className='vIG' src={cluster} alt='cluster'/></motion.a>
     
       <motion.a initial={{ x: -1400}}
      animate={{x: 0}}
      transition={{ delay: 1.0 , type: 'tween'}} className='vnvImage' href='https://krivera2394.github.io/Vines-and-Victuals/'><img className='vIG' src={vNV} alt='vnv'/></motion.a>
      </div>
    </div>
  );
}

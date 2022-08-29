import React from 'react';
import vNV from '../images/screenshot.png'
import cluster from '../images/cluster.png'
import weatherBot from '../images/WeatherBot.png'
import '../styles/projects.css';

 

export default function Projects() {
  return (
    <div className='projectsMod'>
      <h1 className='projectHeader'>Projects</h1>
      <p className='projectText'>
        These are a couple of projects I've had the privilege to work on...
      </p>
      <div className='projectCont'>
      <a className='vnvImage' href='https://krivera2394.github.io/Vines-and-Victuals/'><img className='vIG' src={vNV} alt='vnv'/></a>
      <a className='vnvImage' href='https://clusterr-1.herokuapp.com/home'><img className='vIG' src={cluster} alt='cluster'/></a>
      <a className='vnvImage' href='https://krivera2394.github.io/5-Day-Forecast/'><img className='vIG' src={weatherBot} alt='WeatherBot'/></a>
      </div>
    </div>
  );
}

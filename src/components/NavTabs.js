import React from 'react';
import './styles/html.css';
import { motion } from 'framer-motion';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul id='navB' className="nav nav-tabs justify-content-center">
       <motion.li
         
         initial={{ y: -60}} 
         animate={{y: 0}}
          transition={{ delay: 2.0 , type: 'tween'}}
      className="nav-item">
        <motion.a
        whileHover={{ scale: 1.1}}
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </motion.a>
      </motion.li >
      <motion.li initial={{ y: -60}}
      animate={{y: 0}}
      transition={{ delay: 2.3 , type: 'tween'}} className="nav-item">
        <motion.a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </motion.a>
      </motion.li>
      <motion.li initial={{ y: -60}}
      animate={{y: 0}}
      transition={{ delay: 2.5 , type: 'tween'}} className="nav-item">
        <motion.a
          href="#blog"
          onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </motion.a>
      </motion.li>
      <motion.li initial={{ y: -60}}
      animate={{y: 0}}
      transition={{ delay: 2.7 , type: 'tween'}} className="nav-item">
        <motion.a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </motion.a>
      </motion.li>
    </ul>
    
  );
}

export default NavTabs;

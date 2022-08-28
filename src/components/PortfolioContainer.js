import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify"> I am a detail-oriented individual with knowledge across a broad range of applications and programming languages including Html, CSS, JavaScript, MySQL, GraphSQL. I'm always looking to utilize my programming skills to provide solutions to complex problems and create fascinating projects for users to enjoy. Also I enjoy thinking on my feet and am always open to acquiring new skills.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Frameworks</h6>
            <ul className="footer-links">
              <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
              <li><a href="https://tailwindcss.com/">Tailwind</a></li>
              <li><a href="https://bulma.io/">Bulma</a></li>
              <li><a href="https://jquery.com/">jQuery</a></li>
              <li><a href="https://expressjs.com/">Express.js</a></li>
             
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a></li>
              <li><a href="#projects"  onClick={() => handlePageChange('Projects')}className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>Projects</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Blog</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Contact</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Want to code?</a></li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="container">
        <div class="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="---"> KeanuRivera</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className='social-icons'>
              <li><a className='facebook' href='https://www.facebook.com'><i class="fa fa-facebook"></i></a></li>
              <li><a className='twitter' href='https://www.twitter.com'><i class="fa fa-twitter"></i></a></li>
              <li><a className='dribbble' href='https://github.com/KRivera2394'><i class="fa fa-github"></i></a></li>
              <li><a className='linkedin' href='https://www.linkedin.com/in/keanu-rivera-b37438237/'><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
     


  );
}

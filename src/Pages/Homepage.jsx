import React, { useRef, useState } from 'react';
import HiBlock from '../Components/HiBlock.jsx';
import Portfolio from '../Components/Portfolio.jsx';
import Skills from '../Components/Skills.jsx';
import Footer from '../Components/Footer.jsx';


const Homepage = () => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the mobile menu

  const scrollToSection = (ref) => {
    if (ref.current) {
      const offset = 240; // height of fixed navigation
      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false); // Close the menu after an item is clicked
    }
  };

  return (
    <div className='App'>
      <div className='fixed-navigation'>
        <div className='navigation'>
          <a target="_blank" rel="noopener noreferrer" href='https://github.com/polinanapolova'> <div className='logo'>Polina <span style={{ fontWeight: "bold" }}>N.</span></div> </a>
          <div className='nav-block normal-text'>
            <div className='nav-site'>
              <a onClick={() => scrollToSection(homeRef)}><div className='nav'>Home</div></a>
              <a onClick={() => scrollToSection(projectsRef)}><div className='nav'>Projects</div></a>
              <a onClick={() => scrollToSection(skillsRef)}><div className='nav'>Skills</div></a>
            </div>
            <a target="_blank" rel="noopener noreferrer" href='https://disk.yandex.ru/i/djvJB3Q4V8r56w'><div className='resume'>Resume</div></a>
          </div>
          <div className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? 'Close' : 'Menu'}
          </div>
        </div>

        {/* Side Menu for Mobile */}
        {isMenuOpen && (
          <div className='mobile-menu'>
            <a onClick={() => scrollToSection(homeRef)}>Home</a>
            <a onClick={() => scrollToSection(projectsRef)}>Projects</a>
            <a onClick={() => scrollToSection(skillsRef)}>Skills</a>
            <a target="_blank" rel="noopener noreferrer" href='https://disk.yandex.ru/i/djvJB3Q4V8r56w'>Resume</a>
          </div>
        )}
      </div>
      <HiBlock ref={homeRef} />
      <Portfolio ref={projectsRef} />
      <Skills ref={skillsRef} />
      <Footer />
    </div>
  );
};

export default Homepage;



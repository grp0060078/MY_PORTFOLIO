//HeroSection.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import profileImg from '../assets/images/photo4.jpg'
import "../App.css"

function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero_container container grid">
        <div className="hero_content">
          <h4><span className="name">Hello</span>, I'm</h4>
          <h3>RAJAPANDI</h3>
          <h1>
            And I'm    
            <span className="typed" data-typed-items="Full-stack Developer"></span>
          </h1>
          
          <div className="hero_social">
            <a href="https://github.com/grp0060078">  <FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/rajapandi003/"> <FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <a href="#contact" className="btn">
            Hire Me !<FontAwesomeIcon icon={faPaperPlane} className="fa-solid" />
          </a>
        </div>
        <div className="hero_img">
          <img src={profileImg} alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

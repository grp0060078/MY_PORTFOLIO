//AboutSection.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import profileImg from '../assets/images/photo4.jpg'
import resumePdf from '../assets/RAJAPANDI RESUME.pdf';
import "../App.css"

function AboutSection() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About <span className="name">Me</span></h2>
      <div className="about_container container grid">
        <div className="about_img">
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="about_content">
          <p>As a Fullstack Developer, I am highly responsible and hardworking, with strong leadership skills and a professional approach. I am passionate about creating clean and efficient code that delivers a seamless user experience. With years of experience in the field, I have honed my skills in HTML, CSS, JavaScript, React Js, Node Js, and various other web development tools. I believe in continuous learning and staying up-to-date with the latest technologies to deliver cutting-edge solutions to my clients.</p>
          <div className="about_info">
            <div>
              <span className="number">5+</span>
              <br />
              <span className="text">Projects</span>
            </div>
            <div>
              <span className="number">20+</span>
              <br />
              <span className="text">Positive<br />reviews</span>
            </div>
          </div>
          <div>
          

            <button className="btn about-btn">
              <a href={resumePdf} target="_blank">Download CV  <FontAwesomeIcon icon={faDownload} /></a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

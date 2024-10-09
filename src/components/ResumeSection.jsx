// ResumeSection.jsx

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';


import mysql from '../assets/images/mysql.png'
import excel from '../assets/images/excel.jpeg'
import express from '../assets/images/1_d2zLEjERsrs1Rzk_95QU9A (1).png'
import bootstrap from '../assets/images/Bootstrap_logo.svg.png'
import Restapi from '../assets/images/restapi.png'
import redux from '../assets/images/redux logo.png'
import git from '../assets/images/Git-Icon-1788C.png'
import github from '../assets/images/github.png'
import render from '../assets/images/render1.jpg'
import netlify from '../assets/images/Netlify.webp'
import vercel from '../assets/images/vercel.png'
import adobephoto from '../assets/images/adobe-photoshop-logo.png'
import adobexd from '../assets/images/xd.png'
import figma from '../assets/images/Figma-1-logo.png'
import msword from '../assets/images/word1.webp'
import powerpoint from '../assets/images/microsoft-powerpoint-2013-logo-52B688AEC4-seeklogo.com.png'
import digitalmarketing from '../assets/images/digi.png'
import html from '../assets/images/html5.png'
import css from '../assets/images/Css.png'
import js from '../assets/images/js.png'
import react from '../assets/images/React.svg'
import node from '../assets/images/node.png'
import mongodb from '../assets/images/mongodb.png'




import "../App.css"

function ResumeSection() {
    const [currentSection, setCurrentSection] = useState('');

    useEffect(() => {
      function handleScroll() {
        const scrollY = window.pageYOffset;
        const pages = document.querySelectorAll('.page');
  
        pages.forEach(page => {
          const sectionHeight = page.offsetHeight;
          const sectionTop = page.offsetTop - 120;
          const sectionId = page.getAttribute('id');
  
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            setCurrentSection(sectionId);
          }
        });
      }
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

   


  return (
    <section className="resume section" id="resume">
      <h2 className="section_title"><span className="name">My </span>Resume</h2>
      <div className="resume_container container grid">
        <div className="resume_tabs">
          <ul>
            <li>
            <a href="#page-1" className={currentSection === 'page-1' ? 'current' : ''}>Experience</a>
            </li>
            <li>
            <a href="#page-2" className={currentSection === 'page-2' ? 'current' : ''}>Skills</a>
            </li>
          </ul>
        </div>

        <div className="resume_content">
          <div id="page-1" className="page one">
            <div className="page_heading">Experience</div>
            <div className="resume_wrap">
              <div className="resume_wrap-icon">
              <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="resume_wrap-content">
                <h4>Web Development</h4>
                <span className="date">MARCH 2024 - APRIL 2024 | Internship</span><br />
                <span className="position">Prodigy Infotech</span>
                <p>
                <FontAwesomeIcon icon={faCircle} /> Successfully delivering 3+ projects within tight deadlines, meeting or exceeding client expectations.<br />
                <FontAwesomeIcon icon={faCircle} />Strong understanding of responsive design principles and user interface development.<br />
                <FontAwesomeIcon icon={faCircle} />Experience with version control systems (e.g., Git) and collaborative development workflows.
                </p>
              </div>
              </div>


            <div className="resume_wrap">
              <div className="resume_wrap-icon">
              <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="resume_wrap-content">
                <h4>Web Development</h4>
                <span className="date">MARCH 2024 - APRIL 2024 | Internship</span><br />
                <span className="position">Cognifyz Technologies</span>
                <p>
                <FontAwesomeIcon icon={faCircle} />Successfully designed and deployed webpages with an emphasis on responsive and modern design principles.<br />
                <FontAwesomeIcon icon={faCircle} />Implemented secure and efficient database connections, enhancing the functionality and performance of web applications.<br />
                <FontAwesomeIcon icon={faCircle} />Utilized Photoshop skills to contribute visually appealing graphics and layouts, positively impacting the overall aesthetics of web projects.
                </p>
              </div>
            </div>

            <div className="resume_wrap">
              <div className="resume_wrap-icon">
              <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="resume_wrap-content">
                <h4>Web Development</h4>
                <span className="date">JULY 2024 - August 2024 | Internship</span><br />
                <span className="position">Zidio Development</span>
                <p>
                <FontAwesomeIcon icon={faCircle} />Developed a MERN stack job listing portal with separate dashboards for job seekers and employers.<br />
                <FontAwesomeIcon icon={faCircle} />Implemented user authentication, profile management, job search, and application tracking features..<br />
                <FontAwesomeIcon icon={faCircle} />Integrated resume and cover letter uploads, with file handling using Multer, and deployed on Render and Vercel.
                </p>
              </div>
            </div>

          </div>

          
                    {/* Skills Page */}

                    <div id="page-2" className="page two">
                        <div className="page_heading">Skills</div>
                        <div className="progressBoxs grid">

                            {/* Skill Progress Bars  */}
                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img1' src={html}/></span>
                                </div>
                            </div>
                            

                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img1' src={css}/></span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                <span><img className='img1' src={js}/></span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                <span><img className='img1' src={react}/></span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                <span><img className='img1' src={node}/></span>
                                </div>
                            </div> 


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img1' src={express}/></span>
                                </div>
                            </div>
                            

                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img1' src={mysql}/></span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                <span><img className='img1' src={mongodb}/></span>
                                </div>
                             </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><FontAwesomeIcon icon={faAws}  className="color9" /></span>
                                </div>
                            </div>


                          


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={bootstrap} />  </span>
                                </div>
                            </div>

                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={Restapi} />  </span>
                                </div>
                            </div>


                              
                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={redux} />  </span>
                                </div>
                            </div>
                            

                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={git} />  </span>
                                </div>
                            </div>

                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={github} />  </span>
                                </div>
                            </div>

                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={render} />  </span>
                                </div>
                            </div>

                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={netlify} />  </span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={vercel} />  </span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={adobephoto} />  </span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={adobexd} />  </span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={figma} />  </span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={msword} />  </span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img1' src={excel}/></span>
                                 </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={powerpoint} />  </span>
                                </div>
                            </div>


                            <div className="progressBox">
                                <div className="progress_name">
                                    <span><img className='img2' src={digitalmarketing} />  </span>
                                </div>
                            </div>

                          

              
            </div>
          </div>
                   
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;

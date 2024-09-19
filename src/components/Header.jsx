//Header.jsx

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Typed from "typed.js";
import mixitup from "mixitup";
import "../App.css"


function Header() {
    
    useEffect(() => {
        
        const typed = new Typed('.typed', {
            strings: ["Full Stack Developer"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });

      
        const containerEl = document.querySelector('.portfolio_container');
        const mixer = mixitup(containerEl, {
            animation: {
                enable: false
            }
        });

       
        return () => {
            typed.destroy(); 
            mixer.destroy(); 
        };
    }, []);

    return (
        <header id="header">
            <div className="container">
                <a href="#" className="logo">
                    <h2 className="logo-name"><span className="name">RAJA</span>PANDI</h2>
                </a>
                <ul className="menu">
                    <li className="menu-item">
                        <a href="#hero" className="menu_link active-link">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#about" className="menu_link">About</a>
                    </li>
                 

                    <li className="menu-item">
                        <a href="#resume" className="menu_link">Experience</a>
                    </li>

                      <li className="menu-item">
                        <a href="#services" className="menu_link">Services</a>
                    </li>
                    <li className="menu-item">
                        <a href="#portfolio" className="menu_link">Projects</a>
                    </li>
                    <li className="menu-item">
                        <a href="#contact" className="menu_link">Contact</a>
                    </li>
                    <FontAwesomeIcon icon={faTimes} className="close_icon" />
                </ul>
                <FontAwesomeIcon icon={faBars} className="toggle_icon" />
            </div>
        </header>
    );
}

export default Header;



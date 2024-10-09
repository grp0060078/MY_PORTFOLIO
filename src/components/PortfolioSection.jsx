//PortfolioSection.jsx

import React, { useState } from 'react';
import calculator from '../assets/images/calculator-1019743_640.webp'
import weather from '../assets/images/sky-background-video-conferencing_23-2148639325.avif'
import country from '../assets/images/world-globe.jpg'
import query from '../assets/images/query.png'
import job from '../assets/images/job-hiring-vacancy-team-interview-career-recruiting_53876-121268.avif'
import travel from '../assets/images/travel app.png'
import hotelroom from '../assets/images/hotell.jpg'
import database from '../assets/images/men-stu.jpg'
import user from '../assets/images/user.jpg'
import blog from '../assets/images/aerial-background-blog-cafe.jpg'
import dictionary from '../assets/images/dictionary-7lv43w7g0b2ekapt.jpg'
import tictac from '../assets/images/tic tac toe.jpg'
import "../App.css"


function PortfolioSection() {
  const [filter, setFilter] = useState("*");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const projects = [
    {
      title: "Calculator",
      category: "Frontend",
      image: calculator,
      description: "A basic calculator app implemented using HTML, CSS, and JavaScript, providing a simple interface for performing arithmetic calculations, with functionality for clearing the display, evaluating expressions, and displaying errors.",
      demoLink: "https://calculator-t44b.vercel.app/",
      githubLink: "https://github.com/grp0060078/calculator.git"
    },

    {
      title: "User Management list",
      category: "Frontend",
      image: user,
      description: "A user management system that enables admins to create, update, view, and delete user profiles efficiently.",
      demoLink: "https://react-axios-three.vercel.app/",
      githubLink: "https://github.com/grp0060078/React-Axios.git"
    },

    {
      title: "Weather App",
      category: "Frontend",
      image: weather,
      description: "An interactive weather app built with HTML, CSS, and JavaScript, offering real-time weather updates and forecasts based on user-provided location.",
      demoLink: "https://weather-app-delta-orpin.vercel.app/",
      githubLink: "https://github.com/grp0060078/weather-app.git/"
    },
    {
      title: "Tic-Tac-Toe",
      category: "Frontend",
      image: tictac,
      description: "A classic two-player game where players take turns marking X or O on a 3x3 grid, aiming to align three marks horizontally, vertically, or diagonally to win.",
      demoLink: "https://prodigy-wd-03-nine.vercel.app/",
      githubLink: "https://github.com/grp0060078/tic-toe-new.git"
    },


    {
      title: "Blog Model",
      category: "Frontend",
      image: blog,
      description: "A blog model that features categories for Full Stack Development, Data Science, Cyber Security, and Career, allowing users to explore and contribute content across these fields.",
      demoLink: "https://react-guvi-blog-model.vercel.app/",
      githubLink: "https://github.com/grp0060078/react-guvi-blog-model.git/"
    },

    {
      title: "Dictionary",
      category: "Frontend",
      image: dictionary,
      description: "A dictionary app that allows users to search for word definitions, synonyms, and translations across multiple languages.",
      demoLink: "https://dictionary-app-two-woad.vercel.app/",
      githubLink: "https://github.com/grp0060078/Dictionary-app.git"
    },

    {
      title: "Job Listing",
      category: "Fullstack development",
      image: job,
      description:"The Job Listing project is a MERN stack application that enables job seekers to search and apply for jobs, while employers can post and manage job listings, all within dedicated dashboards.",
      demoLink: "https://job1-grp0060078s-projects.vercel.app/",
      githubLink: "https://github.com/grp0060078/job1.git"
    },

    {
      title: "Country-App",
      category: "Frontend",
      image: country,
      description: "A country app that provides detailed information about countries, including demographics, geography, and cultural insights.",
      demoLink: "https://fetch-topaz-iota.vercel.app/",
      githubLink: "https://github.com/grp0060078/fetch.git"
    },

    {
      title: "Hotel Room Booking App",
      category: "Backend",
      image: hotelroom,
      description: "A hotel room booking app built with Node.js and MongoDB, enabling users to search, book, and manage hotel reservations efficiently.",
      demoLink: "https://node-day2-task.onrender.com/",
      githubLink: "https://github.com/grp0060078/Node-Hall-Booking-API.git"
    },

    {
      title: "Mentor_Student_Assigning Database",
      category: "Backend",
      image: database,
      description: "A mentor-student assignment system built with Node.js and MongoDB, allowing efficient assignment and reassignment of students to mentors.",
      demoLink: "https://node-mentor-and-student-assigning.onrender.com",
      githubLink: "https://github.com/grp0060078/Node-Mentor-and-Student-Assigning-Database.git"
    },
    {
      title: "QUERY RISE AND QUERY SOLVE",
      category: "Fullstack development",
      image: query,
      description: "It is a project focused on identifying and addressing user queries through an efficient problem-solving platform.",
      demoLink: "https://capstone-fe-omega.vercel.app/",
      githubLink: "https://github.com/grp0060078/CAPSTONE-FE.git"
    },

    {
      title: "UI/UX Design",
      category: "UI/UX Design",
      image: travel,
      description: "Travel app designs in Figma show how users can search for destinations and book trips. Figma allows you to create interactive prototypes for testing these features.Figma helps design detailed screens for booking flights and hotels in the travel app.",
      demoLink: "https://www.figma.com/proto/DbQK2XYnHzwMNenaFUCI4d/Travel-App?node-id=5-14&t=a1DbxmGsPj3zd466-1&starting-point-node-idhttps://www.figma.com/proto/DbQK2XYnHzwMNenaFUCI4d/Travel-App?page-id=0%3A1&node-id=2-2&node-type=canvas&viewport=711%2C1754%2C0.63&t=GzHjLuGUGm9b5x9p-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A2",
      githubLink: "https://www.figma.com/community/file/1120335031786166235"
    }

  ];

  const filteredProjects = filter === "*" ? projects : projects.filter(project => project.category === filter);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section_title"><span className="name">My </span>Projects</h2>

      <ul className="portfolio_categories">
        <li className={filter === "*" ? "active" : ""} onClick={() => handleFilterChange("*")}>All</li>
        <li className={filter === "Frontend" ? "active" : ""} onClick={() => handleFilterChange("Frontend")}>Frontend</li>
        <li className={filter === "Backend" ? "active" : ""} onClick={() => handleFilterChange("Backend")}>Backend</li>
        <li className={filter === "Fullstack development" ? "active" : ""} onClick={() => handleFilterChange("Fullstack development")}>Fullstack</li>
        <li className={filter === "UI/UX Design" ? "active" : ""} onClick={() => handleFilterChange("UI/UX Design")}>UI/UX Design</li>
      </ul>

      <div className="container portfolio_container">
        {filteredProjects.map((project, index) => (
          <article key={index} className={`project mix ${project.category.toLowerCase()}`} data-order={index + 1}>
            <div className="project_image">
              <img src={project.image} alt={`project ${index + 1}`} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="portfolio_cta">
              <a href={project.demoLink} className="btn sm primary" target="_blank" rel="noreferrer">View</a>
              <a href={project.githubLink} className="btn sm" target="_blank" rel="noreferrer">Github</a>
            </div>
          </article>
    ))}
    </div>

  
</section>
);
}

export default PortfolioSection;
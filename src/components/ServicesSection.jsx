// ServicesSection.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import '../App.css';




function ServicesSection() {
  const [openModalIndex, setOpenModalIndex] = useState(null);

  const toggleModal = (index) => {
    setOpenModalIndex(index === openModalIndex ? null : index);
  };

  const closeModal = () => {
    setOpenModalIndex(null); 
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title" id='service'><span className="name">My </span>Services</h2>
      <div className="services_container container grid">
      
        <ServiceItem
          
          title="Front-end Development"
          modalTitle="Front-end Developer"
          modalInfo={[
            "Designed engaging and interactive user interfaces using React Js.",
            "Implemented responsive design principles for seamless experiences across devices.",
     
            "Committed to delivering inclusive designs accessible to all users.",
            "Experienced in deploying and maintaining front-end applications on cloud platforms like Vercel or Netlify."
          ]}
          
          isOpen={openModalIndex === 0}
          toggleModal={() => toggleModal(0)}
          closeModal={closeModal}
        />


        <ServiceItem
          title="Back-end Development"
          modalTitle="Back-end Developer"
          modalInfo={[
            "Proficient in server-side programming languages like Node.js for building robust back-end systems.",
            "Experienced in designing and implementing RESTful APIs for communication between the front end and back end.",
            "Skilled at working with databases such as MongoDB or SQL for data storage and retrieval.",
            "Specializes in handling authentication, authorization, and security measures to protect sensitive data.",
            "Experienced in deploying and maintaining back-end applications on cloud platforms like Render or Vercel."
          ]}
          isOpen={openModalIndex === 1}
          toggleModal={() => toggleModal(1)}
          closeModal={closeModal}
        />


        <ServiceItem


          title="Full-stack Development"
          modalTitle="Full-stack Developer"
          modalInfo={[
            "Proficient in building full-stack web applications using React.js for the front end.",
            "Experienced in developing RESTful APIs and backend services with Node.js and Express.js.",
            "Skilled at working with MongoDB and Mongoose for database management and integration.",
            "Specializes in creating scalable and efficient solutions, ensuring seamless integration between front-end and back-end components.",
            "Experienced in deploying applications to cloud platforms like Render for production environments."
          ]}
          isOpen={openModalIndex === 2}
          toggleModal={() => toggleModal(2)}
          closeModal={closeModal}
        />

       <ServiceItem
        
        title="UI/UX Design"
        modalTitle="UI/UX"
        modalInfo={[
          "UI is about designing the look and feel of a product, like buttons and menus.",
          "UX is about making sure a product is easy and enjoyable to use.",
   
          "UI Design focuses on how a product looks and how users interact with it.",
          "UX Design aims to improve the overall experience and satisfaction of using a product."
        ]}
        
        isOpen={openModalIndex === 0}
        toggleModal={() => toggleModal(0)}
        closeModal={closeModal}
      />

        
       <ServiceItem
        
        title="Digital Marketing"
        modalTitle="Digital Marketing"
        modalInfo={[
          "It uses online platforms and tools to promote and advertise products or services.",
          "It involves strategies like social media, email, and search engine optimization to reach and engage customers.",
   
          "It focuses on using digital channels to drive traffic, generate leads, and increase sales.",
          "It leverages data and analytics to measure and optimize marketing efforts for better results."
        ]}
        
        isOpen={openModalIndex === 0}
        toggleModal={() => toggleModal(0)}
        closeModal={closeModal}
      />


      </div>
    </section>
  );
}

function ServiceItem({ title, modalTitle, modalInfo, isOpen, toggleModal, closeModal }) {
  return (

    <div className="services_item">

      <FontAwesomeIcon icon={faTerminal} className='icon'/>
        <h3 className="services_title">{title}</h3>
     
      <span className="services_button" onClick={toggleModal}>
        Read More 
        <FontAwesomeIcon icon={faAngleRight} />
 
      </span>
      {isOpen && (
        <div className="services_modal active-modal">
           
          <FontAwesomeIcon icon={faTimes} className="fa-xmark modal_close-icon" onClick={closeModal} />
          <h3 className="services_modal-title">{modalTitle}</h3>
          <ul>
            {modalInfo.map((info, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={faCircleCheck} />
                <p className="services_modal-info">{info}</p>
              </li>
            ))}
          </ul>
          <button className="close-button" onClick={closeModal}></button>
        </div>
      )}
    </div>
  );
}

export default ServicesSection;

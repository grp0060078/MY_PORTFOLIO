//ContactSection.jsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from 'react';
import "../App.css"

const ContactSection = () => {
  // Define state for name, email, and message
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

// Collect the data from the form
const formData = { name, email, message };

    try {
      const response = await fetch('https://portfolio-br85.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatusMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatusMessage('Failed to send message.');
    }
  };
  
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Contact<span className="name"> Me</span></h2>
      <div className="contact_container container">
        <div className="contact_content">
          <form id="contactForm" onSubmit={handleSubmit} className="contact_form">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="7"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit" className="btn">Send Message <FontAwesomeIcon icon={faPaperPlane} /> </button>
          </form>
          {statusMessage && <p>{statusMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

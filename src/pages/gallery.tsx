import React from 'react';
import '../styles/about.css'; 

const Gallery: React.FC = () => {
  return (
    <div className="about-container">
      <h1>Gallery</h1>
      <p>Welcome to our Gallery!</p>
      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver high-quality products that bring value to our customers and make their lives better.
        </p>
      </section>
      <section className="team-section">
        <h2>Our Team</h2>
        <p>
          We have a diverse and talented team of professionals who are dedicated to achieving excellence in everything we do.
        </p>
      </section>
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feel free to reach out to us at <a href="mailto:contact@ourcompany.com">contact@ourcompany.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Gallery;
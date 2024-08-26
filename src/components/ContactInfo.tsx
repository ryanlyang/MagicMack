//import React from 'react';
import '../styles/ContactInfo.css';
import { Link, useLocation } from "react-router-dom";

const ContactInfo = () => {
  const location = useLocation();

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    }
  };


  return (
    <div className='all-bottom-info-container'>
      <div className="separator"></div>
      <div className="contact-info-container">
        
        <div className="contact-info-content">
          
          <h1 className="contact-info-title">Contact Info</h1>
          <p className="contact-info-description">
            If you have any questions or want to book an appointment, feel free to reach out on any of these platforms!
          </p>

          <div className="contact-details">
            <div className="contact-section">
              <h2 className="contact-section-title">Contact:</h2>
              <p className="contact-detail">Phone: (207) 649-6120</p>
              <p className="contact-detail">Email: mhuard30@gmail.com</p>
              <p className="contact-detail">
                <a href="https://www.facebook.com/carshinesinme/" target="_blank" rel="noopener noreferrer"
                className='link-thing'>Facebook</a>
              </p>
              <p className="contact-detail">
                <a href="https://www.instagram.com/magicmacksautodetailing/" target="_blank" rel="noopener noreferrer"
                className='link-thing'>Instagram</a>
              </p>
            </div>

            <div className="contact-section">
              <h2 className="contact-section-title">Address:</h2>
              <p className="contact-detail">41 Skowhegan Road</p>
              <p className="contact-detail">Fairfield ME 04937</p>
            </div>

            <div className="store-hours">
              <h2 className="store-hours-title">Shop Hours:</h2>
              <div className="store-hours-details">
                <p className="store-hours-detail">Mon-Fri: 9:00am - 4:00pm</p>
                {/* <p className="store-hours-detail">Tuesday: 9:00am - 4:00pm</p>
                <p className="store-hours-detail">Wednesday: 9:00am - 4:00pm</p>
                <p className="store-hours-detail">Thursday: 9:00am - 4:00pm</p>
                <p className="store-hours-detail">Friday: 9:00am - 4:00pm</p> */}
                <p className="store-hours-detail">Saturday: 9:00am - 12:00pm</p>
                <p className="store-hours-detail">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-buttons">
          <a href="https://squareup.com/appointments/book/LKF8FD3ZHRTES" target="_blank" className='contact-button'>Book Today!</a>
          {/* <Link className="contact-button" to={'contact'} onClick={() => handleLinkClick('/')}></Link> */}
          <Link className="contact-button" to={'about'} onClick={() => handleLinkClick('/about')}>Learn more about us!</Link>
          <Link className="contact-button" to={'services'} onClick={() => handleLinkClick('/services')}>View Services</Link>
          <Link className="contact-button" to={'gallery'} onClick={() => handleLinkClick('/gallery')}>View Gallery</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";


const Header: React.FC = () => {
  // Function to handle mouse over
  // Function to handle mouse over
  const handleMouseOver = (id :string, picture :string) => {
    const facebookIcon = document.getElementById(id) as HTMLImageElement;
    if (facebookIcon) {
      facebookIcon.classList.add('hovered'); // Add class for transition
      setTimeout(() => {
        facebookIcon.src = picture; // Path to hover image
        facebookIcon.classList.remove('hovered'); // Remove class after transition
      }, 125); // Half of the transition duration for smooth effect
    }
  };

  // Function to handle mouse out
  const handleMouseOut = (id :string, picture :string) => {
    const facebookIcon = document.getElementById(id) as HTMLImageElement;
    if (facebookIcon) {
      facebookIcon.classList.add('hovered'); // Add class for transition
      setTimeout(() => {
        facebookIcon.src = picture; // Path to original image
        facebookIcon.classList.remove('hovered'); // Remove class after transition
      }, 125); // Half of the transition duration for smooth effect
    }
  };
  //zoom


  

  return (
    <header className="fixed-header">

      <nav>
        <ul>
        <li>
            <Link to={`/`}>
            <div className="button-container">
              <div className="hover-image-container-top hover-image-container-home">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top home-click"></img>
              </div>
              Home
              <div className="hover-image-container-bottom hover-image-container-home">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom home-click"></img>
              </div>
            </div>
            </Link>
          </li>
          <li>
          <Link to={'services'}>
            <div className='button-container'>
              <div className="hover-image-container-top hover-image-container-services">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top services-click"></img>
              </div>
              Services
              <div className="hover-image-container-bottom hover-image-container-services">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom services-click"></img>
              </div>
            </div>
            </Link>
          </li>
          <li>
          <Link to={`gallery`}>
            <div className="button-container">
              <div className="hover-image-container-top hover-image-container-gallery">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top gallery-click"></img>
              </div>
              Gallery
              <div className="hover-image-container-bottom hover-image-container-gallery">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom gallery-click"></img>
              </div>
            </div>
            </Link>
          </li>
          <li>
          <Link to={'about'}>
            <div className='button-container'>
              <div className="hover-image-container-top hover-image-container-about">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top about-click"></img>
              </div>
              About
              <div className="hover-image-container-bottom hover-image-container-about">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom about-click"></img>
              </div>
            </div>
            </Link>
          </li>
          <li>
          <Link to={'contact'}>
            <div className='button-container'>
              <div className="hover-image-container-top hover-image-container-book">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top book-click"></img>
              </div>
              Book Today
              <div className="hover-image-container-bottom hover-image-container-book">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom book-click"></img>
              </div>
            </div>
            </Link>
          </li>
          <li>
            {/* <div className='button-container'> */}
              {/* <div className="hover-image-container-top hover-image-container-gallery">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top gallery-click"></img>
              </div> */}
              <a href="https://www.facebook.com/carshinesinme/" target="_blank" rel="noopener noreferrer" 
                onMouseOver={() => handleMouseOver('facebook-icon', '/real gold facebook.png')} 
                onMouseOut={() => handleMouseOut('facebook-icon', '/black facebook.png')} className='button-container-a'>
                <img id="facebook-icon" src="/black facebook.png" alt="Facebook Logo" className="facebook"
                ></img>
                <div className='overlay'></div>
              </a>
              {/* <div className="hover-image-container-bottom hover-image-container-gallery">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom gallery-click"></img>
              </div> */}
            {/* </div> */}
          </li>
          <li>
              <a href="https://www.instagram.com/magicmacksautodetailing/" target="_blank" rel="noopener noreferrer" 
                onMouseOver={() => handleMouseOver('instagram-icon', '/Instagram_logo_gold.png')} 
                onMouseOut={() => handleMouseOut('instagram-icon', '/Instagram_logo_gray.png')} className='button-container-a'>
                <img id="instagram-icon" src="/Instagram_logo_gray.png" alt="Instagram Logo" className="facebook"
                ></img>
                <div className='overlay'></div>
              </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import '../styles/Header.css';
import { Link } from "react-router-dom";


const Header: React.FC = () => {
  return (
    <header className="fixed-header">

      <nav>
        <ul>
        <li>
            <div className="button-container">
              <div className="hover-image-container-top hover-image-container-home">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top home-site-click"></img>
              </div>
              <Link to={`/`}>Fixed Header</Link>
              <div className="hover-image-container-bottom hover-image-container-home">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom home-site-click"></img>
              </div>
            </div>
          </li>
          <li>
            <div className="button-container">
              <div className="hover-image-container-top hover-image-container-about">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top about-click"></img>
              </div>
              <Link to={`about`}>About</Link>
              <div className="hover-image-container-bottom hover-image-container-about">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom about-click"></img>
              </div>
            </div>
          </li>
          <li>
            <div className='button-container'>
              <div className="hover-image-container-top hover-image-container-gallery">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-top gallery-click"></img>
              </div>
              <Link to={'gallery'}>Gallery</Link>
              <div className="hover-image-container-bottom hover-image-container-gallery">
                <img src="/Gold glow resize.png" alt="Hover Image" className=
                "hover-image-bottom gallery-click"></img>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
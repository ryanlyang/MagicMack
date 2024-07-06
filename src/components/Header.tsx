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
            <Link to={`/`}>Fixed Header</Link>
            </div>
          </li>
          <li>
            <div className="button-container">
              <div className="hover-image-container">
                <img src="/Gold glow resize.png" alt="Hover Image" className="hover-image-top"></img>
              </div>
              <Link to={`about`}>About</Link>
              <div className="hover-image-container">
                <img src="/Gold glow resize.png" alt="Hover Image" className="hover-image-bottom"></img>
              </div>
            </div>
          </li>
          <li>
            <div className='button-container'>
              <Link to={'gallery'}>Gallery</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
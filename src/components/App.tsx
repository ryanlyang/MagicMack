// import { useEffect, useState } from "react";
// import type { Schema } from "../../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
import Header from "./Header";
import "../styles/index.css"
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";



function App() {


  return (
    <div className="all_container">
      <Header />
      <div className='top_container'>
        <Link to={`/`}>
          <img id="Magic-Mack-logo" src="/MagicMackLogo.png" alt="Mack Logo" className="MagicMackLogo"
                  ></img>
        </Link>
        <img id="Auto-Detail-logo" src="/AutoDetailing1.png" alt="Auto Logo" className="AutoDetail"
                ></img>
      </div>
      <Outlet />
      <ContactInfo></ContactInfo>
      <div className='bottom_container'>

      <img id="Bottom_left" src="/Bottom goldie.png" alt="Bottom left" 
        className="bottom_left goldie"></img>

      <img id="Bottom_Logo" src="/MagicMackCarLogo3.jpg" alt="Bottom center" className="bottom_center logo_bottom">
      </img>

      <div className="copyright_bottom bottom_center">Copyright © 2024 Magic Mack's | All rights reserved |  
      <Link to={`privacy-policy`} className="privacy_policy"> Privacy Policy</Link></div>

      <img id="Bottom_right" src="/Bottom goldie.png" alt="Bottom right" 
        className="bottom_right goldie"></img>

      
      
      </div>
      
    </div>
  );
}

export default App;

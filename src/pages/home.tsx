import React from 'react';
import '../styles/home.css'; 

const Home: React.FC = () => {
  return (
    <div className='home_container'>
      <img id="Magic-Mack-logo" src="/MagicMackLogo.png" alt="Mack Logo" className="MagicMackLogo"
                ></img>
    </div>
  );
};

export default Home;
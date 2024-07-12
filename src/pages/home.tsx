import React, { useEffect } from 'react';
import '../styles/home.css'; 
import { Link } from "react-router-dom";

const images = [
  { dirty: '/Sliding_Images/cc185ee11c117276bb22e2fe40578769.jpg', clean: '/Sliding_Images/clean1.jpg' },
  { dirty: '/Sliding_Images/Depositphotos_5986223_XL-1-scaled.webp', clean: '/Sliding_Images/clean2.jpg' },
  { dirty: '/Sliding_Images/Dirty-Car-Contest-Winner.jpg', clean: '/Sliding_Images/clean3.jpg' },
  { dirty: '/Sliding_Images/dirty-car-royalty-free-image-1645811725.jpg', clean: '/Sliding_Images/clean4.jpg' },
  { dirty: '/Sliding_Images/dirty-old-cars-2048x1152-primary-16x9-1.jpg', clean: '/Sliding_Images/clean5.png' },
  { dirty: '/Sliding_Images/images.jpg', clean: '/Sliding_Images/clean6.jpg' },
  { dirty: '/Sliding_Images/maxresdefault.jpg', clean: '/Sliding_Images/clean7.jpg' },
  { dirty: '/Sliding_Images/need-car-wash.jpg', clean: '/Sliding_Images/clean8.jpg' },
  { dirty: '/Sliding_Images/THhrtkgF.jpg', clean: '/Sliding_Images/clean9.jpg' }
];

const images2 = [
  { dirty: '/Sliding_Images/dirty10.png', clean: '/Sliding_Images/clean10.png' },
  { dirty: '/Sliding_Images/dirty11.jpg', clean: '/Sliding_Images/clean11.jpg' },
  { dirty: '/Sliding_Images/dirty12.jpg', clean: '/Sliding_Images/clean12.jpg' },
  { dirty: '/Sliding_Images/dirty13.jpg', clean: '/Sliding_Images/clean13.jpg' },
  { dirty: '/Sliding_Images/dirty14.jpg', clean: '/Sliding_Images/clean14.jpg' },
  { dirty: '/Sliding_Images/dirty15.jpg', clean: '/Sliding_Images/clean15.jpg' },
  { dirty: '/Sliding_Images/dirty16.jpg', clean: '/Sliding_Images/clean16.jpg' },
  { dirty: '/Sliding_Images/dirty17.jpg', clean: '/Sliding_Images/clean17.jpg' },
  { dirty: '/Sliding_Images/dirty18.jpg', clean: '/Sliding_Images/clean18.jpg' }
];


const Home: React.FC = () => {


  return (
    <div className='home_container'>
      <div className='top_container'>
        <Link to={`/`}>
          <img id="Magic-Mack-logo" src="/MagicMackLogo.png" alt="Mack Logo" className="MagicMackLogo"
                  ></img>
        </Link>
        <img id="Auto-Detail-logo" src="/AutoDetailing1.png" alt="Auto Logo" className="AutoDetail"
                ></img>
      </div>
      <div className='images-wrapper'>
        <div className='images_left_box image-container'>
          <div className="image-wrapper">
            {images.map((image, index) => (
              <img key={index} src={image.dirty} alt={`Img ${index + 1}`} />
            ))}
            {images.map((image, index) => (
              <img key={`duplicate-${index}`} src={image.dirty} alt={`Img ${index + 1}`} />
            ))}
          </div>
        
        </div>
        <div className='images_right_box image-container'>
        
          <div className="image-wrapper-right">
            {images.map((image, index) => (
              <img key={index} src={image.clean} alt={`Img ${index + 1}`} />
            ))}
            {images.map((image, index) => (
              <img key={`duplicate-${index}`} src={image.clean} alt={`Img ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>


      <div className='images-wrapper'>
        <div className='images_left_box image-container' style={{marginTop: '-8px' }}>
          <div className="image-wrapper">
            {images2.map((image, index) => (
              <img key={index} src={image.dirty} alt={`Img ${index + 1}`} />
            ))}
            {images2.map((image, index) => (
              <img key={`duplicate-${index}`} src={image.dirty} alt={`Img ${index + 1}`} />
            ))}
          </div>
        </div>
        <div className='images_right_box image-container' style={{marginTop: '-8px' }}>
        
          <div className="image-wrapper-right">
            {images2.map((image, index) => (
              <img key={index} src={image.clean} alt={`Img ${index + 1}`} />
            ))}
            {images2.map((image, index) => (
              <img key={`duplicate-${index}`} src={image.clean} alt={`Img ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      
      <img src="/MagicWand2.png" alt="Magic Wand" className="magic-wand" />

    </div>
  );
};

export default Home;
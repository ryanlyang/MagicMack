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

const Home: React.FC = () => {

  // useEffect(() => {
  //   const images = document.querySelectorAll('.image-wrapper img');
  //   const halfScreenWidth = window.innerWidth / 2;

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const img = entry.target as HTMLImageElement;
  //         if (entry.intersectionRatio > 0.5) {
  //           img.src = img.dataset.clean!;
  //         } else {
  //           img.src = img.dataset.dirty!;
  //         }
  //       });
  //     },
  //     {
  //       root: null,
  //       rootMargin: '0px',
  //       threshold: [0, 0.5, 1]
  //     }
  //   );

  //   images.forEach((img) => {
  //     observer.observe(img);
  //   });

  //   return () => {
  //     images.forEach((img) => {
  //       observer.unobserve(img);
  //     });
  //   };
  // }, []);


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
      <div className="image-container">
        <div className="image-wrapper">
          {images.map((image, index) => (
            <img key={index} src={image.dirty} data-dirty={image.dirty} data-clean={image.clean} alt={`Img ${index + 1}`} />
          ))}
          {images.map((image, index) => (
            <img key={`duplicate-${index}`} src={image.dirty} data-dirty={image.dirty} data-clean={image.clean} alt={`Img ${index + 1}`} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
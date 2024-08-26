import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import '../styles/gallery.css';

const images = [
  '/Sliding_Images/cc185ee11c117276bb22e2fe40578769.jpg', '/Sliding_Images/clean1.jpg',
  '/Sliding_Images/Depositphotos_5986223_XL-1-scaled.webp',  '/Sliding_Images/clean2.jpg', 
  '/Sliding_Images/Dirty-Car-Contest-Winner.jpg', '/Sliding_Images/clean3.jpg',
  '/Sliding_Images/dirty-car-royalty-free-image-1645811725.jpg',  '/Sliding_Images/clean4.jpg',
  '/Sliding_Images/dirty-old-cars-2048x1152-primary-16x9-1.jpg',  '/Sliding_Images/clean5.png',
  '/Sliding_Images/images.jpg',  '/Sliding_Images/clean6.jpg',
  '/Sliding_Images/maxresdefault.jpg',  '/Sliding_Images/clean7.jpg',
  '/Sliding_Images/need-car-wash.jpg',  '/Sliding_Images/clean8.jpg',
  '/Sliding_Images/THhrtkgF.jpg',  '/Sliding_Images/clean9.jpg' 
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setCurrentIndex(null);
  };

  const goToPrevious = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex !== null && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (event.key === 'ArrowLeft') {
          goToPrevious();
        } else if (event.key === 'ArrowRight') {
          goToNext();
        } else if (event.key === 'Escape') {
          closeLightbox();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex]);

  const handleOutsideClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <div className='gallery-all'>
      <Heading as="h1" mb={6} color="whitesmoke" textAlign="center">
        Gallery
      </Heading>
      <div className="gallery">
        {images.map((src, index) => (
          <div key={index} className="gallery-item" onClick={() => openLightbox(index)}>
            <img src={src} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}

        {currentIndex !== null && (
          <div className="lightbox" onClick={handleOutsideClick}>
            <div className="lightbox-content">
              <img
                src={images[currentIndex]}
                alt={`Gallery Image ${currentIndex + 1}`}
              />
              <button className="lightbox-close" onClick={closeLightbox}>X</button>
              {currentIndex > 0 && <button className="lightbox-prev" onClick={goToPrevious}>&lt;</button>}
              {currentIndex < images.length - 1 && <button className="lightbox-next" onClick={goToNext}>&gt;</button>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
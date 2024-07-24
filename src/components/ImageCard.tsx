import React, { useState } from 'react';
import '../styles/ImageCard.css';
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  title: string;
  description: string;
};

const images: ImageProps[] = [
  {
    src: 'Interior-bordered.png',
    title: 'Interior',
    description: 'This is the description for image 2.',
  },
  {
    src: '/BigPrettyShinyBordered2.png',
    title: 'Exterior',
    description: 'This is the description for image 1.',
  },
  {
    src: '/BigPrettyShinyBordered2.png',
    title: 'Ceramic Coatings',
    description: 'This is the description for image 3.',
  },
];

const ImageCard: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="galleryCard">
      {images.map((image, index) => (
        <div
          key={index}
          className={`gallery-item ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={image.src} alt={image.title} />
          <div className="text">
            <div className="title">{image.title}</div>
              <div className="description">{image.description}</div>
              <Link className="learn-more" to={'services'}>Learn More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
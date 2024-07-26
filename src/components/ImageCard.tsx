import React, { useState } from 'react';
import '../styles/ImageCard.css';
import { Link } from "react-router-dom";

type ImageProps = {
  src: string;
  title: string;
  description: string;
  tab: string; // Add a tab property to specify which tab should be active
};

const images: ImageProps[] = [
  {
    src: 'Interior-bordered.png',
    title: 'Interior',
    description: 'This is the description for image 2.',
    tab: 'interior', // Specify the tab identifier
  },
  {
    src: '/BigPrettyShinyBordered2.png',
    title: 'Exterior',
    description: 'This is the description for image 1.',
    tab: 'exterior', // Specify the tab identifier
  },
  {
    src: '/BigPrettyShinyBordered2.png',
    title: 'Ceramic Coatings',
    description: 'This is the description for image 3.',
    tab: 'ceramic', // Specify the tab identifier
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
            <Link className="learn-more" to={`/services?tab=${image.tab}`}>Learn More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;

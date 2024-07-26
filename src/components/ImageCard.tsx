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
    src: '/Services/Interior-example.jpg',
    title: 'Interior',
    description: "Get a meticulously clean car interior with our premium detailing service. We use top-quality chemicals to clean seats, windows, and all surfaces, ensuring a spotless and fresh ride every time.",
    tab: 'interior', // Specify the tab identifier
  },
  {
    src: '/Services/Exterior.jpg',
    title: 'Exterior',
    description: 'Get a spotless car exterior with our premium detailing service. Using the 3-bucket method, we thoroughly wash and protect your vehicle, ensuring a clean and glossy finish every time.',
    tab: 'exterior', // Specify the tab identifier
  },
  {
    src: '/Services/Ceramic.jpg',
    title: 'Ceramic Coatings',
    description: 'Enhance and protect your vehicle with our ceramic coating service. This durable layer shields your paint from contaminants and UV rays, ensuring a long-lasting, glossy finish that keeps your car looking new.',
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

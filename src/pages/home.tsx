import React, {useState} from 'react';
import '../styles/home.css'; 
import ImageCard from '../components/ImageCard';
import Reviews from '../components/Reviews';

const images = [
  { dirty: '/SlidingImages/Before/black-int-b.jpeg', clean: '/SlidingImages/After/black-int-a.jpeg' },
  { dirty: '/SlidingImages/Before/Tan-int-b.jpg', clean: '/SlidingImages/After/Tan-int-a.jpg' },
  { dirty: '/SlidingImages/Before/trunk-b.jpeg', clean: '/SlidingImages/After/trunk-a.jpeg' },
  { dirty: '/SlidingImages/Before/take-pride-b.jpg', clean: '/SlidingImages/After/take-pride-a.jpg' },
  { dirty: '/SlidingImages/Before/back-seat-b.jpg', clean: '/SlidingImages/After/back-seat-a.jpg' },
  { dirty: '/SlidingImages/Before/Mustang-b.jpg', clean: '/SlidingImages/After/mustang-a.jpg' },
  { dirty: '/SlidingImages/Before/red-b2.jpg', clean: '/SlidingImages/After/red-a.jpg' },
  { dirty: '/SlidingImages/Before/silver-b.jpg', clean: '/SlidingImages/After/silver-a.jpg' },
  { dirty: '/SlidingImages/Before/tire-b.jpg', clean: '/SlidingImages/After/tire-a.jpg' }
];

// const images2 = [
//   { dirty: '/SlidingImages/Before/black-int-b.jpeg', clean: '/SlidingImages/After/black-int-a.jpeg' },
//   { dirty: '/SlidingImages/Before/Tan-int-b.jpg', clean: '/SlidingImages/After/Tan-int-a.jpg' },
//   { dirty: '/SlidingImages/Before/trunk-b.jpeg', clean: '/SlidingImages/After/trunk-a.jpeg' },
//   { dirty: '/SlidingImages/Before/take-pride-b.jpg', clean: '/SlidingImages/After/take-pride-a.jpg' },
//   { dirty: '/SlidingImages/Before/back-seat-b.jpg', clean: '/SlidingImages/After/back-seat-a.jpg' },
//   { dirty: '/SlidingImages/Before/Tan-int-b.jpg', clean: '/SlidingImages/After/Tan-int-a.jpg' },
//   { dirty: '/SlidingImages/Before/trunk-b.jpeg', clean: '/SlidingImages/After/trunk-a.jpeg' },
//   { dirty: '/SlidingImages/Before/take-pride-b.jpg', clean: '/SlidingImages/After/take-pride-a.jpg' },
//   { dirty: '/SlidingImages/Before/back-seat-b.jpg', clean: '/SlidingImages/After/back-seat-a.jpg' }
// ];


const Home: React.FC = () => {

  const [highlightPosition, setHighlightPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHighlightPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };


  return (
    <div className='home_container'>
      {/* <div className='top_container'>
        <Link to={`/`}>
          <img id="Magic-Mack-logo" src="/MagicMackLogo.png" alt="Mack Logo" className="MagicMackLogo"
                  ></img>
        </Link>
        <img id="Auto-Detail-logo" src="/AutoDetailing1.png" alt="Auto Logo" className="AutoDetail"
                ></img>
      </div> */}
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


      {/* <div className='images-wrapper'>
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
      </div> */}
      
      <img src="/MagicWand2.png" alt="Magic Wand" className="magic-wand" />

      

      {/* <p className='beauty_of_vehicle'>Rediscover the Beauty of Your Vehicle</p> */}
      <div className='big_pretty_container'>
        
        <div className='big_pretty_wrapper'
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
          <img id="Big_Pretty" src="/BigPrettyImage2.jpg" alt="Big Pretty" className="big_pretty" />

          <img id="Gold_squiggle_top" src="/Gold Squig9.png" alt="Gold squig" 
        className="gold_squig gold_squig_top"></img>

          {isHovered && (
              <div
                className="highlight"
                style={{ top: highlightPosition.y, left: highlightPosition.x }}
              />
            )}


          {/* <div className="overlay_pretty">
            {isHovered && (
              <div
                className="highlight"
                style={{ top: highlightPosition.y, left: highlightPosition.x }}
              />
            )}
          </div> */}

          <div className="text_big_image">
            <h1>Rediscover the beauty of your vehicle.</h1>
            <h2>HIGH QUALITY DETAILING</h2>
          </div>

          <img id="Gold_squiggle_bottom" src="/Gold Squig9.png" alt="Gold squig" 
        className="gold_squig gold_squig_bottom"></img>
          
        </div>
        
        

        
      </div>

      <ImageCard></ImageCard>

      <div className='reviews-things'>
        <Reviews></Reviews>
      </div>


    </div>
  );
};

export default Home;
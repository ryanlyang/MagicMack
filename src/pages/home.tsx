import React, {useState} from 'react';
import '../styles/home.css'; 
import ImageCard from '../components/ImageCard';
import Reviews from '../components/Reviews';

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

      

      {/* <p className='beauty_of_vehicle'>Rediscover the Beauty of Your Vehicle</p> */}
      <div className='big_pretty_container'>
        
        <div className='big_pretty_wrapper'
         onMouseMove={handleMouseMove}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
          <img id="Big_Pretty" src="/BigPrettyShop.jpg" alt="Big Pretty" className="big_pretty" />

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

      <Reviews></Reviews>

      <div className='bottom_container'>

      <img id="Bottom_left" src="/Bottom goldie.png" alt="Bottom left" 
        className="bottom_left goldie"></img>

      <img id="Bottom_right" src="/Bottom goldie.png" alt="Bottom right" 
        className="bottom_right goldie"></img>
      
      </div>

    </div>
  );
};

export default Home;
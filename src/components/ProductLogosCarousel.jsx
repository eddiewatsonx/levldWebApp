import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const productLogos = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Adobe_Corporate_logo.svg' },
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Amazon_Web_Services_Logo.svg' },
  { name: 'Dropbox', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Dropbox_logo_2017.svg' },
  { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Azure.svg' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_Cloud_logo.svg' }
];

const ProductLogosCarousel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}
        showIndicators={false}
        centerMode
        centerSlidePercentage={20}
        swipeable
        emulateTouch
        dynamicHeight={false}
        transitionTime={500}
      >
        {productLogos.map((product) => (
          <div key={product.name} className="flex justify-center items-center">
            <img
              src={product.logo}
              alt={product.name}
              className="h-24 object-contain mx-4"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Logo+Not+Found'; }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductLogosCarousel;

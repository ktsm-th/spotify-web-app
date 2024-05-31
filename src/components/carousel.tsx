'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ albums }) {
  const settings = {
    dots: false,           // Hide dots
    infinite: true,        // Enable infinite looping
    speed: 3000,            // Slide transition speed
    slidesToShow: 4,       // Number of slides to show at once
    slidesToScroll: 1,     // Number of slides to scroll at once
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 3000,   // Autoplay interval (in milliseconds)
    arrows: false,         // Hide navigation arrows for a cleaner look
  };

  return (
    <div>
      <Slider {...settings}>
        {albums.map((album, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="p-2" src={album.images[0].url} alt={album.name} style={{ maxWidth: '100%', height: 'auto' }} />
            <p className="px-2 truncate text-sm">{album.name}</p>
            <p className="px-2 text-sm">{album.release_date.substr(0,4)} | {album.album_type}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

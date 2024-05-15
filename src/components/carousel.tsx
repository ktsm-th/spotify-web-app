'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ logos }) {
  const settings = {
    dots: false,           // Hide dots
    infinite: true,        // Enable infinite looping
    speed: 2500,            // Slide transition speed
    slidesToShow: 4,       // Number of slides to show at once
    slidesToScroll: 2,     // Number of slides to scroll at once
    autoplay: false,        // Enable autoplay
    autoplaySpeed: 1000,   // Autoplay interval (in milliseconds)
    arrows: true,         // Hide navigation arrows for a cleaner look
  };

  return (
    <div style={{ padding: '20px 0' }}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
            <img className="p-2" src={logo} alt={`client-logo-${index}`} style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

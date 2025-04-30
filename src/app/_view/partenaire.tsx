'use client';

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Partenaire() {
  const partners = [
    { name: 'Afia', path: '/assets/afia.png' },
    { name: 'Paris Saclay', path: '/assets/paris_saclay.png' },
    { name: 'Afia', path: '/assets/afia.png' },
    { name: 'Paris Saclay', path: '/assets/paris_saclay.png' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Nos Partenaires
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ils nous font confiance pour leurs projets
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10" />
          
          <div className="px-8">
            <Slider {...settings}>
              {partners.map((partner, index) => (
                <div key={index} className="px-4 py-2">
                  <div className="bg-white rounded-lg p-6 h-32 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={partner.path}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}
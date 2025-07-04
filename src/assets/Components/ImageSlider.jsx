// ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageSlider.css"; // Optional: for custom styles

const slides = [
  { src: "/images/home-1.jpg", alt: "Slide 1", caption: "Welcome to Our Site" },
  { src: "/images/home-2.jpg", alt: "Slide 2", caption: "Explore Our Services" },
  { src: "/images/home-3.jpg", alt: "Slide 3", caption: "Contact Us Today" },
];

export default function ImageSlider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="main-swiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-content">
              <img src={slide.src} alt={slide.alt} className="slide-image" />
              <div className="slide-caption">{slide.caption}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

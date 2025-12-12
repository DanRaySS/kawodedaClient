/* eslint-disable @next/next/no-img-element */
// widgets/Gallery/ui/Gallery.tsx
"use client";

import { useState, useEffect } from "react";
import cls from "./Gallery.module.scss";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

interface GalleryProps {
  className?: string;
}

// Массив картинок для примера
const images: GalleryImage[] = [
  { id: 1, src: "/test.png", alt: "Product image 1" },
  { id: 2, src: "/test2.png", alt: "Product image 2" },
  { id: 3, src: "/test3.png", alt: "Product image 3" },
];

export const Gallery = ({ className }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Swipe-навигация
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <div className={`${cls.Gallery} ${className || ""}`}>
      {/* Основное изображение */}
      <div 
        className={`${cls.Gallery__img} ${cls.Gallery__img_main}`}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt}
          className={cls.Gallery__mainImage}
          loading="lazy"
        />
        
        {/* Кнопки навигации */}
        <button 
          className={`${cls.Gallery__navButton} ${cls.Gallery__navButton_prev}`} 
          onClick={handlePrev}
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <button 
          className={`${cls.Gallery__navButton} ${cls.Gallery__navButton_next}`} 
          onClick={handleNext}
          aria-label="Next image"
        >
          ›
        </button>

        {/* Индикаторы слайдов */}
        <div className={cls.Gallery__indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              className={`${cls.Gallery__indicator} ${index === currentIndex ? cls.Gallery__indicator_active : ''}`}
              onClick={() => handleThumbnailClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Миниатюры */}
      <div className={cls.Gallery__thumbnails}>
        {images.map((image, index) => (
          <button
            key={image.id}
            className={`${cls.Gallery__thumbnail} ${index === currentIndex ? cls.Gallery__thumbnail_active : ''}`}
            onClick={() => handleThumbnailClick(index)}
            aria-label={`View image ${index + 1}`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className={cls.Gallery__thumbnailImage}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
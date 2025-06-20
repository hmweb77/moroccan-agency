"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Placeholder images - replace with your actual image paths
  const backgroundImages = [
    '/photo_2025-06-19_17-51-52.jpg',
    '/photo_2025-06-19_17-51-55.jpg', 
    '/photo_2025-06-19_17-51-58.jpg',
    '/photo_2025-06-19_17-52-01.jpg'
  ];

  // Auto-carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#002144] via-purple-900 to-[#002144] overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 1 : 0 
            }}
            transition={{ duration: 1 }}
          >
            <img
              src={image}
              alt={`Hero background ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay to maintain text readability */}

          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-start">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-6xl font-bold text-white mb-6"
            >
              LANCEZ VOUS<br />
              EN PROFITANT
              DE NOS
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative bg-white inline-block mb-8"
            >
              <span className="text-4xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-[#48A9FE] to-[#002144] bg-clip-text text-transparent">
              PACKS EXCLUSIFS
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <button className="group bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#48A9FE] hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span>J'EN PROFITE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-[#48A9FE] to-purple-600 rounded-lg opacity-20"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-[#48A9FE] rounded-full opacity-20"
      />
    </div>
  );
};

export default HeroSection;
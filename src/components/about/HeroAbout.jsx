"use client"
import React from 'react';
import { motion } from 'framer-motion';

const HeroAbout = () => {
  return (
    <div className="relative min-h-[50vh]  sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] 2xl:min-h-[75vh] overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/stacked-waves-haikei.svg')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mt-12 z-10 flex items-center justify-center min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] lg:min-h-[65vh] xl:min-h-[70vh] 2xl:min-h-[75vh]">
        <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-10"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-tight px-2 sm:px-0"
            >
              À propos de nous
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-2 sm:px-4"
            >
              Nous voulons comprendre vos objectifs et vos envies pour vous proposer les solutions qui vous apporteront croissance et sérénité.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col items-center pt-4 xs:pt-5 sm:pt-6 md:pt-7 lg:pt-8 xl:pt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full xs:w-auto bg-white text-blue-700 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-2 xs:py-3 sm:py-4 md:py-5 lg:py-6 rounded-full font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg"
              >
                Découvrir nos services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements - Hidden on very small screens, adaptive sizing */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 3, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="hidden xs:block absolute top-1/4 left-2 xs:left-4 sm:left-6 md:left-8 lg:left-10 xl:left-12 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-white/10 rounded-lg opacity-30"
      />
      
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="hidden xs:block absolute bottom-1/4 right-2 xs:right-4 sm:right-6 md:right-8 lg:right-10 xl:right-12 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white/10 rounded-full opacity-30"
      />

      <motion.div
        animate={{ 
          y: [0, -8, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="hidden sm:block absolute top-1/2 right-1/4 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-white/10 rounded-full opacity-20"
      />

      {/* Additional floating elements for larger screens */}
      <motion.div
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="hidden md:block absolute top-3/4 left-1/3 w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-white/8 rounded-lg opacity-25"
      />

      <motion.div
        animate={{ 
          y: [0, -6, 0],
          x: [0, -3, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="hidden lg:block absolute top-1/3 left-3/4 w-5 h-5 xl:w-7 xl:h-7 bg-white/12 rounded-full opacity-20"
      />
    </div>
  );
};

export default HeroAbout;
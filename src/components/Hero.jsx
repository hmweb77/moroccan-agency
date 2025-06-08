"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#002144] via-purple-900 to-[#002144] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/heroWebsite.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl  px-4 sm:px-6 lg:px-8 py-20">
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

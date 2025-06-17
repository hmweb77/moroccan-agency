"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CTAComponent = () => {
  return (
    <div className="py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] shadow-2xl"
          style={{ backgroundColor: '#48A9FE' }}
        >
          {/* Background Pattern/Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20"></div>
          <div className="absolute top-0 right-0 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-center sm:text-left"
            >
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight sm:leading-snug md:leading-tight lg:leading-tight">
                BESOIN D'UN COUP DE POUCE POUR VOTRE BUSINESS?
              </h2>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex-shrink-0"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-800 font-bold px-6 xs:px-8 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-7 xl:py-8 rounded-full text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl min-w-[80px] xs:min-w-[100px] sm:min-w-[120px] md:min-w-[140px] lg:min-w-[160px]"
              >
                OUI
              </motion.button>
            </motion.div>
          </div>

          {/* Floating Animation Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 3, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="hidden md:block absolute top-1/4 left-8 w-3 h-3 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-white/20 rounded-full"
          />
          
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              x: [0, 5, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="hidden lg:block absolute bottom-1/3 right-12 w-2 h-2 xl:w-3 xl:h-3 bg-white/15 rounded-full"
          />

          <motion.div
            animate={{ 
              y: [0, -6, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="hidden xl:block absolute top-2/3 left-1/4 w-2 h-2 2xl:w-3 2xl:h-3 bg-white/10 rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CTAComponent;
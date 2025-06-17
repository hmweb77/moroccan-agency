"use client"
import React from 'react';
import { motion } from 'framer-motion';

const NumbersComponent = () => {
  const stats = [
    {
      number: "15",
      label: "Partenaires Créatifs",
      color: "text-blue-600"
    },
    {
      number: "80",
      label: "Plus de 80 clients",
      color: "text-blue-600"
    },
    {
      number: "89",
      label: "Litres de cafés consommés",
      color: "text-blue-600"
    },
    {
      number: "1278",
      label: "Fous rires",
      color: "text-blue-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <div className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full  bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url('/mapAG.png')`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24"
        >
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 leading-tight max-w-5xl mx-auto px-2 sm:px-4">
            PLUS DE 80+ CLIENTS NOUS FONT CONFIANCE. REJOIGNEZ-LES MAINTENANT ET DÉVELOPPEZ VOTRE ENTREPRISE.
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-12 2xl:gap-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="text-center group cursor-pointer"
            >
              {/* Number */}
              <motion.div
                variants={numberVariants}
                className="mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-4 xl:mb-6"
              >
                <span className={`text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300 block`}>
                  {stat.number}
                </span>
              </motion.div>

              {/* Label */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 font-medium leading-relaxed px-2 sm:px-0 group-hover:text-gray-800 transition-colors duration-300"
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </div>
  );
};

export default NumbersComponent;
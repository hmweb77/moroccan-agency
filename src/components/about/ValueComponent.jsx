"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ValueComponent = () => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-12 2xl:gap-16"
        >
          {/* Mission Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            {/* Purple Header Line */}
            <div className="h-1 xs:h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            
            <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-6 xl:p-8 2xl:p-10">
              {/* Mission Image */}
              <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-6 xl:mb-8 flex justify-center">
                <div className="w-32 h-24 xs:w-36 xs:h-28 sm:w-44 sm:h-32 md:w-52 md:h-36 lg:w-40 lg:h-30 xl:w-48 xl:h-36 2xl:w-56 2xl:h-40 rounded-lg xs:rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/mission.png"
                    alt="Notre Mission"
                    width={424}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-4 xl:mb-5 2xl:mb-6"
              >
                NOTRE MISSION
              </motion.h3>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed"
              >
                Améliorer la communication de votre entreprise et générer des ventes pour accroître votre chiffre d'affaires et vous garantir un retour sur investissement de vos dépenses marketing et publicité. À l'écoute, nous nous adaptons à vos besoins, vos objectifs et votre organisation afin de vous proposer un accompagnement sur-mesure.
              </motion.p>
            </div>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
          >
            {/* Purple Header Line */}
            <div className="h-1 xs:h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            
            <div className="p-4 xs:p-5 sm:p-6 md:p-7 lg:p-6 xl:p-8 2xl:p-10">
              {/* Values Image */}
              <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-6 xl:mb-8 flex justify-center">
                <div className="w-32 h-24 xs:w-36 xs:h-28 sm:w-44 sm:h-32 md:w-52 md:h-36 lg:w-40 lg:h-30 xl:w-48 xl:h-36 2xl:w-56 2xl:h-40 rounded-lg xs:rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/valeurs.png"
                    alt="Nos Valeurs"
                    width={224}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-4 xl:mb-5 2xl:mb-6"
              >
                NOS VALEURS
              </motion.h3>

              {/* Content */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed"
              >
                Éthique, transparence, pédagogie, rigueur, créativité...Voici quelques-unes des valeurs clés de notre agence. Ajoutez de la convivialité, de la compassion, de la considération et de la compréhension à la liste, et vous avez ce groupe d'individus qui travaillent dur pour vous satisfaire et répondre à vos besoins.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Animation Elements */}
        <motion.div
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden md:block absolute top-1/4 left-4 w-6 h-6 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-blue-200 rounded-lg opacity-20"
        />
        
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            x: [0, 3, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="hidden lg:block absolute bottom-1/4 right-8 w-5 h-5 xl:w-7 xl:h-7 bg-pink-200 rounded-full opacity-25"
        />

        <motion.div
          animate={{ 
            y: [0, -6, 0],
            rotate: [0, -1, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="hidden xl:block absolute top-2/3 left-1/3 w-4 h-4 2xl:w-6 2xl:h-6 bg-blue-300 rounded-full opacity-15"
        />
      </div>
    </div>
  );
};

export default ValueComponent;
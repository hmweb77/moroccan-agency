"use client"
import React from 'react';
import { motion } from 'framer-motion';

const OurExpertise = () => {
  // Placeholder images for the grid
  const imageGrid = [
    {
      id: 1,
      alt: "Team collaboration",
      gradient: "from-blue-400 to-blue-500"
    },
    {
      id: 2,
      alt: "Creative workspace",
      gradient: "from-orange-400 to-yellow-500"
    },
    {
      id: 3,
      alt: "Office environment",
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: 4,
      alt: "Business presentation",
      gradient: "from-blue-400 to-pink-500"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg md:text-xl font-semibold text-blue-600 mb-4 tracking-wider uppercase">
                NOTRE EXPERTISE
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002144] leading-tight">
                ENTREPRISE QUI CROIT AU POUVOIR DE LA STRATÉGIE CRÉATIVE.
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-lg leading-relaxed">
                De la publicité DOOH, au digital en passant par le marketing d'influence, 
                Medialaoui met tout son savoir-faire dans des campagnes multicanales. À l'aide de 
                nos solutions clé-en-main et d'une équipe dédiée à vos problématiques, nous 
                saurons développer votre business et faire grimper vos ventes. Notre agence 
                dispose de 5 pôles d'expertise pour vous assurer un accompagnement global.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#48A9FE] to-[#002144]  hover:from-[#002144] hover:to-[#48A9FE] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Découvrir nos services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {imageGrid.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`
                  relative h-48 lg:h-56 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer
                  ${index === 1 ? 'mt-8' : ''}
                  ${index === 2 ? '-mt-8' : ''}
                `}
              >
                {/* Placeholder with gradient background */}
                <div className={`w-full h-full bg-gradient-to-br ${image.gradient} relative`}>
                  {/* Overlay for better contrast */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 mx-auto mb-2 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-xl">📸</span>
                      </div>
                      <p className="text-sm font-medium opacity-80">{image.alt}</p>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}

              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">5</div>
            <p className="text-gray-600 font-medium">Pôles d'expertise</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">360°</div>
            <p className="text-gray-600 font-medium">Accompagnement global</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">100%</div>
            <p className="text-gray-600 font-medium">Solutions clé-en-main</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurExpertise;
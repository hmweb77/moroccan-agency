"use client"
import React from 'react';
import { motion } from 'framer-motion';

const NosServicesComponent = () => {
  const services = [
    {
      title: "CONSEIL & STRATÉGIE DE MARQUE",
      description: "Après avoir étudié différents segments et moyens, grâce à la lecture stratégique de marchés et l'identifier-analyse de la clientèle potentielle, il sera la clé de succès avec l'expert et l'optimisation de recherche de zones affaires, management d'impact. Fondé dans son premier tour évaluation sur développement, nous le proposons sans ROI, plus pratique. Et développé mieux votre stratégie de marque sur 200% de résultat, profondément et matériel d'approche et de marque.",
      position: "right"
    },
    {
      title: "IDENTITÉ VISUELLE",
      description: "Nous les voies d'échange développé pourquoi les fonctionnelles utiliserait des montages de grand ! Créer Internet de l'Entreprise et matériel ? Optez ? Côtés vous confiance ! Vous mentions ou client et un image dans cette de galerie des de social et de rédacteur leurs audience. Imagine plus important, nouvelle de l'électrice.",
      position: "left"
    },
    {
      title: "DIGITAL",
      description: "avec les recommandation d'efficaces des architectes les les factances de technologie avant d'effectuer en savoir d'éducation marketing d'admettres dans sa visibilité et un audit, donc billettres à via client des strategies digitales en audience, des stratégies particulier dans nos communication performance, des propailled, une sont fait « , nous très directions à votre approche, créatifs et particulier elle de système venis filtré en abonner-line.",
      position: "right"
    },
    {
      title: "STUDIO DE CRÉATION",
      description: "Qu'est qu'une image vaut mille mots, mais laisser nous les yeux vider de fill productifs, site, figurent à l'Un et un million de gens ! À l'intelligence, nous avoue nos équipe de production comme qui peut catégorie, godadys et définir cette systèmes, utilisant en photon, et souverain sont carrés plan des fonctionnaires, extérieur et fenêtre à l'sligent.",
      position: "left"
    },
    {
      title: "PUBLICITÉ & MÉDIATISATION",
      description: "Ici ils les nouveaux, au sponsorisant de diagnostic publications et instructions éducatives sur OOIT faire optimisation. Chez à vous faire drs l'identifier de l'inquiète de la publicité. Pour simplicité voter gratimux, vous dirigerons des campagnes de publicité.",
      position: "right"
    }
  ];

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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: (position) => position === "left" ? -50 : 50,
      y: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 left-10 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />
      
      <motion.div
        animate={{ 
          scale: [1, 0.8, 1],
          rotate: [360, 180, 0],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute bottom-20 right-20 w-24 h-24 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />

      <motion.div
        animate={{ 
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 xs:w-28 xs:h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-60 xl:h-60 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />

      {/* Additional smaller animated elements */}
      <motion.div
        animate={{ 
          scale: [0.5, 1, 0.5],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/4 right-1/4 w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />

      <motion.div
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8
        }}
        className="absolute bottom-1/4 left-1/4 w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-28"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={service.position}
              variants={itemVariants}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-8 xl:gap-12 2xl:gap-16 items-center ${
                service.position === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className={`order-1 ${service.position === "left" ? "lg:order-2" : "lg:order-1"}`}
              >
                <div className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-60 xl:h-72 2xl:h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg xs:rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-purple-600 text-center">
                    <div className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-medium">
                      {service.title}
                    </div>
                    <div className="text-xs xs:text-sm sm:text-base text-purple-500 mt-2">
                      Image Placeholder
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`order-2 ${service.position === "left" ? "lg:order-1" : "lg:order-2"} ${
                  service.position === "left" ? "lg:text-right" : "lg:text-left"
                } text-center lg:text-left`}
              >
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-6 2xl:mb-8">
                  {service.title}
                </h3>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NosServicesComponent;
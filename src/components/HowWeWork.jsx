"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Image from 'next/image';

const HowWeWork = () => {
  const steps = [
    {
      number: "01.",
      title: "ANALYSE EXPRESS",
      description: "Remplissez le simulateur de devis en quelques secondes.",
      image:"/process1.png",
      imageAlt: "Person using laptop simulation"
    },
    {
      number: "02.",
      title: "DÉMARRAGE PERSONNALISÉ",
      description: "Un chef de projet vous contacte sous 8h pour valider les objectifs et vous guider vers la meilleure approche.",
      image:"/process2.png",
      imageAlt: "Smiling person with glasses"
    },
    {
      number: "03.",
      title: "STRATÉGIE SUR-MESURE",
      description: "Nous analysons votre besoin en profondeur et concevons une stratégie digitale sur-mesure, centrée sur la performance et vos objectifs business.",
      image:"/process3.png",
      imageAlt: "Person working on laptop"
    },
    {
      number: "04.",
      title: "LANCEMENT & CROISSANCE",
      description: "Votre projet est lancé en moins de 7 jours, avec un suivi continu, des optimisations et des résultats concrets dès les premières semaines.",
      image:"/process5.png",
      imageAlt: "Delivery completion"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002144] mb-6">
            COMMENT ÇA MARCHE ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recevoir une réponse immédiate en suivant les 3 étapes ci-dessous
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-[400px] lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <span className="text-6xl md:text-7xl font-bold text-[#48A9FE] block mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#48A9FE] mb-6">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>

                {/* Show CTA button only on the last step */}
                {index === steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="pt-8"
                  >
                    <button className="bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#002144] hover:to-[#48A9FE] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      Lancez-vous
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowWeWork;
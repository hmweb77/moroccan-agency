"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const HowWeWork = () => {
  const steps = [
    {
      number: "01.",
      title: "SIMULATION",
      description: "Remplissez le simulateur de devis en quelques secondes.",
      imageAlt: "Person using laptop simulation"
    },
    {
      number: "02.",
      title: "CONTACT",
      description: "Un chef de projet prendra contact avec vous dans les 8 heures qui suivent.",
      imageAlt: "Smiling person with glasses"
    },
    {
      number: "03.",
      title: "COMMANDE",
      description: "Saisissez votre brief et transférez nous vos pièces justificatives.",
      imageAlt: "Person working on laptop"
    },
    {
      number: "04.",
      title: "LIVRAISON",
      description: "Vous recevez votre commande dans moins de 7 jours.",
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
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/30 rounded-full flex items-center justify-center">
                        <span className="text-2xl font-bold">{step.number}</span>
                      </div>
                      <p className="text-sm">{step.imageAlt}</p>
                    </div>
                  </div>
                  
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/10"></div>
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
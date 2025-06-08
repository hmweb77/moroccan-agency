"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Gauge, 
  Clock, 
  TrendingUp, 
  Shuffle
} from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Gauge className="w-16 h-16" />,
      title: "RAPIDITÉ",
      description: "Des solutions rapides et efficaces pour vos projets digitaux"
    },
    {
      icon: <Clock className="w-16 h-16" />,
      title: "RÉPONSE EN TEMPS RÉEL",
      description: "Communication instantanée et suivi en continu"
    },
    {
      icon: <TrendingUp className="w-16 h-16" />,
      title: "EFFICACITÉ",
      description: "Résultats mesurables et performance optimisée"
    },
    {
      icon: <Shuffle className="w-16 h-16" />,
      title: "FLEXIBILITÉ",
      description: "Solutions adaptées à vos besoins spécifiques"
    }
  ];

  return (
    <div className="py-20 overflow-hidden">
      {/* Mobile Layout - Stacked Vertical */}
      <div className="block lg:hidden">
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 py-12 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Pourquoi<br />
                NextDigits?
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Mobile Features - Vertical Stack */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group cursor-pointer"
              >
                <div className="text-[#48A9FE] mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#002144] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal Design */}
      <div className="flex">
        {/* Purple Section - Reduced Height */}
        <div className="bg-[#48A9FE] py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Pourquoi<br />
                NextDigits?
              </h2>
            </motion.div>
          </div>
        </div>

        {/* White Section with 4 Features in a Row */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  className="text-center group cursor-pointer"
                >
                  <div className="text-[#48A9FE] mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-[#002144] mb-2 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
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
      icon: <Gauge className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: "RAPIDITÉ",
      description: "Des solutions rapides et efficaces pour vos projets digitaux"
    },
    {
      icon: <Clock className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: "RÉPONSE EN TEMPS RÉEL",
      description: "Communication instantanée et suivi en continu"
    },
    {
      icon: <TrendingUp className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: "EFFICACITÉ",
      description: "Résultats mesurables et performance optimisée"
    },
    {
      icon: <Shuffle className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: "FLEXIBILITÉ",
      description: "Solutions adaptées à vos besoins spécifiques"
    }
  ];

  // Animation variants for better organization
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  // Mobile Feature Component
  const MobileFeature = ({ feature, index }) => (
    <motion.div
      variants={itemVariants}
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
  );

  // Desktop Feature Component
  const DesktopFeature = ({ feature, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
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
  );

  // Section Title Component
  const SectionTitle = ({ isMobile = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${isMobile ? 'text-center text-white' : 'text-white'}`}
    >
      <h2 className={`font-bold leading-tight ${
        isMobile 
          ? 'text-4xl md:text-5xl' 
          : 'text-4xl md:text-5xl lg:text-6xl'
      }`}>
        Pourquoi<br />
        NextDigits?
      </h2>
    </motion.div>
  );

  return (
    <div className="py-20 overflow-hidden">
      {/* Mobile Layout - Stacked Vertical */}
      <div className="block lg:hidden">
        {/* Mobile Header */}
        <div className="bg-[#48A9FE] py-12 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle isMobile={true} />
          </div>
        </div>

        {/* Mobile Features */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="space-y-16"
            >
              {features.map((feature, index) => (
                <MobileFeature key={index} feature={feature} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal Design */}
      <div className="hidden lg:flex min-h-[500px]">
        {/* Left Section - Title */}
        <div className="bg-[#48A9FE] flex-1 flex items-center justify-center py-12">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle />
            </motion.div>
          </div>
        </div>

        {/* Right Section - Features */}
        <div className="bg-white flex-1 flex items-center justify-center py-12">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={containerVariants}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-8 xl:gap-12"
            >
              {features.map((feature, index) => (
                <DesktopFeature key={index} feature={feature} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
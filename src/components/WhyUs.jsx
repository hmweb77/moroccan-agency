"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Clock, TrendingUp, Shuffle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { Card } from '@/selector/ui';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language].whyUs;

  const features = [
    {
      icon: <Gauge className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: t.speed.title,
      description: t.speed.description
    },
    {
      icon: <Clock className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: t.realtime.title,
      description: t.realtime.description
    },
    {
      icon: <TrendingUp className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: t.efficiency.title,
      description: t.efficiency.description
    },
    {
      icon: <Shuffle className="w-16 h-16 lg:w-12 lg:h-12" />,
      title: t.flexibility.title,
      description: t.flexibility.description
    }
  ];

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

  const SectionTitle = ({ isMobile = false }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${isMobile ? 'text-center text-white' : 'text-white'}`}
    >
      <h2 className={`font-bold leading-tight whitespace-pre-line ${
        isMobile 
          ? 'text-4xl md:text-5xl' 
          : 'text-4xl md:text-5xl lg:text-6xl'
      }`}>
        {t.title}
      </h2>
    </motion.div>
  );

  return (
    <div className="py-20 overflow-hidden">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="bg-[#48A9FE] py-12 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle isMobile={true} />
          </div>
        </div>

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

      {/* Desktop Layout */}
      <div className="hidden lg:flex min-h-[500px]">
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
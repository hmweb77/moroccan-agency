"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Monitor, 
  Clock, 
  Video, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { Button, Section, SectionTitle } from '@/selector/ui';

const Expertise = () => {
  const { language } = useLanguage();
  const t = translations[language].expertise;

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      link: t.readMore
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: t.services.identity.title,
      description: t.services.identity.description,
      link: t.readMore
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: t.services.digital.title,
      description: t.services.digital.description,
      link: t.readMore
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: t.services.studio.title,
      description: t.services.studio.description,
      link: t.readMore
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t.services.advertising.title,
      description: t.services.advertising.description,
      link: t.readMore
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-100 to-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t.subtitle}
          subtitle={t.title}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center space-y-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#48A9FE] to-[#002144] rounded-full flex items-center justify-center mx-auto group-hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-white">
                    {service.icon}
                  </div>
                </motion.div>

                <h4 className="text-xl md:text-2xl font-bold text-[#002144] leading-tight">
                  {service.title}
                </h4>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-[#48A9FE] font-semibold hover:text-[#48A9FE] transition-colors group"
                >
                  <span>{service.link}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-bold text-[#002144]">
              {t.ctaTitle}
            </h4>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t.ctaDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/devis">
              <Button variant="gradient" size="lg">
                {t.ctaStart}
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                {t.ctaLearn}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Expertise;
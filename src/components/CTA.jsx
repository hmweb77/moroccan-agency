"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { Button } from '@/selector/ui';

const AboutCTA = () => {
  const { language } = useLanguage();
  const t = translations[language].cta;

  return (
    <div className="relative">
      {/* Purple CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#48A9FE] py-16 lg:py-20"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-[#002144] text-base md:text-xl font-medium mb-4 tracking-wider uppercase">
              {t.packs.subtitle}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
              {t.packs.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
              <Button variant="secondary" size="lg">
                {t.packs.button}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* White About Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-16 lg:py-20 relative"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002144] mb-6">
              {t.ready.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.ready.description}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">80+</div>
                <p className="text-gray-600 font-medium">{t.ready.stats.clients}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">100%</div>
                <p className="text-gray-600 font-medium">{t.ready.stats.satisfaction}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">24/7</div>
                <p className="text-gray-600 font-medium">{t.ready.stats.support}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/devis">
              <Button variant="gradient" size="lg">
                {t.ready.button}
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutCTA;
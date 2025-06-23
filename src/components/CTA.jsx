"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Link from 'next/link';

const AboutCTA = () => {
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
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-[#002144] text-base md:text-xl font-medium mb-4 tracking-wider uppercase">
              NOS PACKS SUR MESURE
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight max-w-4xl mx-auto">
              CHOISISSEZ LA SOLUTION DIGITALE LA MIEUX ADAPTÉE À VOTRE PROJET ET À VOTRE BUDGET
            </h2>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#002144] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              À propos de nous
            </motion.button>
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
          {/* Question Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002144] mb-6">
              EST-CE QUE VOUS ÊTES PRÊTS ?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Plus de 80 clients nous font confiance. Rejoignez-les en utilisant nos services et développez votre entreprise.
            </p>
          </motion.div>

          {/* Stats or Trust Elements */}
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
                <p className="text-gray-600 font-medium">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">100%</div>
                <p className="text-gray-600 font-medium">Satisfaction garantie</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-2">24/7</div>
                <p className="text-gray-600 font-medium">Support disponible</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/devis">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Rejoignez-nous
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
   
  );
};

export default AboutCTA;
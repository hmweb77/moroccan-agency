"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Monitor, 
  Clock, 
  Video, 
  TrendingUp,
  ArrowRight,
  ArrowUp
} from 'lucide-react';
import Link from 'next/link';

const Expertise = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Conseil & Stratégie de marque",
      description: "Apple gagne 9316 dollars chaque seconde, grâce à sa bonne stratégie de marque et la notoriété qu'elle a pu acquérir sur le marché...",
      link: "Lire plus"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Identité visuelle",
      description: "Vous ne vous êtes jamais demandé pourquoi les restaurants utilisaient par exemple le jaune?",
      link: "Lire plus"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Digital",
      description: "89% des consommateurs effectuent des recherches sur les moteurs de recherche avant d'effectuer un achat.",
      link: "Lire plus"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Studio de création",
      description: "On dit qu'une image vaut mille mots, mais saviez-vous qu'une vidéo de 60 secondes.",
      link: "Lire plus"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Publicité & Médiatisation",
      description: "60 % des exposés se souviennent du dispositif publicitaire d'opérations spéciales.",
      link: "Lire plus"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-blue-100 to-white relative overflow-hidden">
     

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-lg md:text-xl font-semibold text-[#48A9FE] mb-4 tracking-wider uppercase">
            NOTRE EXPERTISE
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002144] leading-tight max-w-4xl mx-auto">
          NEXTDIGITS MET TOUT SON SAVOIR-FAIRE DANS DES 
            CAMPAGNES MULTICANALES.
          </h3>
        </motion.div>

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
              {/* Service Card */}
              <div className="text-center space-y-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#48A9FE] to-[#002144] rounded-full flex items-center justify-center mx-auto group-hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-white">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-[#002144] leading-tight">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                {/* Read More Link */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-[#48A9FE] font-semibold hover:text-[#48A9FE]  transition-colors group"
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
              Prêt à développer votre business ?
            </h4>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Découvrez comment nos solutions peuvent transformer votre présence digitale et booster vos performances.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/devis">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#002144] hover:to-[#48A9FE] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Commencer maintenant
            </motion.button>
            </Link>
            <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#002144] text-[#002144] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#002144] hover:text-white transition-all duration-300"
            >
              En savoir plus
            </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>

  );
};

export default Expertise;
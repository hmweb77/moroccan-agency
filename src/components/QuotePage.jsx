"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  ArrowRight,
  Quote
} from 'lucide-react';

const QuoteSimulatorPage = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    service: '',
    businessSize: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset after 3 seconds for demo
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        service: '',
        businessSize: ''
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Réponse Rapide",
      description: "Devis personnalisé sous 24h"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sans Engagement",
      description: "Consultation gratuite et transparente"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expertise Confirmée",
      description: "Plus de 80 clients satisfaits"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
          opacity: [0.05, 0.15, 0.05]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-64 h-64 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />
      
      <motion.div
        animate={{ 
          scale: [1, 0.7, 1],
          rotate: [360, 180, 0],
          opacity: [0.03, 0.1, 0.03]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute bottom-32 right-32 w-48 h-48 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />

      <motion.div
        animate={{ 
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ 
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{ backgroundColor: '#48A9FE' }}
      />

      <div className="relative z-10 py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-7xl mt-12 mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          
          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16 lg:mb-20"
          >
           

            <motion.h1
              variants={itemVariants}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 xs:mb-6 sm:mb-8"
            >
              <span className="text-white">SIMULATEUR DEVIS</span>
            </motion.h1>
            
            <motion.h2
              variants={itemVariants}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#002144] mb-4 xs:mb-6 sm:mb-8"
            >
              DEMANDEZ UN DEVIS
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4"
            >
              Obtenez un devis personnalisé pour votre projet en quelques clics. 
              Notre équipe d'experts analysera vos besoins et vous proposera une solution sur-mesure 
              adaptée à votre budget et vos objectifs.
            </motion.p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-10 sm:mb-12 md:mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-[#48A9FE] mb-3 xs:mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-gray-800 mb-2 xs:mb-3">
                  {feature.title}
                </h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 relative overflow-hidden"
          >
            {/* Form Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-blue-100 rounded-full opacity-50 transform -translate-x-12 translate-y-12"></div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="max-w-6xl mx-auto"
                  >
                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8"
                    >
                      <motion.input
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02, borderColor: '#48A9FE' }}
                        type="text"
                        name="prenom"
                        placeholder="Prénom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-[#48A9FE] focus:border-[#48A9FE] outline-none transition-all text-sm xs:text-base"
                        required
                      />
                      
                      <motion.input
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02, borderColor: '#48A9FE' }}
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-[#48A9FE] focus:border-[#48A9FE] outline-none transition-all text-sm xs:text-base"
                        required
                      />
                      
                      <motion.input
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02, borderColor: '#48A9FE' }}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-[#48A9FE] focus:border-[#48A9FE] outline-none transition-all text-sm xs:text-base"
                        required
                      />
                    </motion.div>

                    <motion.div
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8 sm:mb-10"
                    >
                      <motion.input
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02, borderColor: '#48A9FE' }}
                        type="tel"
                        name="telephone"
                        placeholder="Téléphone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-[#48A9FE] focus:border-[#48A9FE] outline-none transition-all text-sm xs:text-base"
                        required
                      />
                      
                      <motion.select
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02, borderColor: '#48A9FE' }}
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-[#48A9FE] focus:border-[#48A9FE] outline-none transition-all text-gray-500 text-sm xs:text-base"
                        required
                      >
                        <option value="">-- Quel service vous intéresse le plus? --</option>
                        <option value="conseil-strategie">Conseil & Stratégie de Marque</option>
                        <option value="identite-visuelle">Identité Visuelle</option>
                        <option value="digital">Digital</option>
                        <option value="studio-creation">Studio de Création</option>
                        <option value="publicite-mediatisation">Publicité & Médiatisation</option>
                      </motion.select>
                      
                      <motion.select
                        variants={itemVariants}
                        whileFocus={{ scale: 1.02, borderColor: '#48A9FE' }}
                        name="businessSize"
                        value={formData.businessSize}
                        onChange={handleChange}
                        className="w-full px-3 xs:px-4 py-3 xs:py-4 border-2 border-gray-200 rounded-lg xs:rounded-xl focus:ring-2 focus:ring-[#48A9FE] focus:border-[#48A9FE] outline-none transition-all text-gray-500 text-sm xs:text-base"
                        required
                      >
                        <option value="">-- Quelle est la taille de votre business? --</option>
                        <option value="startup">Startup (1-10 employés)</option>
                        <option value="pme">PME (10-250 employés)</option>
                        <option value="grande-entreprise">Grande entreprise (250+ employés)</option>
                        <option value="freelance">Freelance/Indépendant</option>
                      </motion.select>
                    </motion.div>

                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(72, 169, 254, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="bg-[#48A9FE] text-white px-6 xs:px-8 sm:px-12 md:px-16 py-3 xs:py-4 sm:py-5 md:py-6 rounded-full font-bold text-sm xs:text-base sm:text-lg md:text-xl flex items-center space-x-2 xs:space-x-3 mx-auto shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <span>Envoyer ma demande</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Send className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
                        </motion.div>
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-8 xs:py-12 sm:py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="text-green-500 mb-4 xs:mb-6 flex justify-center"
                    >
                      <CheckCircle className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20" />
                    </motion.div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 xs:mb-4">
                      Demande envoyée avec succès !
                    </h3>
                    <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 xs:mb-6">
                      Nous vous recontacterons dans les 24h pour discuter de votre projet.
                    </p>
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 xs:w-6 xs:h-6 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-8 xs:mt-10 sm:mt-12 md:mt-16"
          >
            <p className="text-xs xs:text-sm sm:text-base text-gray-500 mb-4 xs:mb-6">
              Rejoignez plus de 80 entreprises qui nous font confiance
            </p>
            <div className="flex items-center justify-center space-x-4 xs:space-x-6 sm:space-x-8">
              <div className="flex items-center space-x-1">
                <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#48A9FE]">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 xs:w-4 xs:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="w-px h-6 xs:h-8 bg-gray-300"></div>
              <div className="text-xs xs:text-sm sm:text-base text-gray-600">
                <span className="font-bold">24h</span> de délai de réponse
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuoteSimulatorPage;
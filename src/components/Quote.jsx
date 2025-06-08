"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Gauge, 
  Clock, 
  TrendingUp, 
  Shuffle,
  ArrowRight,
  Send
} from 'lucide-react';


const QuoteSimulator = () => {
    const [formData, setFormData] = useState({
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      service: '',
      businessSize: ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Handle form submission here
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#48A9FE] mb-4">
              SIMULATEUR DEVIS
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-[#002144]">
              DEMANDEZ UN DEVIS
            </h3>
          </motion.div>
  
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="prenom"
                placeholder="Prénom"
                value={formData.prenom}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                required
              />
              
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="nom"
                placeholder="Nom"
                value={formData.nom}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                required
              />
              
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                name="telephone"
                placeholder="Téléphone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                required
              />
              
              <motion.select
                whileFocus={{ scale: 1.02 }}
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all text-gray-500"
                required
              >
                <option value="">-- Quel service vous intéresse le plus? --</option>
                <option value="web-design">Web Design</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="seo">SEO</option>
                <option value="branding">Branding</option>
                <option value="e-commerce">E-commerce</option>
              </motion.select>
              
              <motion.select
                whileFocus={{ scale: 1.02 }}
                name="businessSize"
                value={formData.businessSize}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all text-gray-500"
                required
              >
                <option value="">-- Quelle est la taille de votre business? --</option>
                <option value="startup">Startup</option>
                <option value="pme">PME</option>
                <option value="grande-entreprise">Grande entreprise</option>
                <option value="freelance">Freelance</option>
              </motion.select>
            </div>
  
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-[#48A9FE] text-white px-12 py-4 rounded-full font-bold text-lg flex items-center space-x-2 mx-auto"
              >
                <span>Envoyer</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    );
  };
  export default QuoteSimulator
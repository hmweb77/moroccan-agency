"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
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
            NOUS CONTACTER
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#002144]">
            PARLONS DE VOTRE PROJET
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#48A9FE] p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#002144] mb-2">Email</h4>
                  <p className="text-gray-600">contact@votre-entreprise.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#48A9FE] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#002144] mb-2">Téléphone</h4>
                  <p className="text-gray-600">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#48A9FE] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#002144] mb-2">Adresse</h4>
                  <p className="text-gray-600">123 Rue de la Paix<br />75001 Paris, France</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="prenom"
                  placeholder="Prénom *"
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                />
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="nom"
                  placeholder="Nom *"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                />
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  name="telephone"
                  placeholder="Téléphone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="mb-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="sujet"
                  placeholder="Sujet *"
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>

              <div className="mb-8">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Votre message *"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all resize-vertical"
                  required
                />
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-[#48A9FE] text-white px-12 py-4 rounded-full font-bold text-lg flex items-center space-x-2 mx-auto hover:bg-blue-600 transition-colors"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '@/translations/translations';

const ContactForm = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.form.errorMessage);
      }

      setStatus({ loading: false, success: true, error: null });
      
      setTimeout(() => {
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
          message: ''
        });
        setStatus({ loading: false, success: false, error: null });
      }, 3000);

    } catch (error) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.message || t.form.errorMessage
      });
    }
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
            {t.form.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#002144]">
            {t.form.subtitle}
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
                  <h4 className="text-xl font-bold text-[#002144] mb-2">{t.info.email}</h4>
                  <a href="mailto:contact@nextdigits.ma" className="text-gray-600 hover:text-[#48A9FE] transition-colors">
                    contact@nextdigits.ma
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#48A9FE] p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#002144] mb-2">{t.info.phone}</h4>
                  <a href="tel:+212708140617" className="text-gray-600 hover:text-[#48A9FE] transition-colors">
                    +212 7 08 14 06 17
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#48A9FE] p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#002144] mb-2">{t.info.address}</h4>
                  <p className="text-gray-600">{t.info.location}</p>
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
              {/* Success Message */}
              <AnimatePresence>
                {status.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-green-800 font-semibold">{t.form.successTitle}</p>
                      <p className="text-green-700 text-sm">{t.form.successMessage}</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800">{status.error}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="prenom"
                  placeholder={`${t.form.firstName} *`}
                  value={formData.prenom}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                  disabled={status.loading}
                />
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="nom"
                  placeholder={`${t.form.lastName} *`}
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder={`${t.form.email} *`}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                  disabled={status.loading}
                />
                
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="tel"
                  name="telephone"
                  placeholder={t.form.phone}
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  disabled={status.loading}
                />
              </div>

              <div className="mb-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="sujet"
                  placeholder={`${t.form.subject} *`}
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all"
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="mb-8">
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder={`${t.form.message} *`}
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#48A9FE] focus:border-transparent outline-none transition-all resize-vertical"
                  required
                  disabled={status.loading}
                />
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: status.loading ? 1 : 1.05 }}
                  whileTap={{ scale: status.loading ? 1 : 0.95 }}
                  type="submit"
                  disabled={status.loading}
                  className="bg-[#48A9FE] text-white px-12 py-4 rounded-full font-bold text-lg flex items-center space-x-2 mx-auto hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status.loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t.form.sending}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.form.submit}</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
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
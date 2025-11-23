"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { Input, Select, Button, Section, SectionTitle, Textarea } from '@/selector/ui';

const QuoteSimulator = () => {
  const { language } = useLanguage();
  const t = translations[language].quote;

  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    service: '',
    businessSize: '',
    note: ''
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
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.errorMessage || 'Une erreur est survenue');
      }

      setStatus({ loading: false, success: true, error: null });
      
      setTimeout(() => {
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          service: '',
          businessSize: '',
          note: ''
        });
        setStatus({ loading: false, success: false, error: null });
      }, 4000);

    } catch (error) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: error.message || t.errorMessage || 'Une erreur est survenue. Veuillez réessayer.' 
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const serviceOptions = [
    { value: 'conseil-strategie', label: t.services.consulting },
    { value: 'identite-visuelle', label: t.services.identity },
    { value: 'digital', label: t.services.digital },
    { value: 'studio-creation', label: t.services.studio },
    { value: 'publicite', label: t.services.advertising }
  ];

  const sizeOptions = [
    { value: 'startup', label: t.sizes.startup },
    { value: 'pme', label: t.sizes.sme },
    { value: 'grande-entreprise', label: t.sizes.large },
    { value: 'freelance', label: t.sizes.freelance }
  ];

  return (
    <Section bgColor="bg-gray-50">
      <SectionTitle
        title={t.title}
        subtitle={t.subtitle}
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto"
      >
        {/* Success Message */}
        <AnimatePresence>
          {status.success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-6 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-green-800 font-semibold">{t.successTitle}</p>
                <p className="text-green-700 text-sm">{t.successMessage}</p>
              </div>
            </motion.div>
          )}

          {/* Error Message */}
          {status.error && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8 p-6 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
            >
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
              <p className="text-red-800">{status.error}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Input
            type="text"
            name="prenom"
            placeholder={t.firstName}
            value={formData.prenom}
            onChange={handleChange}
            required
            disabled={status.loading}
          />
          
          <Input
            type="text"
            name="nom"
            placeholder={t.lastName}
            value={formData.nom}
            onChange={handleChange}
            required
            disabled={status.loading}
          />
          
          <Input
            type="email"
            name="email"
            placeholder={t.email}
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status.loading}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Input
            type="tel"
            name="telephone"
            placeholder={t.phone}
            value={formData.telephone}
            onChange={handleChange}
            required
            disabled={status.loading}
          />
          
          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder={t.servicePlaceholder}
            options={serviceOptions}
            required
            disabled={status.loading}
          />
          
          <Select
            name="businessSize"
            value={formData.businessSize}
            onChange={handleChange}
            placeholder={t.sizePlaceholder}
            options={sizeOptions}
            required
            disabled={status.loading}
          />
        </div>

        <div className="mb-8">
          <Textarea
            name="note"
            placeholder={t.note}
            value={formData.note}
            onChange={handleChange}
            rows={5}
            disabled={status.loading}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-2">
            {t.noteHelper}
          </p>
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            loading={status.loading}
            disabled={status.loading}
          >
            <span>{status.loading ? t.sending : t.submit}</span>
            {!status.loading && <Send className="w-5 h-5" />}
          </Button>
        </div>
      </motion.form>
    </Section>
  );
};

export default QuoteSimulator;
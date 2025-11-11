"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { Input, Select, Button, Section, SectionTitle } from '@/selector/ui';

const QuoteSimulator = () => {
  const { language } = useLanguage();
  const t = translations[language].quote;

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
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const serviceOptions = [
    { value: 'conseil-strategie', label: t.services.webDesign },
    { value: 'identite-visuelle', label: t.services.digitalMarketing },
    { value: 'digital', label: t.services.seo },
    { value: 'studio-creation', label: t.services.branding },
    { value: 'publicite', label: t.services.ecommerce }
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
        title={t.subtitle}
        subtitle={t.title}
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Input
            type="text"
            name="prenom"
            placeholder={t.firstName}
            value={formData.prenom}
            onChange={handleChange}
            required
          />
          
          <Input
            type="text"
            name="nom"
            placeholder={t.lastName}
            value={formData.nom}
            onChange={handleChange}
            required
          />
          
          <Input
            type="email"
            name="email"
            placeholder={t.email}
            value={formData.email}
            onChange={handleChange}
            required
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
          />
          
          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
            placeholder={t.service}
            options={serviceOptions}
            required
          />
          
          <Select
            name="businessSize"
            value={formData.businessSize}
            onChange={handleChange}
            placeholder={t.businessSize}
            options={sizeOptions}
            required
          />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
          >
            <span>{t.submit}</span>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </motion.form>
    </Section>
  );
};

export default QuoteSimulator;
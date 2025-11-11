"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { Button, Section, SectionTitle } from '@/selector/ui';

const HowWeWork = () => {
  const { language } = useLanguage();
  const t = translations[language].howWeWork;

  const steps = [
    {
      number: t.steps.step1.number,
      title: t.steps.step1.title,
      description: t.steps.step1.description,
      image: "/process1.png",
      imageAlt: "Person using laptop simulation"
    },
    {
      number: t.steps.step2.number,
      title: t.steps.step2.title,
      description: t.steps.step2.description,
      image: "/process2.png",
      imageAlt: "Smiling person with glasses"
    },
    {
      number: t.steps.step3.number,
      title: t.steps.step3.title,
      description: t.steps.step3.description,
      image: "/process3.png",
      imageAlt: "Person working on laptop"
    },
    {
      number: t.steps.step4.number,
      title: t.steps.step4.title,
      description: t.steps.step4.description,
      image: "/process5.png",
      imageAlt: "Delivery completion"
    }
  ];

  return (
    <Section bgColor="bg-white">
      <SectionTitle
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="space-y-24">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Image Section */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="relative h-[400px] lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-6xl md:text-7xl font-bold text-[#48A9FE] block mb-4">
                  {step.number}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-[#48A9FE] mb-6">
                  {step.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Show CTA button only on the last step */}
              {index === steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="pt-8"
                >
                  <Link href="/devis">
                    <Button variant="gradient" size="lg">
                      {t.cta}
                    </Button>
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default HowWeWork;
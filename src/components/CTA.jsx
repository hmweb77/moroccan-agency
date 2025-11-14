"use client"
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  Award,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/selector/ui';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const logosRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Client logos - replace with actual client logos
  const clientLogos = [
    { name: "Client 1", logo: "🏢" },
    { name: "Client 2", logo: "🎯" },
    { name: "Client 3", logo: "🚀" },
    { name: "Client 4", logo: "💼" },
    { name: "Client 5", logo: "🏆" },
    { name: "Client 6", logo: "⭐" },
    { name: "Client 7", logo: "💎" },
    { name: "Client 8", logo: "🎨" }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: language === 'fr' ? "Réponse sous 8h garantie" : language === 'ar' ? "رد مضمون خلال 8 ساعات" : "8h guaranteed response"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: language === 'fr' ? "Satisfaction garantie à 100%" : language === 'ar' ? "رضا مضمون 100%" : "100% satisfaction guaranteed"
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: language === 'fr' ? "Équipe d'experts certifiés" : language === 'ar' ? "فريق خبراء معتمدين" : "Certified expert team"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: language === 'fr' ? "ROI mesurable et optimisé" : language === 'ar' ? "عائد استثمار قابل للقياس" : "Measurable & optimized ROI"
    }
  ];

  const stats = [
    { 
      value: "80+", 
      label: language === 'fr' ? "Clients satisfaits" : language === 'ar' ? "عميل راضٍ" : "Happy clients",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      value: "150+", 
      label: language === 'fr' ? "Projets réussis" : language === 'ar' ? "مشروع ناجح" : "Successful projects",
      color: "from-purple-500 to-pink-500"
    },
    { 
      value: "98%", 
      label: language === 'fr' ? "Taux de satisfaction" : language === 'ar' ? "معدل الرضا" : "Satisfaction rate",
      color: "from-green-500 to-emerald-500"
    }
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite scroll animation for logos
      if (logosRef.current) {
        const logos = logosRef.current.children;
        gsap.to(logos, {
          x: -1000,
          duration: 20,
          repeat: -1,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % 1000)
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002144] via-[#003366] to-[#002144]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#48A9FE]/20 via-purple-500/20 to-[#48A9FE]/20 animate-gradient" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#48A9FE 1px, transparent 1px), linear-gradient(90deg, #48A9FE 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#48A9FE] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {language === 'fr' ? "Prêt à Transformer" : language === 'ar' ? "جاهز لتحويل" : "Ready to Transform"}
            <br />
            <span className="bg-gradient-to-r from-[#48A9FE] via-white to-[#48A9FE] bg-clip-text text-transparent">
              {language === 'fr' ? "Votre Présence Digitale ?" : language === 'ar' ? "حضورك الرقمي؟" : "Your Digital Presence?"}
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {language === 'fr' ? 
              "Rejoignez plus de 80 entreprises qui ont fait confiance à NextDigits pour leur croissance digitale." :
             language === 'ar' ?
              "انضم إلى أكثر من 80 شركة وثقت في NextDigits لنموها الرقمي." :
              "Join over 80 companies that trusted NextDigits for their digital growth."}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/devis">
              <Button
                variant="gradient"
                size="lg"
                className="group relative overflow-hidden bg-white hover:bg-gray-100 text-[#002144]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {language === 'fr' ? "Obtenir un devis gratuit" : 
                   language === 'ar' ? "احصل على عرض مجاني" : 
                   "Get Free Quote"}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002144]"
              >
                {language === 'fr' ? "Planifier un appel" : 
                 language === 'ar' ? "جدولة مكالمة" : 
                 "Schedule Call"}
              </Button>
            </Link>
          </div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="text-[#48A9FE]">{benefit.icon}</div>
                <span className="text-white text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
            >
              <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Client Logos Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider">
            {language === 'fr' ? "Ils nous font confiance" : 
             language === 'ar' ? "يثقون بنا" : 
             "Trusted by"}
          </p>

          {/* Infinite Scroll Logos */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#002144] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#002144] to-transparent z-10" />
            
            <div ref={logosRef} className="flex gap-12 items-center">
              {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  <span className="text-5xl">{client.logo}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
       
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutCTA;


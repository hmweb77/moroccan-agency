"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Award,
  TrendingUp
} from 'lucide-react';
import { gsap } from 'gsap';

// Mock context for demo
const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  return { language, changeLanguage: (lang) => setLanguage(lang) };
};

const translations = {
  en: {
    cta: {
      ready: {
        subtitle: "READY TO",
        title: "Transform Your Digital Presence?",
        description: "Join over 80 companies that trusted NextDigits for their digital growth.",
        benefits: [
          {
            text: "8h guaranteed response"
          },
          {
            text: "100% satisfaction guaranteed"
          },
          {
            text: "Certified expert team"
          },
          {
            text: "Measurable & optimized ROI"
          }
        ],
        stats: [
          {
            value: "80+",
            label: "Happy clients"
          },
          {
            value: "150+",
            label: "Successful projects"
          },
          {
            value: "98%",
            label: "Satisfaction rate"
          }
        ],
        cta1: "Get Free Quote",
        cta2: "Schedule Call",
        trustText: "Trusted by"
      }
    }
  },
  fr: {
    cta: {
      ready: {
        subtitle: "PRÊT À",
        title: "Transformer Votre Présence Digitale ?",
        description: "Rejoignez plus de 80 entreprises qui ont fait confiance à NextDigits pour leur croissance digitale.",
        benefits: [
          {
            text: "Réponse sous 8h garantie"
          },
          {
            text: "Satisfaction garantie à 100%"
          },
          {
            text: "Équipe d'experts certifiés"
          },
          {
            text: "ROI mesurable et optimisé"
          }
        ],
        stats: [
          {
            value: "80+",
            label: "Clients satisfaits"
          },
          {
            value: "150+",
            label: "Projets réussis"
          },
          {
            value: "98%",
            label: "Taux de satisfaction"
          }
        ],
        cta1: "Obtenir un devis gratuit",
        cta2: "Planifier un appel",
        trustText: "Ils nous font confiance"
      }
    }
  },
  ar: {
    cta: {
      ready: {
        subtitle: "جاهز لـ",
        title: "تحويل حضورك الرقمي؟",
        description: "انضم إلى أكثر من 80 شركة وثقت في NextDigits لنموها الرقمي.",
        benefits: [
          {
            text: "رد مضمون خلال 8 ساعات"
          },
          {
            text: "رضا مضمون 100%"
          },
          {
            text: "فريق خبراء معتمدين"
          },
          {
            text: "عائد استثمار قابل للقياس"
          }
        ],
        stats: [
          {
            value: "+80",
            label: "عميل راضٍ"
          },
          {
            value: "+150",
            label: "مشروع ناجح"
          },
          {
            value: "98%",
            label: "معدل الرضا"
          }
        ],
        cta1: "احصل على عرض مجاني",
        cta2: "جدولة مكالمة",
        trustText: "يثقون بنا"
      }
    }
  }
};

const AboutCTA = () => {
  const { language } = useLanguage();
  const t = translations[language].cta.ready;
  
  const sectionRef = useRef(null);
  const logosRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Client logos
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
      text: t.benefits[0].text
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: t.benefits[1].text
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: t.benefits[2].text
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: t.benefits[3].text
    }
  ];

  const stats = [
    { 
      value: t.stats[0].value,
      label: t.stats[0].label,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      value: t.stats[1].value,
      label: t.stats[1].label,
      color: "from-purple-500 to-pink-500"
    },
    { 
      value: t.stats[2].value,
      label: t.stats[2].label,
      color: "from-green-500 to-emerald-500"
    }
  ];

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
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
          <p className="text-[#48A9FE] text-lg md:text-xl font-medium mb-4 tracking-wider uppercase">
            {t.subtitle}
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            {t.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="/devis"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-white hover:bg-gray-100 text-[#002144] px-8 py-4 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2"
            >
              <span>{t.cta1}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#002144] px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              {t.cta2}
            </motion.a>
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
            {t.trustText}
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
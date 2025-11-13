"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Code,
  Smartphone,
  TrendingUp,
  Video,
  Share2,
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '@/selector/ui';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const { language } = useLanguage();
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);
  const cardsRef = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'fr' ? "Marketing & Stratégie" : language === 'ar' ? "التسويق والاستراتيجية" : "Marketing & Strategy",
      shortDesc: language === 'fr' ? "Stratégies data-driven pour maximiser votre ROI" : language === 'ar' ? "استراتيجيات قائمة على البيانات" : "Data-driven strategies to maximize ROI",
      features: [
        language === 'fr' ? "Audit marketing complet" : language === 'ar' ? "تحليل تسويقي شامل" : "Complete marketing audit",
        language === 'fr' ? "Stratégie digitale sur-mesure" : language === 'ar' ? "استراتيجية رقمية مخصصة" : "Custom digital strategy",
        language === 'fr' ? "SEO & SEM optimization" : language === 'ar' ? "تحسين محركات البحث" : "SEO & SEM optimization",
        language === 'fr' ? "Content marketing" : language === 'ar' ? "تسويق المحتوى" : "Content marketing"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: language === 'fr' ? "Design & Branding" : language === 'ar' ? "التصميم والعلامة التجارية" : "Design & Branding",
      shortDesc: language === 'fr' ? "Identité visuelle unique qui marque les esprits" : language === 'ar' ? "هوية بصرية فريدة لا تُنسى" : "Unique visual identity that makes an impact",
      features: [
        language === 'fr' ? "Logo & charte graphique" : language === 'ar' ? "شعار ودليل العلامة" : "Logo & brand guidelines",
        language === 'fr' ? "UI/UX Design" : language === 'ar' ? "تصميم واجهات المستخدم" : "UI/UX Design",
        language === 'fr' ? "Packaging & print" : language === 'ar' ? "التغليف والطباعة" : "Packaging & print",
        language === 'fr' ? "Motion design" : language === 'ar' ? "تصميم متحرك" : "Motion design"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: language === 'fr' ? "Développement Web" : language === 'ar' ? "تطوير الويب" : "Web Development",
      shortDesc: language === 'fr' ? "Sites web performants et scalables" : language === 'ar' ? "مواقع ويب عالية الأداء" : "High-performance, scalable websites",
      features: [
        language === 'fr' ? "Sites vitrine & e-commerce" : language === 'ar' ? "مواقع تعريفية ومتاجر" : "Showcase & e-commerce sites",
        language === 'fr' ? "Applications web sur-mesure" : language === 'ar' ? "تطبيقات ويب مخصصة" : "Custom web applications",
        language === 'fr' ? "CMS & gestion contenu" : language === 'ar' ? "إدارة المحتوى" : "CMS & content management",
        language === 'fr' ? "Maintenance & support" : language === 'ar' ? "صيانة ودعم" : "Maintenance & support"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: language === 'fr' ? "Développement Mobile" : language === 'ar' ? "تطوير التطبيقات" : "Mobile Development",
      shortDesc: language === 'fr' ? "Apps iOS & Android natives ou cross-platform" : language === 'ar' ? "تطبيقات أصلية ومتعددة المنصات" : "Native & cross-platform iOS & Android apps",
      features: [
        language === 'fr' ? "Applications natives iOS/Android" : language === 'ar' ? "تطبيقات أصلية" : "Native iOS/Android apps",
        language === 'fr' ? "Apps React Native" : language === 'ar' ? "تطبيقات React Native" : "React Native apps",
        language === 'fr' ? "PWA (Progressive Web Apps)" : language === 'ar' ? "تطبيقات ويب تقدمية" : "Progressive Web Apps",
        language === 'fr' ? "API & intégrations" : language === 'ar' ? "واجهات برمجية" : "API & integrations"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: language === 'fr' ? "Vidéo & Production" : language === 'ar' ? "إنتاج الفيديو" : "Video & Production",
      shortDesc: language === 'fr' ? "Contenus vidéo captivants et professionnels" : language === 'ar' ? "محتوى فيديو احترافي جذاب" : "Captivating professional video content",
      features: [
        language === 'fr' ? "Vidéos publicitaires" : language === 'ar' ? "فيديوهات إعلانية" : "Advertising videos",
        language === 'fr' ? "Vidéos corporate" : language === 'ar' ? "فيديوهات الشركات" : "Corporate videos",
        language === 'fr' ? "Motion graphics & animation" : language === 'ar' ? "رسوم متحركة" : "Motion graphics & animation",
        language === 'fr' ? "Montage & post-production" : language === 'ar' ? "مونتاج" : "Editing & post-production"
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: language === 'fr' ? "Social Media Management" : language === 'ar' ? "إدارة وسائل التواصل" : "Social Media Management",
      shortDesc: language === 'fr' ? "Présence sociale engageante et stratégique" : language === 'ar' ? "حضور اجتماعي استراتيجي" : "Engaging strategic social presence",
      features: [
        language === 'fr' ? "Stratégie réseaux sociaux" : language === 'ar' ? "استراتيجية وسائل التواصل" : "Social media strategy",
        language === 'fr' ? "Création de contenu" : language === 'ar' ? "إنشاء المحتوى" : "Content creation",
        language === 'fr' ? "Community management" : language === 'ar' ? "إدارة المجتمع" : "Community management",
        language === 'fr' ? "Publicité sociale (Ads)" : language === 'ar' ? "إعلانات اجتماعية" : "Social advertising (Ads)"
      ],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out"
      });

      // Service cards stagger animation
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none"
            },
            opacity: 0,
            y: 80,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.2)"
          });
        }
      });

      // Floating animation for active card (continuous)
      gsap.to(`.active-service-card`, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#48A9FE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#48A9FE]/10 border border-[#48A9FE]/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#48A9FE]" />
            <span className="text-[#48A9FE] text-sm font-semibold uppercase tracking-wide">
              {language === 'fr' ? "Nos Services" : language === 'ar' ? "خدماتنا" : "Our Services"}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002144] mb-6 leading-tight">
            {language === 'fr' ? "Solutions Complètes" : language === 'ar' ? "حلول شاملة" : "Complete Solutions"}
            <br />
            <span className="bg-gradient-to-r from-[#48A9FE] to-[#002144] bg-clip-text text-transparent">
              {language === 'fr' ? "Pour Votre Croissance" : language === 'ar' ? "لنمو أعمالك" : "For Your Growth"}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'fr' ? 
              "De la stratégie à l'exécution, nous couvrons tous les aspects de votre présence digitale avec expertise et créativité." :
             language === 'ar' ?
              "من الاستراتيجية إلى التنفيذ، نغطي جميع جوانب تواجدك الرقمي بخبرة وإبداع." :
              "From strategy to execution, we cover all aspects of your digital presence with expertise and creativity."}
          </p>
        </motion.div>

        {/* Interactive Service Selector */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {services.map((service, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#48A9FE]'
                }`}
              >
                <span className="flex items-center gap-2">
                  {service.icon}
                  <span className="hidden sm:inline">{service.title}</span>
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active Service Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`max-w-4xl mx-auto p-8 rounded-3xl ${services[activeService].bgColor} border ${services[activeService].borderColor} backdrop-blur-sm`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${services[activeService].color} text-white mb-4`}>
                    {services[activeService].icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#002144] mb-4">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {services[activeService].shortDesc}
                  </p>
                  <Link href="/services">
                    <Button variant="gradient" className="group">
                      {language === 'fr' ? "En savoir plus" : language === 'ar' ? "اعرف المزيد" : "Learn More"}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-3">
                  {services[activeService].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-white/50 backdrop-blur-sm rounded-lg p-3"
                    >
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${services[activeService].color} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              ref={el => cardsRef.current[index] = el}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                hoveredCard === index
                  ? `${service.bgColor} ${service.borderColor} shadow-2xl scale-105`
                  : 'bg-white border-gray-100 hover:shadow-xl'
              } ${activeService === index ? 'active-service-card' : ''}`}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#002144] mb-3 group-hover:text-[#48A9FE] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#48A9FE]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#48A9FE] font-semibold group-hover:gap-4 transition-all">
                  {language === 'fr' ? "Découvrir" : language === 'ar' ? "اكتشف" : "Discover"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/devis">
              <Button variant="gradient" size="lg" className="group">
                {language === 'fr' ? "Démarrer un projet" : language === 'ar' ? "ابدأ مشروعاً" : "Start a Project"}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                {language === 'fr' ? "Voir tous les services" : language === 'ar' ? "عرض جميع الخدمات" : "View All Services"}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;



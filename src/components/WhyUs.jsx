"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Award,
  Users,
  Target,
  Heart,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'fr' ? "Rapidité d'Exécution" : language === 'ar' ? "سرعة التنفيذ" : "Fast Execution",
      description: language === 'fr' ? 
        "Projets livrés en 7 jours en moyenne. Notre méthodologie agile garantit des résultats rapides sans compromettre la qualité." :
        language === 'ar' ?
        "تسليم المشاريع في 7 أيام في المتوسط. منهجيتنا الرشيقة تضمن نتائج سريعة دون المساس بالجودة." :
        "Projects delivered in 7 days on average. Our agile methodology ensures fast results without compromising quality.",
      color: "from-yellow-400 to-orange-500",
      stat: "7j",
      statLabel: language === 'fr' ? "Délai moyen" : language === 'ar' ? "متوسط الوقت" : "Average Time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: language === 'fr' ? "Accompagnement Complet" : language === 'ar' ? "مرافقة كاملة" : "Full Support",
      description: language === 'fr' ? 
        "Service 360° de la stratégie à la maintenance. Un interlocuteur dédié pour chaque projet, disponible 24/7." :
        language === 'ar' ?
        "خدمة شاملة من الاستراتيجية إلى الصيانة. مسؤول مخصص لكل مشروع، متاح على مدار الساعة." :
        "360° service from strategy to maintenance. A dedicated contact for each project, available 24/7.",
      color: "from-blue-400 to-cyan-500",
      stat: "24/7",
      statLabel: language === 'fr' ? "Support" : language === 'ar' ? "دعم" : "Support"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'fr' ? "ROI Garanti" : language === 'ar' ? "عائد استثمار مضمون" : "Guaranteed ROI",
      description: language === 'fr' ? 
        "Stratégies orientées résultats. Nous mesurons et optimisons continuellement pour maximiser votre retour sur investissement." :
        language === 'ar' ?
        "استراتيجيات موجهة نحو النتائج. نقيس ونحسّن باستمرار لتعظيم عائد استثمارك." :
        "Results-oriented strategies. We continuously measure and optimize to maximize your return on investment.",
      color: "from-green-400 to-emerald-500",
      stat: "+150%",
      statLabel: language === 'fr' ? "ROI moyen" : language === 'ar' ? "متوسط العائد" : "Average ROI"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: language === 'fr' ? "Expertise Prouvée" : language === 'ar' ? "خبرة مثبتة" : "Proven Expertise",
      description: language === 'fr' ? 
        "Équipe certifiée avec +10 ans d'expérience. Spécialistes dans chaque domaine pour garantir l'excellence." :
        language === 'ar' ?
        "فريق معتمد مع خبرة +10 سنوات. متخصصون في كل مجال لضمان التميز." :
        "Certified team with +10 years of experience. Specialists in each field to guarantee excellence.",
      color: "from-purple-400 to-pink-500",
      stat: "10+",
      statLabel: language === 'fr' ? "Ans d'expertise" : language === 'ar' ? "سنوات خبرة" : "Years Expertise"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: 80,
      suffix: "+",
      label: language === 'fr' ? "Clients Satisfaits" : language === 'ar' ? "عميل راضٍ" : "Happy Clients",
      color: "text-blue-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: 150,
      suffix: "+",
      label: language === 'fr' ? "Projets Réussis" : language === 'ar' ? "مشروع ناجح" : "Successful Projects",
      color: "text-green-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: 98,
      suffix: "%",
      label: language === 'fr' ? "Taux de Satisfaction" : language === 'ar' ? "معدل الرضا" : "Satisfaction Rate",
      color: "text-purple-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: 100,
      suffix: "%",
      label: language === 'fr' ? "Clients qui Reviennent" : language === 'ar' ? "عملاء عائدون" : "Returning Clients",
      color: "text-pink-500"
    }
  ];

  // Animated Counter Component
  const AnimatedCounter = ({ value, suffix }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const springCount = useSpring(count, { stiffness: 50, damping: 30 });

    useEffect(() => {
      if (isInView && !hasAnimated) {
        count.set(value);
        setHasAnimated(true);
      }
    }, [isInView, value, count, hasAnimated]);

    return (
      <motion.span>
        {rounded.get()}
        {suffix}
      </motion.span>
    );
  };

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats animation
      gsap.from(statsRef.current?.children || [], {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out"
      });

      // Features cards animation
      featuresRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            },
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 0.8,
            ease: "power3.out"
          });
        }
      });

      // Parallax background elements (slower, no scrub)
      gsap.to(".parallax-circle", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 3
        },
        y: -50,
        rotation: 90
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-circle absolute top-20 -right-20 w-96 h-96 bg-[#48A9FE]/5 rounded-full blur-3xl" />
        <div className="parallax-circle absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#48A9FE]/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#48A9FE 1px, transparent 1px), linear-gradient(90deg, #48A9FE 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              {language === 'fr' ? "Pourquoi Nous Choisir" : language === 'ar' ? "لماذا تختارنا" : "Why Choose Us"}
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002144] mb-6 leading-tight">
            {language === 'fr' ? "Votre Partenaire de" : language === 'ar' ? "شريكك في" : "Your Partner for"}
            <br />
            <span className="bg-gradient-to-r from-[#48A9FE] to-purple-600 bg-clip-text text-transparent">
              {language === 'fr' ? "Confiance Digital" : language === 'ar' ? "النجاح الرقمي" : "Digital Success"}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'fr' ? 
              "Une approche unique combinant rapidité, expertise et accompagnement personnalisé pour garantir votre succès." :
             language === 'ar' ?
              "نهج فريد يجمع بين السرعة والخبرة والمرافقة الشخصية لضمان نجاحك." :
              "A unique approach combining speed, expertise and personalized support to guarantee your success."}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color.replace('text-', 'from-')} to-${stat.color.split('-')[1]}-600 text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>

                {/* Counter */}
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#48A9FE]/0 to-purple-500/0 group-hover:from-[#48A9FE]/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={el => featuresRef.current[index] = el}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>

                  {/* Stat Badge */}
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {feature.statLabel}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#002144] mb-4 group-hover:text-[#48A9FE] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Decoration */}
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1, rotate: 45 }}
                className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${feature.color} rounded-full opacity-10 blur-2xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-[#48A9FE]/10 to-purple-500/10 backdrop-blur-sm border border-[#48A9FE]/20 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#48A9FE]" />
              <div className="text-left">
                <div className="font-bold text-[#002144]">
                  {language === 'fr' ? "Garantie Satisfait ou Remboursé" : 
                   language === 'ar' ? "ضمان الرضا أو استرداد الأموال" : 
                   "Money-Back Guarantee"}
                </div>
                <div className="text-sm text-gray-600">
                  {language === 'fr' ? "30 jours sans risque" : 
                   language === 'ar' ? "30 يوماً بدون مخاطر" : 
                   "30 days risk-free"}
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-300" />

            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-500" />
              <div className="text-left">
                <div className="font-bold text-[#002144]">
                  {language === 'fr' ? "Certifiés & Agréés" : 
                   language === 'ar' ? "معتمدون ومرخصون" : 
                   "Certified & Licensed"}
                </div>
                <div className="text-sm text-gray-600">
                  {language === 'fr' ? "Partenaires officiels" : 
                   language === 'ar' ? "شركاء رسميون" : 
                   "Official partners"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;




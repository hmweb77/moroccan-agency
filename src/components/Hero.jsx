"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '@/translations/translations';
import { Button } from '@/selector/ui';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const floatingRef = useRef([]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 });

  const backgroundImages = [
    '/photo_2025-06-19_17-51-52.jpg',
    '/photo_2025-06-19_17-51-55.jpg',
    '/photo_2025-06-19_17-51-58.jpg',
    '/photo_2025-06-19_17-52-01.jpg'
  ];

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with split text effect
      const titleChars = titleRef.current?.querySelectorAll('.char');
      if (titleChars) {
        gsap.from(titleChars, {
          opacity: 0,
          y: 100,
          rotateX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.3
        });
      }

      // Subtitle slide in
      gsap.from(subtitleRef.current, {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        delay: 0.8
      });

      // CTA buttons pop in
      gsap.from(ctaRef.current?.children || [], {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.7)",
        delay: 1.2
      });

      // Stats counter animation
      gsap.from(statsRef.current?.children || [], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        delay: 1.5
      });

      // Floating elements
      floatingRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: "random(-20, 20)",
            x: "random(-20, 20)",
            rotation: "random(-5, 5)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          });
        }
      });

      // Scroll-triggered animations for parallax effect
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const trustIndicators = [
    { icon: <Users className="w-5 h-5" />, value: "80+", label: language === 'fr' ? "Clients" : language === 'ar' ? "عميل" : "Clients" },
    { icon: <Zap className="w-5 h-5" />, value: "24h", label: language === 'fr' ? "Réponse" : language === 'ar' ? "استجابة" : "Response" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "100%", label: language === 'fr' ? "Satisfaction" : language === 'ar' ? "رضا" : "Satisfaction" }
  ];

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-[#002144] via-[#003366] to-[#002144] overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: smoothY }}
      >
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentImageIndex ? 0.3 : 0
            }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={image}
              alt={`Hero background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </motion.div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#002144]/80 via-[#002144]/60 to-[#002144]/90" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#48A9FE 1px, transparent 1px), linear-gradient(90deg, #48A9FE 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            ref={el => floatingRef.current[i] = el}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-[#48A9FE]' : 'bg-white'} opacity-30`} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 flex items-center min-h-screen"
        style={{ opacity: smoothOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <div className="text-start space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-[#48A9FE]/20 backdrop-blur-sm border border-[#48A9FE]/30 rounded-full px-4 py-2"
              >
                <Sparkles className="w-4 h-4 text-[#48A9FE]" />
                <span className="text-white text-sm font-medium">
                  {language === 'fr' ? "Votre partenaire digital de confiance" : 
                   language === 'ar' ? "شريكك الرقمي الموثوق" : 
                   "Your Trusted Digital Partner"}
                </span>
              </motion.div>

              {/* Main Title */}
              <div>
                <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                  {splitText(language === 'fr' ? "Transformez Votre" : 
                             language === 'ar' ? "حول عملك" : 
                             "Transform Your")}
                </h1>
                <h1 ref={subtitleRef} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-[#48A9FE] via-[#60B0FF] to-[#48A9FE] bg-clip-text text-transparent animate-gradient">
                    {language === 'fr' ? "Vision Digitale" : 
                     language === 'ar' ? "الرقمي" : 
                     "Digital Vision"}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
              >
                {language === 'fr' ? 
                  "Solutions complètes en marketing, design, développement web & mobile. Nous créons des expériences digitales qui génèrent des résultats concrets pour votre entreprise." :
                 language === 'ar' ?
                  "حلول شاملة في التسويق والتصميم والتطوير. نصنع تجارب رقمية تحقق نتائج ملموسة لعملك." :
                  "Complete solutions in marketing, design, web & mobile development. We create digital experiences that generate real results for your business."}
              </motion.p>

              {/* CTA Buttons */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                <Link href="/devis">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {language === 'fr' ? "Demander un devis" : 
                       language === 'ar' ? "اطلب عرض أسعار" : 
                       "Request Quote"}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#48A9FE] to-[#002144] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </Link>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#002144]"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {language === 'fr' ? "Planifier un appel" : 
                     language === 'ar' ? "جدولة مكالمة" : 
                     "Schedule Call"}
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <motion.div
                ref={statsRef}
                className="flex flex-wrap gap-6 pt-4"
              >
                {trustIndicators.map((indicator, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
                  >
                    <div className="text-[#48A9FE]">
                      {indicator.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{indicator.value}</div>
                      <div className="text-sm text-gray-400">{indicator.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative hidden lg:block"
            >
              {/* 3D Card Effect */}
              <div className="relative w-full h-[600px]">
                {/* Glowing Orb */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#48A9FE] to-[#002144] rounded-full blur-3xl opacity-30"
                />

                {/* Floating Card */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotateY: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full max-w-md">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#48A9FE]/20 to-[#002144]/20 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl" />
                    <div className="relative p-8 space-y-6">
                      {/* Service Icons Grid */}
                      <div className="grid grid-cols-3 gap-4">
                        {['🎨', '💻', '📱', '📊', '🎬', '📱'].map((emoji, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.5 + i * 0.1 }}
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl border border-white/20 cursor-pointer"
                          >
                            {emoji}
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="space-y-3">
                        {[
                          { label: language === 'fr' ? "Projets réussis" : "Successful Projects", value: 150 },
                          { label: language === 'fr' ? "Taux de satisfaction" : "Satisfaction Rate", value: 98 },
                          { label: language === 'fr' ? "Délai moyen" : "Average Delivery", value: 7 }
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2 + i * 0.1 }}
                            className="flex justify-between items-center"
                          >
                            <span className="text-white/80 text-sm">{stat.label}</span>
                            <span className="text-[#48A9FE] font-bold text-lg">{stat.value}{i === 1 ? '%' : i === 2 ? 'j' : '+'}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-white/60 text-sm">
            {language === 'fr' ? "Découvrir" : language === 'ar' ? "اكتشف" : "Discover"}
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Add gradient animation to CSS */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
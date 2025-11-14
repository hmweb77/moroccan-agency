"use client"
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquare,
  Target,
  Rocket,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Sparkles,
  Play
} from 'lucide-react';

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Mock language - replace with your actual language context
  const language = 'en'; // or 'fr' or 'ar'

  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: language === 'fr' ? "Analyse Express" : language === 'ar' ? "تحليل سريع" : "Express Analysis",
      description: language === 'fr' ? 
        "Remplissez notre simulateur de devis en quelques clics. Notre système intelligent analyse automatiquement vos besoins et vous propose une estimation personnalisée." :
        language === 'ar' ?
        "املأ محاكي العروض بنقرات قليلة. يقوم نظامنا الذكي بتحليل احتياجاتك تلقائياً ويقدم تقديراً مخصصاً." :
        "Fill out our quote simulator in a few clicks. Our intelligent system automatically analyzes your needs and provides a personalized estimate.",
      duration: language === 'fr' ? "2 minutes" : language === 'ar' ? "دقيقتان" : "2 minutes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      number: "02",
      icon: <Target className="w-8 h-8" />,
      title: language === 'fr' ? "Consultation Stratégique" : language === 'ar' ? "استشارة استراتيجية" : "Strategic Consultation",
      description: language === 'fr' ? 
        "Un chef de projet dédié vous contacte sous 8h pour comprendre en profondeur vos objectifs, votre cible et vos contraintes. Ensemble, nous définissons la meilleure stratégie." :
        language === 'ar' ?
        "يتصل بك مدير مشروع مخصص في غضون 8 ساعات لفهم أهدافك وجمهورك المستهدف. معاً، نحدد أفضل استراتيجية." :
        "A dedicated project manager contacts you within 8 hours to deeply understand your goals, target audience and constraints. Together, we define the best strategy.",
      duration: language === 'fr' ? "8 heures" : language === 'ar' ? "8 ساعات" : "8 hours",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      number: "03",
      icon: <Rocket className="w-8 h-8" />,
      title: language === 'fr' ? "Développement Agile" : language === 'ar' ? "تطوير مرن" : "Agile Development",
      description: language === 'fr' ? 
        "Notre équipe d'experts démarre immédiatement. Méthodologie agile avec sprints courts, points réguliers et démos interactives. Vous suivez l'avancement en temps réel." :
        language === 'ar' ?
        "يبدأ فريق خبرائنا على الفور. منهجية مرنة مع دورات قصيرة ونقاط تحقق منتظمة. تتابع التقدم في الوقت الفعلي." :
        "Our team of experts starts immediately. Agile methodology with short sprints, regular checkpoints and interactive demos. You track progress in real-time.",
      duration: language === 'fr' ? "7 jours" : language === 'ar' ? "7 أيام" : "7 days",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      number: "04",
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'fr' ? "Lancement & Optimisation" : language === 'ar' ? "إطلاق وتحسين" : "Launch & Optimization",
      description: language === 'fr' ? 
        "Mise en ligne accompagnée, formation de votre équipe et suivi des performances. Optimisation continue basée sur les données pour maximiser vos résultats." :
        language === 'ar' ?
        "إطلاق مصحوب، تدريب فريقك ومتابعة الأداء. تحسين مستمر قائم على البيانات لتعظيم نتائجك." :
        "Guided launch, team training and performance monitoring. Continuous data-driven optimization to maximize your results.",
      duration: language === 'fr' ? "En continu" : language === 'ar' ? "مستمر" : "Ongoing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#48A9FE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#48A9FE 1px, transparent 1px), linear-gradient(90deg, #48A9FE 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
         

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002144] mb-6 leading-tight">
            {language === 'fr' ? "Comment Ça Marche ?" : language === 'ar' ? "كيف نعمل؟" : "How It Works?"}
            <br />
            <span className="bg-gradient-to-r from-[#48A9FE] to-purple-600 bg-clip-text text-transparent">
              {language === 'fr' ? "Simple, Rapide, Efficace" : language === 'ar' ? "بسيط، سريع، فعال" : "Simple, Fast, Effective"}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'fr' ? 
              "Un processus rodé et transparent pour transformer votre vision en réalité, du premier contact au succès final." :
             language === 'ar' ?
              "عملية مجربة وشفافة لتحويل رؤيتك إلى واقع، من الاتصال الأول إلى النجاح النهائي." :
              "A proven and transparent process to transform your vision into reality, from first contact to final success."}
          </p>
        </motion.div>

        {/* Timeline with Steps */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            ref={timelineRef}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#48A9FE] via-purple-500 to-[#48A9FE] transform -translate-x-1/2"
            style={{ transformOrigin: 'top' }}
          />

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                ref={el => stepsRef.current[index] = el}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'}`}>
                    {/* Step Number Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white font-bold text-3xl mb-6 shadow-lg`}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    {/* <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${step.color} text-white mb-4`}>
                      {step.icon}
                    </div> */}

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-[#002144] mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Duration Badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`flex items-center gap-2 ${step.bgColor} rounded-full px-4 py-2 border-2 border-white shadow-md`}>
                        <Clock className="w-4 h-4 text-gray-700" />
                        <span className="font-semibold text-gray-700">{step.duration}</span>
                      </div>

                      {index < steps.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-2">
                      {[
                        language === 'fr' ? "Suivi en temps réel" : language === 'ar' ? "متابعة فورية" : "Real-time tracking",
                        language === 'fr' ? "Communication transparente" : language === 'ar' ? "تواصل شفاف" : "Transparent communication",
                        language === 'fr' ? "Livraison garantie" : language === 'ar' ? "تسليم مضمون" : "Guaranteed delivery"
                      ].map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'} relative`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      {/* Image Container */}
                      <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-10 transition-opacity duration-300`} />
                      </div>

                      {/* Floating Stats Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.8 }}
                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border-4 border-white"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color}`}>
                            <Users className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#002144]">
                              {index === 0 ? "100%" : index === 1 ? "8h" : index === 2 ? "7j" : "24/7"}
                            </div>
                            <div className="text-sm text-gray-600">
                              {index === 0 ? 
                                (language === 'fr' ? "Automatisé" : "Automated") : 
                               index === 1 ? 
                                (language === 'fr' ? "Réponse" : "Response") : 
                               index === 2 ? 
                                (language === 'fr' ? "Livraison" : "Delivery") : 
                                (language === 'fr' ? "Support" : "Support")}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <div className={`absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br ${step.color} rounded-full opacity-20 blur-2xl`} />
                      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${step.color} rounded-full opacity-20 blur-2xl`} />
                    </motion.div>
                  </div>
                </div>

                {/* Timeline Node (Desktop) */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className={`hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-xl`}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-br from-[#48A9FE]/10 to-purple-500/10 backdrop-blur-sm border border-[#48A9FE]/20 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-[#002144] mb-6">
              {language === 'fr' ? "Prêt à Démarrer Votre Projet ?" : 
               language === 'ar' ? "جاهز لبدء مشروعك؟" : 
               "Ready to Start Your Project?"}
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'fr' ? 
                "Rejoignez plus de 80 entreprises qui nous font confiance pour leur transformation digitale." :
               language === 'ar' ?
                "انضم إلى أكثر من 80 شركة تثق بنا في تحولها الرقمي." :
                "Join over 80 companies that trust us for their digital transformation."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white rounded-lg hover:shadow-lg transition-all group">
                {language === 'fr' ? "Commencer maintenant" : 
                 language === 'ar' ? "ابدأ الآن" : 
                 "Start Now"}
                <Rocket className="w-5 h-5 ml-2 inline group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button className="px-8 py-4 border-2 border-[#48A9FE] text-[#48A9FE] rounded-lg hover:bg-[#48A9FE] hover:text-white transition-all group">
                <Play className="w-5 h-5 mr-2 inline" />
                {language === 'fr' ? "Planifier une démo" : 
                 language === 'ar' ? "جدولة عرض توضيحي" : 
                 "Schedule Demo"}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {[
                { icon: <CheckCircle className="w-5 h-5" />, text: language === 'fr' ? "Sans engagement" : "No commitment" },
                { icon: <Users className="w-5 h-5" />, text: language === 'fr' ? "80+ clients satisfaits" : "80+ happy clients" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-600">
                  <div className="text-[#48A9FE]">{item.icon}</div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
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
  Heart
} from 'lucide-react';

// Mock context for demo
const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  return { language, changeLanguage: (lang) => setLanguage(lang) };
};

const translations = {
  en: {
    whyUs: {
      subtitle: "YOUR PARTNER FOR",
      title: "Digital Success",
      description: "A unique approach combining speed, expertise and personalized support to guarantee your success.",
      features: {
        fast: {
          title: "Fast Execution",
          description: "Projects delivered in 7 days on average. Our agile methodology ensures fast results without compromising quality.",
          stat: "7d",
          statLabel: "Average Time"
        },
        support: {
          title: "Full Support",
          description: "360° service from strategy to maintenance. A dedicated contact for each project, available 24/7.",
          stat: "24/7",
          statLabel: "Support"
        },
        roi: {
          title: "Guaranteed ROI",
          description: "Results-oriented strategies. We continuously measure and optimize to maximize your return on investment.",
          stat: "+150%",
          statLabel: "Average ROI"
        },
        expertise: {
          title: "Proven Expertise",
          description: "Certified team with +10 years of experience. Specialists in each field to guarantee excellence.",
          stat: "10+",
          statLabel: "Years Expertise"
        }
      },
      stats: {
        clients: {
          value: "80+",
          label: "Happy Clients"
        },
        projects: {
          value: "150+",
          label: "Successful Projects"
        },
        satisfaction: {
          value: "98%",
          label: "Satisfaction Rate"
        },
        returning: {
          value: "100%",
          label: "Returning Clients"
        }
      }
    }
  },
  fr: {
    whyUs: {
      subtitle: "VOTRE PARTENAIRE POUR",
      title: "Le Succès Digital",
      description: "Une approche unique combinant rapidité, expertise et accompagnement personnalisé pour garantir votre succès.",
      features: {
        fast: {
          title: "Exécution Rapide",
          description: "Projets livrés en 7 jours en moyenne. Notre méthodologie agile assure des résultats rapides sans compromettre la qualité.",
          stat: "7j",
          statLabel: "Temps Moyen"
        },
        support: {
          title: "Support Complet",
          description: "Service 360° de la stratégie à la maintenance. Un contact dédié pour chaque projet, disponible 24/7.",
          stat: "24/7",
          statLabel: "Support"
        },
        roi: {
          title: "ROI Garanti",
          description: "Stratégies axées sur les résultats. Nous mesurons et optimisons en continu pour maximiser votre retour sur investissement.",
          stat: "+150%",
          statLabel: "ROI Moyen"
        },
        expertise: {
          title: "Expertise Prouvée",
          description: "Équipe certifiée avec +10 ans d'expérience. Des spécialistes dans chaque domaine pour garantir l'excellence.",
          stat: "10+",
          statLabel: "Années d'Expertise"
        }
      },
      stats: {
        clients: {
          value: "80+",
          label: "Clients Satisfaits"
        },
        projects: {
          value: "150+",
          label: "Projets Réussis"
        },
        satisfaction: {
          value: "98%",
          label: "Taux de Satisfaction"
        },
        returning: {
          value: "100%",
          label: "Clients Fidèles"
        }
      }
    }
  },
  ar: {
    whyUs: {
      subtitle: "شريكك من أجل",
      title: "النجاح الرقمي",
      description: "نهج فريد يجمع بين السرعة والخبرة والدعم الشخصي لضمان نجاحك.",
      features: {
        fast: {
          title: "تنفيذ سريع",
          description: "مشاريع يتم تسليمها في 7 أيام في المتوسط. منهجيتنا المرنة تضمن نتائج سريعة دون المساس بالجودة.",
          stat: "7 أيام",
          statLabel: "الوقت المتوسط"
        },
        support: {
          title: "دعم كامل",
          description: "خدمة 360 درجة من الاستراتيجية إلى الصيانة. جهة اتصال مخصصة لكل مشروع، متاحة 24/7.",
          stat: "24/7",
          statLabel: "الدعم"
        },
        roi: {
          title: "عائد استثمار مضمون",
          description: "استراتيجيات موجهة نحو النتائج. نقيس ونحسن باستمرار لتعظيم عائد استثمارك.",
          stat: "+150%",
          statLabel: "متوسط العائد"
        },
        expertise: {
          title: "خبرة مثبتة",
          description: "فريق معتمد مع أكثر من 10 سنوات من الخبرة. متخصصون في كل مجال لضمان التميز.",
          stat: "+10",
          statLabel: "سنوات خبرة"
        }
      },
      stats: {
        clients: {
          value: "+80",
          label: "عميل سعيد"
        },
        projects: {
          value: "+150",
          label: "مشروع ناجح"
        },
        satisfaction: {
          value: "98%",
          label: "معدل الرضا"
        },
        returning: {
          value: "100%",
          label: "عملاء عائدون"
        }
      }
    }
  }
};

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language].whyUs;
  
  const sectionRef = useRef(null);
  const featuresRef = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      ...t.features.fast,
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      ...t.features.support,
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      ...t.features.roi,
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      ...t.features.expertise,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      ...t.stats.clients,
      color: "text-blue-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      ...t.stats.projects,
      color: "text-green-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      ...t.stats.satisfaction,
      color: "text-purple-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      ...t.stats.returning,
      color: "text-pink-500"
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-[#48A9FE]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[#48A9FE] text-lg md:text-xl font-medium mb-4 tracking-wider uppercase">
            {t.subtitle}
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002144] mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#48A9FE] to-purple-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              ref={el => featuresRef.current[index] = el}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
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

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className={`${stat.color} mb-3 flex justify-center`}>
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#002144] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
"use client"
import React, { useRef, useState } from 'react';
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

const Expertise = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing & Strategy",
      shortDesc: "Data-driven strategies to maximize ROI",
      features: [
        "Complete marketing audit",
        "Custom digital strategy",
        "SEO & SEM optimization",
        "Content marketing"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Branding",
      shortDesc: "Unique visual identity that makes an impact",
      features: [
        "Logo & brand guidelines",
        "UI/UX Design",
        "Packaging & print",
        "Motion design"
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      shortDesc: "High-performance, scalable websites",
      features: [
        "Showcase & e-commerce sites",
        "Custom web applications",
        "CMS & content management",
        "Maintenance & support"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      shortDesc: "Native & cross-platform iOS & Android apps",
      features: [
        "Native iOS/Android apps",
        "React Native apps",
        "Progressive Web Apps",
        "API & integrations"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video & Production",
      shortDesc: "Captivating professional video content",
      features: [
        "Advertising videos",
        "Corporate videos",
        "Motion graphics & animation",
        "Editing & post-production"
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Management",
      shortDesc: "Engaging strategic social presence",
      features: [
        "Social media strategy",
        "Content creation",
        "Community management",
        "Social advertising (Ads)"
      ],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20"
    }
  ];

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
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#48A9FE]/10 border border-[#48A9FE]/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#48A9FE]" />
            <span className="text-[#48A9FE] text-sm font-semibold uppercase tracking-wide">
              Our Services
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002144] mb-6 leading-tight">
            Complete Solutions
            <br />
            <span className="bg-gradient-to-r from-[#48A9FE] to-[#002144] bg-clip-text text-transparent">
              For Your Growth
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we cover all aspects of your digital presence with expertise and creativity.
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
                  <button className="px-6 py-3 bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white rounded-lg hover:shadow-lg transition-all group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </button>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                hoveredCard === index
                  ? `${service.bgColor} ${service.borderColor} shadow-2xl scale-105`
                  : 'bg-white border-gray-100 hover:shadow-xl'
              }`}
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
                  Discover
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white rounded-lg hover:shadow-lg transition-all group">
              Start a Project
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-[#48A9FE] text-[#48A9FE] rounded-lg hover:bg-[#48A9FE] hover:text-white transition-all">
              View All Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;



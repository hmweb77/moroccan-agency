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

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef([]);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Execution",
      description: "Projects delivered in 7 days on average. Our agile methodology ensures fast results without compromising quality.",
      color: "from-yellow-400 to-orange-500",
      stat: "7d",
      statLabel: "Average Time"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Full Support",
      description: "360° service from strategy to maintenance. A dedicated contact for each project, available 24/7.",
      color: "from-blue-400 to-cyan-500",
      stat: "24/7",
      statLabel: "Support"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Guaranteed ROI",
      description: "Results-oriented strategies. We continuously measure and optimize to maximize your return on investment.",
      color: "from-green-400 to-emerald-500",
      stat: "+150%",
      statLabel: "Average ROI"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Expertise",
      description: "Certified team with +10 years of experience. Specialists in each field to guarantee excellence.",
      color: "from-purple-400 to-pink-500",
      stat: "10+",
      statLabel: "Years Expertise"
    }
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: 80,
      suffix: "+",
      label: "Happy Clients",
      color: "text-blue-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: 150,
      suffix: "+",
      label: "Successful Projects",
      color: "text-green-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      color: "text-purple-500"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: 100,
      suffix: "%",
      label: "Returning Clients",
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
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#48A9FE]/10 border border-[#48A9FE]/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#48A9FE]" />
            <span className="text-[#48A9FE] text-sm font-semibold uppercase tracking-wide">
              Why Choose Us
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002144] mb-6 leading-tight">
            Your Partner for
            <br />
            <span className="bg-gradient-to-r from-[#48A9FE] to-purple-600 bg-clip-text text-transparent">
              Digital Success
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unique approach combining speed, expertise and personalized support to guarantee your success.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

        {/* Trust Badge Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-[#48A9FE]/10 to-purple-500/10 backdrop-blur-sm border border-[#48A9FE]/20 rounded-2xl px-8 py-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-[#48A9FE]" />
              <div className="text-left">
                <div className="font-bold text-[#002144]">
                  Money-Back Guarantee
                </div>
                <div className="text-sm text-gray-600">
                  30 days risk-free
                </div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-gray-300" />

            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-purple-500" />
              <div className="text-left">
                <div className="font-bold text-[#002144]">
                  Certified & Licensed
                </div>
                <div className="text-sm text-gray-600">
                  Official partners
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
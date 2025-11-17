"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Mock context for demo - replace with your actual context
const useLanguage = () => {
  const [language, setLanguage] = useState('fr');
  return {
    language,
    changeLanguage: (lang) => setLanguage(lang)
  };
};

const translations = {
  en: {
    nav: {
      home: "Home",
      expertise: "Our Expertise",
      about: "About",
      contact: "Contact",
      quote: "Request Quote"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      expertise: "Notre Expertise",
      about: "À propos",
      contact: "Contact",
      quote: "Demander un devis"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      expertise: "خبرتنا",
      about: "من نحن",
      contact: "اتصل بنا",
      quote: "اطلب عرض أسعار"
    }
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const t = translations[language].nav;

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLanguageDropdownOpen(false);
      }
    };

    if (languageDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [languageDropdownOpen]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const languages = [
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇲🇦" },
    { code: "en", name: "English", flag: "🇬🇧" }
  ];

  const navItems = [
    { name: t.home, href: "/" },
    { name: t.expertise, href: "/services" },
    { name: t.about, href: "/about" },
  ];

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 z-50"
          >
            <Link href="/">
              <div className="font-bold text-xl" style={{ color: isScrolled ? '#48A9FE' : '#fff' }}>
                NextDigits
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-[#002144] hover:text-[#48A9FE]"
                    : "text-white hover:text-[#48A9FE]"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Language */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                  isScrolled
                    ? "text-[#002144] hover:text-[#48A9FE]"
                    : "text-white hover:text-[#48A9FE]"
                }`}
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {languages.find(l => l.code === language)?.flag}
                </span>
              </button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-40 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center space-x-2 ${
                          language === lang.code
                            ? "bg-blue-50 text-[#48A9FE] font-medium"
                            : "text-[#002144] hover:bg-gray-50"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/devis">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#48A9FE] text-white px-6 py-2 rounded-full font-medium hover:bg-[#3890DD] transition-colors"
              >
                {t.quote}
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#002144] text-white px-6 py-2 rounded-full font-medium hover:bg-[#003366] transition-colors"
              >
                {t.contact}
              </motion.button>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center space-x-3">
            {/* Mobile Language */}
            <div className="relative" ref={mobileDropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className={`p-2 rounded-md ${
                  isScrolled ? "text-[#002144]" : "text-white"
                }`}
              >
                <Globe className="w-5 h-5" />
              </button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute top-full right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full text-left px-3 py-2 text-sm transition-colors flex items-center space-x-2 ${
                          language === lang.code
                            ? "bg-blue-50 text-[#48A9FE] font-medium"
                            : "text-[#002144] hover:bg-gray-50"
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className="text-xs">{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-[#002144]" : "text-white"
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-3 text-[#002144] hover:text-[#48A9FE] hover:bg-gray-50 rounded-md font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 space-y-3 border-t border-gray-200">
                  <Link href="/devis" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full bg-[#48A9FE] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3890DD] transition-colors">
                      {t.quote}
                    </button>
                  </Link>
                  
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full bg-[#002144] text-white px-6 py-3 rounded-full font-medium hover:bg-[#003366] transition-colors">
                      {t.contact}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Handle newsletter subscription here
  };

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <MessageCircle className="w-5 h-5" />, href: "#", label: "WhatsApp" }
  ];

  const contactInfo = [
    { icon: <Facebook className="w-4 h-4" />, text: "Facebook", href: "#" },
    { icon: <Instagram className="w-4 h-4" />, text: "Instagram", href: "#" },
    { icon: <MessageCircle className="w-4 h-4" />, text: "Whatsapp", href: "#" },
    { icon: <Phone className="w-4 h-4" />, text: "07 08 00 00 18", href: "tel:0708000018" },
    { icon: <Mail className="w-4 h-4" />, text: "info@medialaoui.com", href: "mailto:info@medialaoui.com" },
    { icon: <MapPin className="w-4 h-4" />, text: "Magasin 20, Mall des Ambassadeurs, Av. Mohamed VI, Rabat", href: "#" }
  ];

  const usefulLinks = [
    { text: "Accueil", href: "/" },
    { text: "Notre Expertise", href: "/services" },
    { text: "À propos", href: "/about" },
    { text: "Actualité", href: "/projects" },
    { text: "Demandez un devis", href: "/quote" }
  ];

  return (
    <footer className="bg-gray-50 py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo and Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
             
              <span className="font-bold text-lg text-[#48A9FE]">NextDigits</span>
            </div>

            {/* Copyright */}
            <div className="space-y-2 text-sm text-gray-600">
              <p>© 2025 <span className="font-semibold text-[#002144]">NextDigits</span></p>
              <p>Tous les droits sont réservés.</p>
              
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-gray-200 hover:bg-[#48A9FE] rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-[#002144] mb-6">Contactez-Nous</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ x: 3 }}
                  className="flex items-center space-x-3 text-gray-600 hover:text-[#48A9FE] transition-colors group"
                >
                  <div className="text-[#48A9FE] group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </div>
                  <span className="text-sm">{contact.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Useful Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-[#002144] mb-6">Liens utiles</h3>
            <div className="space-y-3">
              {usefulLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 3 }}
                  className="block text-gray-600 hover:text-[#48A9FE]  transition-colors text-sm"
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
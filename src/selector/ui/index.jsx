"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// ============================================
// SECTION COMPONENT
// ============================================
export const Section = ({ children, bgColor = 'bg-white', className = '', ...props }) => (
  <section className={`py-20 ${bgColor} ${className}`} {...props}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);

// ============================================
// SECTION TITLE COMPONENT
// ============================================
export const SectionTitle = ({ title, subtitle, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className={`text-center mb-16 ${className}`}
  >
    <p className="text-[#48A9FE] text-base md:text-xl font-medium mb-4 tracking-wider uppercase">
      {title}
    </p>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002144] leading-tight">
      {subtitle}
    </h2>
  </motion.div>
);

// ============================================
// BUTTON COMPONENT
// ============================================
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false,
  disabled = false,
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-[#48A9FE] text-white hover:bg-[#3890DD] disabled:bg-gray-300',
    secondary: 'bg-[#002144] text-white hover:bg-[#003366] disabled:bg-gray-300',
    outline: 'border-2 border-[#48A9FE] text-[#48A9FE] hover:bg-[#48A9FE] hover:text-white disabled:border-gray-300 disabled:text-gray-300',
    ghost: 'text-[#48A9FE] hover:bg-[#48A9FE]/10 disabled:text-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300',
    gradient: 'bg-gradient-to-r from-[#48A9FE] to-[#002144] text-white hover:from-[#3890DD] hover:to-[#002144] disabled:from-gray-300 disabled:to-gray-400'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      className={`
        rounded-full font-medium transition-all inline-flex items-center justify-center gap-2
        ${variants[variant]} 
        ${sizes[size]}
        ${disabled || loading ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </motion.button>
  );
};

// ============================================
// INPUT COMPONENT
// ============================================
export const Input = ({ 
  label, 
  error, 
  required, 
  className = '',
  ...props 
}) => (
  <div className="space-y-1 w-full">
    {label && (
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input
      className={`
        w-full px-4 py-3 border rounded-lg transition-all
        ${error 
          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 focus:ring-[#48A9FE] focus:border-[#48A9FE]'
        }
        focus:ring-2 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    />
    {error && (
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm flex items-center gap-1"
      >
        <span>⚠</span> {error}
      </motion.p>
    )}
  </div>
);

// ============================================
// SELECT COMPONENT
// ============================================
export const Select = ({ 
  label, 
  error, 
  required, 
  options = [],
  placeholder = "Select an option",
  className = '',
  ...props 
}) => (
  <div className="space-y-1 w-full">
    {label && (
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <select
      className={`
        w-full px-4 py-3 border rounded-lg transition-all appearance-none bg-white
        ${error 
          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 focus:ring-[#48A9FE] focus:border-[#48A9FE]'
        }
        focus:ring-2 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && (
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm flex items-center gap-1"
      >
        <span>⚠</span> {error}
      </motion.p>
    )}
  </div>
);

// ============================================
// TEXTAREA COMPONENT
// ============================================
export const Textarea = ({ 
  label, 
  error, 
  required, 
  className = '',
  rows = 4,
  ...props 
}) => (
  <div className="space-y-1 w-full">
    {label && (
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <textarea
      rows={rows}
      className={`
        w-full px-4 py-3 border rounded-lg transition-all resize-vertical
        ${error 
          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
          : 'border-gray-300 focus:ring-[#48A9FE] focus:border-[#48A9FE]'
        }
        focus:ring-2 outline-none disabled:bg-gray-100 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    />
    {error && (
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm flex items-center gap-1"
      >
        <span>⚠</span> {error}
      </motion.p>
    )}
  </div>
);

// ============================================
// CARD COMPONENT
// ============================================
export const Card = ({ 
  children, 
  className = '',
  hoverable = false,
  ...props 
}) => (
  <motion.div
    whileHover={hoverable ? { scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
    className={`
      bg-white rounded-xl shadow-lg p-6
      ${hoverable ? 'cursor-pointer transition-all' : ''}
      ${className}
    `}
    {...props}
  >
    {children}
  </motion.div>
);

// ============================================
// BADGE COMPONENT
// ============================================
export const Badge = ({ 
  children, 
  variant = 'primary',
  className = ''
}) => {
  const variants = {
    primary: 'bg-[#48A9FE] text-white',
    secondary: 'bg-[#002144] text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    danger: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    light: 'bg-gray-100 text-gray-700'
  };
  
  return (
    <span className={`
      inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};

// ============================================
// MODAL COMPONENT
// ============================================
export const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title,
  size = 'md'
}) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'max-w-[95vw]'
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className={`relative bg-white rounded-xl shadow-2xl ${sizes[size]} w-full max-h-[90vh] overflow-y-auto`}
      >
        {title && (
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
        )}
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

// ============================================
// LOADING SKELETON
// ============================================
export const Skeleton = ({ 
  className = '',
  variant = 'text'
}) => {
  const variants = {
    text: 'h-4 w-full',
    title: 'h-8 w-3/4',
    avatar: 'h-12 w-12 rounded-full',
    thumbnail: 'h-48 w-full',
    button: 'h-10 w-32 rounded-full'
  };

  return (
    <div className={`
      animate-pulse bg-gray-200 rounded
      ${variants[variant]}
      ${className}
    `} />
  );
};

// ============================================
// ALERT COMPONENT
// ============================================
export const Alert = ({ 
  children, 
  variant = 'info',
  onClose,
  className = ''
}) => {
  const variants = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200'
  };

  const icons = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`
        rounded-lg border p-4 flex items-start gap-3
        ${variants[variant]}
        ${className}
      `}
    >
      <span className="text-xl">{icons[variant]}</span>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-current opacity-50 hover:opacity-100 transition-opacity"
        >
          ✕
        </button>
      )}
    </motion.div>
  );
};

// ============================================
// PROGRESS BAR
// ============================================
export const ProgressBar = ({ 
  progress = 0, 
  showLabel = true,
  className = ''
}) => (
  <div className={`w-full ${className}`}>
    {showLabel && (
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
    )}
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5 }}
        className="h-full bg-[#48A9FE] rounded-full"
      />
    </div>
  </div>
);

// ============================================
// TOOLTIP
// ============================================
export const Tooltip = ({ 
  children, 
  content,
  position = 'top'
}) => {
  const [show, setShow] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`
            absolute z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg
            whitespace-nowrap ${positions[position]}
          `}
        >
          {content}
          <div className={`absolute w-2 h-2 bg-gray-900 rotate-45 
            ${position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' : ''}
            ${position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' : ''}
            ${position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' : ''}
            ${position === 'right' ? 'left-[-4px] top-1/2 -translate-y-1/2' : ''}
          `} />
        </motion.div>
      )}
    </div>
  );
};

// ============================================
// TABS COMPONENT
// ============================================
export const Tabs = ({ tabs, activeTab, onChange }) => (
  <div className="border-b border-gray-200">
    <div className="flex space-x-8">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          className={`
            py-4 px-1 border-b-2 font-medium text-sm transition-colors
            ${activeTab === index
              ? 'border-[#48A9FE] text-[#48A9FE]'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
);
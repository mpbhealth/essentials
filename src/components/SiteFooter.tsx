'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { StrategicLink } from '@/components/InternalLinking'
import { Phone, Mail, MapPin, Shield, Heart, Users, Sparkles, ArrowRight, Star, Award, Globe, Zap, Crown, ChevronUp } from 'lucide-react'

export function SiteFooter() {
  const [year, setYear] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerSections = [
    {
      title: "Healthcare Services",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      links: [
        { text: "Virtual Urgent Care", href: "/#services", rel: "related" },
        { text: "Primary Care", href: "/#services", rel: "related" },
        { text: "Mental Health", href: "/#services", rel: "related" },
        { text: "Concierge Support", href: "/#services", rel: "related" }
      ]
    },
    {
      title: "Membership",
      icon: Crown,
      color: "from-purple-500 to-indigo-500",
      links: [
        { text: "What's Included", href: "/#details", rel: "related" },
        { text: "Pricing & Plans", href: "/#pricing", rel: "related" },
        { text: "How It Works", href: "/#how-it-works", rel: "related" },
        { text: "Member Benefits", href: "/#details", rel: "related" }
      ]
    },
    {
      title: "Support",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      links: [
        { text: "Talk to an Advisor", href: "/#advisor", rel: "related" },
        { text: "Frequently Asked Questions", href: "/#faq", rel: "related" },
        { text: "Contact Us", href: "tel:8558164650", rel: "contact" },
        { text: "Member Login", href: "#", rel: "external" }
      ]
    }
  ]

  const trustIndicators = [
    { icon: Shield, label: 'HIPAA Compliant', color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: Heart, label: '24/7 Care Available', color: 'text-red-500', bgColor: 'bg-red-50' },
    { icon: Users, label: '10,000+ Members', color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: Star, label: '4.9/5 Rating', color: 'text-yellow-500', bgColor: 'bg-yellow-50' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <footer className='relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900/20 via-transparent to-accent-900/20" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-brand-500/10 to-accent-500/10 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-accent-500/10 to-brand-500/10 rounded-full blur-2xl"
      />

      <div className='relative mx-auto max-w-7xl px-4 py-16'>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-xl flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-left">
              <h2 className="text-2xl font-black text-white">Ready to transform your healthcare?</h2>
              <p className="text-slate-400 text-sm">Join thousands of satisfied members</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {trustIndicators.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass border border-white/10 rounded-2xl p-6 text-center group backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 mx-auto mb-3 rounded-2xl ${item.bgColor} shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <Icon className={`w-6 h-6 ${item.color}`} />
                </motion.div>
                <div className="text-sm font-bold text-white mb-1">{item.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Footer Content */}
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='lg:col-span-2 relative'
          >
            {/* Brand Card */}
            <div className="glass border border-white/20 rounded-3xl p-8 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-500 group relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className='flex items-center gap-4 mb-6'>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="relative"
                  >
                    <img 
                      src="/MPB-Health-No-background.png"
                      alt="MPB Health"
                      className='h-10 w-auto object-contain'
                    />
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg blur-lg transition-opacity duration-300' />
                  </motion.div>
                  <div>
                    <div className='font-black text-white text-xl'>MPB Health</div>
                    <div className='text-sm text-brand-300 font-semibold'>Essentials Membership</div>
                  </div>
                </div>
                
                <p className='text-slate-300 mb-8 leading-relaxed'>
                  Comprehensive virtual healthcare, expert concierge support, and smart savings 
                  — all in one membership designed to put your health first.
                </p>
                
                {/* Contact Info */}
                <div className='space-y-4'>
                  <StrategicLink 
                    href="tel:8558164650" 
                    variant="inline"
                    className="flex items-center gap-3 text-slate-300 hover:text-white group/link transition-colors duration-300"
                    rel="contact"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg flex items-center justify-center group-hover/link:shadow-xl transition-shadow duration-300"
                    >
                      <Phone className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="font-semibold">(855) 816-4650</span>
                  </StrategicLink>
                  
                  <StrategicLink 
                    href="mailto:info@mympb.com"
                    variant="inline" 
                    className="flex items-center gap-3 text-slate-300 hover:text-white group/link transition-colors duration-300"
                    rel="contact"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center group-hover/link:shadow-xl transition-shadow duration-300"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="font-semibold">info@mympb.com</span>
                  </StrategicLink>
                  
                  <div className="flex items-start gap-3 text-slate-300">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center justify-center"
                    >
                      <MapPin className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="font-semibold">
                      <div>5301 N Federal Hwy</div>
                      <div className="text-slate-400 text-sm">Boca Raton, FL 33487</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Decoration */}
              <motion.div 
                animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-gradient-to-r from-accent-400/30 to-accent-500/30 shadow-lg flex items-center justify-center"
              >
                <Globe className="w-4 h-4 text-accent-300" />
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {footerSections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass border border-white/10 rounded-2xl p-6 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Header */}
                  <div className="relative z-10 flex items-center gap-3 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${section.color} shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className='font-black text-white text-lg group-hover:text-brand-300 transition-colors duration-300'>
                      {section.title}
                    </h3>
                  </div>
                  
                  {/* Links */}
                  <nav className='relative z-10 space-y-3'>
                    {section.links.map((link, linkIndex) => (
                      <motion.div
                        key={linkIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: linkIndex * 0.1 + 0.3 }}
                      >
                        <StrategicLink
                          href={link.href}
                          variant="inline"
                          rel={link.rel}
                          className="group/link flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                        >
                          <motion.div
                            whileHover={{ scale: 1.5, rotate: 180 }}
                            className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover/link:bg-white transition-colors duration-300"
                          />
                          <span className="font-medium">{link.text}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
                        </StrategicLink>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='glass border-t border-white/20 pt-8 backdrop-blur-xl bg-white/5 rounded-2xl p-6'
        >
          <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
            {/* Copyright */}
            <div className="flex items-center gap-3 text-slate-300">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6 rounded-lg bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center"
              >
                <Award className="w-3 h-3 text-white" />
              </motion.div>
              <span className="font-medium">© {year} MPB Health. All rights reserved.</span>
            </div>
            
            {/* Legal Links */}
            <nav className='flex items-center gap-6'>
              {[
                { text: "Terms of Service", href: "#", rel: "legal" },
                { text: "Privacy Policy", href: "#", rel: "legal" },
                { text: "FAQ", href: "/#faq", rel: "help" }
              ].map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 1 }}
                >
                  <StrategicLink 
                    href={link.href} 
                    variant="inline" 
                    rel={link.rel}
                    className="text-slate-400 hover:text-white font-medium transition-colors duration-300 hover:underline"
                  >
                    {link.text}
                  </StrategicLink>
                </motion.div>
              ))}
            </nav>
          </div>
          
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-center mt-6"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-500/20 to-accent-500/20 border border-white/20 rounded-2xl px-6 py-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-4 h-4 text-brand-400" />
              </motion.div>
              <span className="text-sm font-bold text-slate-300">
                Powered by championship-level healthcare innovation
              </span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-accent-400 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full shadow-2xl flex items-center justify-center z-50 hover:shadow-3xl transition-shadow duration-300"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}
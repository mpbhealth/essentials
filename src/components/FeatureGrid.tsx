import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'
import { StrategicLink, RelatedLinks } from '@/components/InternalLinking'
import { bullets } from '@/data/essentials'
import { Clock, Heart, Brain, Users, Pill, Leaf, QrCode, Shield, Dog, CreditCard, CircleCheck as CheckCircle, Sparkles, ArrowRight } from 'lucide-react'

const featureIcons = [
  Clock,      // 24/7/365 Virtual Urgent Care
  Heart,      // Virtual Primary Care
  Brain,      // Virtual Mental Health
  Users,      // MPB Concierge Assistance
  Pill,       // Pharmacy Discounts
  Leaf,       // Supplements Discounts
  QrCode,     // QR Life Code
  Shield,     // Medical Records Vault
  Dog,        // Pet Telehealth
  CreditCard  // Debt Dismissal*
]

export function FeatureGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <section id='details' className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className='relative mx-auto max-w-7xl px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Complete Healthcare Solution</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            What you get with{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Essentials
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need for comprehensive healthcare coverage, all in one membership
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8'
        >
          {bullets.map((feature, i) => {
            const Icon = featureIcons[i]
            const isSpecial = feature.includes('*')
            
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, -1, 1, 0],
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="h-full card-hover border-0 shadow-lg bg-white/70 backdrop-blur-sm group-hover:bg-white transition-all duration-300 relative overflow-hidden">
                  {/* Premium Badge */}
                  {isSpecial && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        Premium
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <CardBody className="relative z-10 text-center p-6 lg:p-8">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Feature Title */}
                    <h3 className='text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-700 transition-colors duration-300'>
                      {feature}
                    </h3>
                    
                    {/* Check mark with animation */}
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.5, type: "spring", stiffness: 150 }}
                      className="flex items-center justify-center gap-2 text-sm font-medium text-accent-600"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Included</span>
                    </motion.div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </CardBody>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl px-8 py-4 shadow-xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span className="font-bold text-lg">All benefits included in your membership</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-yellow-300 rounded-full"
              />
            </motion.div>
            
            {/* Championship Related Content Links */}
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="glass border border-white/30 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden relative"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 to-accent-50/40" />
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-400 to-accent-500 shadow-xl flex items-center justify-center opacity-30"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                <div className="relative z-10 p-8 md:p-12">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-black text-slate-900 mb-8 text-center"
                  >
                    <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                      Learn More About Your Benefits
                    </span>
                  </motion.h3>
                  
                  {/* Championship Links Grid */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        href: "/#pricing",
                        title: "View Membership Pricing",
                        description: "Transparent pricing for all Essentials benefits",
                        icon: "💰",
                        color: "from-green-500 to-emerald-500"
                      },
                      {
                        href: "/#how-it-works", 
                        title: "How to Get Started",
                        description: "Simple 3-step enrollment process",
                        icon: "🚀",
                        color: "from-blue-500 to-cyan-500"
                      },
                      {
                        href: "/#services",
                        title: "Virtual Healthcare Services", 
                        description: "24/7 urgent care, primary care, and mental health",
                        icon: "🩺",
                        color: "from-red-500 to-pink-500"
                      },
                      {
                        href: "/#faq",
                        title: "Frequently Asked Questions",
                        description: "Common questions about membership benefits",
                        icon: "❓",
                        color: "from-purple-500 to-indigo-500"
                      }
                    ].map((link, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 + 0.5 }}
                        className="group"
                      >
                        <StrategicLink 
                          href={link.href}
                          variant="card"
                          className="relative overflow-hidden border-2 border-transparent hover:border-brand-300 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1"
                        >
                          {/* Background Pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-slate-50/80 group-hover:from-white group-hover:to-brand-50/50 transition-all duration-300" />
                          
                          <div className="relative z-10 flex items-start gap-4">
                            {/* Animated Icon */}
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                              transition={{ duration: 0.5 }}
                              className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${link.color} shadow-lg flex items-center justify-center text-xl group-hover:shadow-xl transition-shadow duration-300`}
                            >
                              {link.icon}
                            </motion.div>
                            
                            <div className="flex-1">
                              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                                {link.title}
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {link.description}
                              </p>
                            </div>
                            
                            {/* Arrow */}
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <ArrowRight className="w-5 h-5 text-brand-500" />
                            </motion.div>
                          </div>
                          
                          {/* Hover Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                        </StrategicLink>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Bottom decoration */}
                <motion.div 
                  animate={{ y: [0, 5, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-6 -left-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 shadow-lg flex items-center justify-center opacity-30"
                >
                  <CheckCircle className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
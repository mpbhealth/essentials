'use client'
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
      
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
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
          
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            What you get with{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Essentials
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Your day-to-day healthcare needs made simple—a powerful complement to any major medical plan
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8'
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
                    <h3 className='text-base sm:text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-brand-700 transition-colors duration-300'>
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

        {/* Explore Your Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0">
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/20"
                style={{ backgroundSize: '200% 200%' }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
                >
                  <CheckCircle className="w-5 h-5 text-accent-400" />
                  <span className="font-bold text-white">All benefits included in your membership</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5 text-yellow-300" />
                  </motion.div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
                >
                  Explore Your Benefits
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-slate-300 max-w-2xl mx-auto"
                >
                  Everything you need to know about your healthcare membership
                </motion.p>
              </div>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {[
                  {
                    href: "/#pricing",
                    title: "Membership Pricing",
                    description: "Transparent pricing for all benefits",
                    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600",
                    icon: CreditCard,
                    gradient: "from-emerald-400 to-teal-500"
                  },
                  {
                    href: "/#how-it-works",
                    title: "Get Started",
                    description: "Simple 3-step enrollment",
                    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
                    icon: ArrowRight,
                    gradient: "from-blue-400 to-cyan-500"
                  },
                  {
                    href: "/#services",
                    title: "Healthcare Services",
                    description: "24/7 virtual care access",
                    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=600",
                    icon: Heart,
                    gradient: "from-rose-400 to-pink-500"
                  },
                  {
                    href: "/#faq",
                    title: "FAQs",
                    description: "Common questions answered",
                    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=600",
                    icon: Shield,
                    gradient: "from-amber-400 to-orange-500"
                  }
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group"
                    >
                      <StrategicLink
                        href={item.href}
                        variant="card"
                        className="relative h-full overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105"
                      >
                        {/* Image Background */}
                        <div className="relative h-32 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />

                          {/* Icon Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="w-16 h-16 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center"
                            >
                              <Icon className={`w-8 h-8 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                            </motion.div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h4 className="font-black text-white text-lg mb-2 group-hover:text-accent-300 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {item.description}
                          </p>

                          {/* Hover Arrow */}
                          <motion.div
                            initial={{ x: -10, opacity: 0 }}
                            whileHover={{ x: 0, opacity: 1 }}
                            className="mt-4 flex items-center gap-2 text-accent-300 font-semibold text-sm"
                          >
                            <span>Learn more</span>
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>

                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />
                      </StrategicLink>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-brand-400 to-accent-500 rounded-full blur-3xl opacity-20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-accent-400 to-brand-500 rounded-full blur-3xl opacity-20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
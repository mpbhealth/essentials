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

        {/* Explore Your Benefits Section - Dynasty Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mt-24 max-w-7xl mx-auto"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5">
            {/* Static Mesh Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
                                   radial-gradient(circle at 40% 20%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)`
                }}
              />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-20">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-3 mb-8 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-white tracking-wide">All benefits included in your membership</span>
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                    Explore Your
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Benefits
                  </span>
                </h3>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                  Everything you need to know about your healthcare membership
                </p>
              </div>

              {/* Benefits Grid - Enhanced Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {[
                  {
                    href: "/#pricing",
                    title: "Membership Pricing",
                    description: "Transparent pricing for all benefits",
                    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
                    icon: CreditCard,
                    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
                    glowColor: "emerald"
                  },
                  {
                    href: "/#how-it-works",
                    title: "Get Started",
                    description: "Simple 3-step enrollment",
                    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
                    icon: ArrowRight,
                    gradient: "from-blue-500 via-cyan-500 to-sky-500",
                    glowColor: "blue"
                  },
                  {
                    href: "/#services",
                    title: "Healthcare Services",
                    description: "24/7 virtual care access",
                    image: "https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
                    icon: Heart,
                    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
                    glowColor: "rose"
                  },
                  {
                    href: "/#faq",
                    title: "FAQs",
                    description: "Common questions answered",
                    image: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1",
                    icon: Shield,
                    gradient: "from-amber-500 via-orange-500 to-red-500",
                    glowColor: "amber"
                  }
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div key={i} className="group">
                      <StrategicLink
                        href={item.href}
                        variant="card"
                        className="relative h-full block overflow-hidden rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:scale-[1.03] hover:-translate-y-1"
                      >
                        {/* Image Background */}
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                            decoding="async"
                          />

                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70 mix-blend-multiply group-hover:opacity-50 transition-opacity duration-300`} />

                          {/* Dark Bottom Fade */}
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90" />

                          {/* Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-2xl bg-white/95 backdrop-blur-sm shadow-2xl flex items-center justify-center group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                              <Icon className={`w-10 h-10 bg-gradient-to-br ${item.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative p-6 bg-gradient-to-b from-slate-900/80 to-slate-950/95">
                          <h4 className="font-black text-white text-xl mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-400 leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-200">
                            {item.description}
                          </p>

                          {/* Learn More Button */}
                          <div className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1">
                            <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                              Learn more
                            </span>
                            <ArrowRight className={`w-4 h-4 bg-gradient-to-r ${item.gradient} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent' }} />
                          </div>
                        </div>

                        {/* Glow Effect Border */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                      </StrategicLink>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Static Orbs - Performance Optimized */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/15 to-amber-500/15 rounded-full blur-[100px]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
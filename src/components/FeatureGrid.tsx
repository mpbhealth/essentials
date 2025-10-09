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

        {/* Quick Access Navigation - Modern Redesign */}
        <div className="mt-24 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Everything included in your plan
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              Quick Access
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Jump to the information you need about your healthcare membership
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/#pricing",
                title: "Membership Pricing",
                description: "Transparent pricing for all benefits",
                icon: CreditCard,
                color: "emerald"
              },
              {
                href: "/#how-it-works",
                title: "Get Started",
                description: "Simple 3-step enrollment",
                icon: ArrowRight,
                color: "blue"
              },
              {
                href: "/#services",
                title: "Healthcare Services",
                description: "24/7 virtual care access",
                icon: Heart,
                color: "rose"
              },
              {
                href: "/#faq",
                title: "FAQs",
                description: "Common questions answered",
                icon: Shield,
                color: "amber"
              }
            ].map((item, i) => {
              const Icon = item.icon
              const colorClasses = {
                emerald: {
                  bg: "bg-emerald-50",
                  border: "border-emerald-200",
                  icon: "text-emerald-600",
                  iconBg: "bg-emerald-100",
                  hoverBg: "hover:bg-emerald-100",
                  hoverBorder: "hover:border-emerald-300"
                },
                blue: {
                  bg: "bg-blue-50",
                  border: "border-blue-200",
                  icon: "text-blue-600",
                  iconBg: "bg-blue-100",
                  hoverBg: "hover:bg-blue-100",
                  hoverBorder: "hover:border-blue-300"
                },
                rose: {
                  bg: "bg-rose-50",
                  border: "border-rose-200",
                  icon: "text-rose-600",
                  iconBg: "bg-rose-100",
                  hoverBg: "hover:bg-rose-100",
                  hoverBorder: "hover:border-rose-300"
                },
                amber: {
                  bg: "bg-amber-50",
                  border: "border-amber-200",
                  icon: "text-amber-600",
                  iconBg: "bg-amber-100",
                  hoverBg: "hover:bg-amber-100",
                  hoverBorder: "hover:border-amber-300"
                }
              }[item.color]

              return (
                <StrategicLink
                  key={i}
                  href={item.href}
                  variant="card"
                  className={`group relative block rounded-2xl border-2 ${colorClasses.border} ${colorClasses.bg} ${colorClasses.hoverBg} ${colorClasses.hoverBorder} transition-all duration-200 hover:shadow-lg hover:-translate-y-1`}
                >
                  <div className="p-6">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${colorClasses.iconBg} mb-4 transition-transform duration-200 group-hover:scale-110`}>
                      <Icon className={`w-7 h-7 ${colorClasses.icon}`} />
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Arrow */}
                    <div className={`flex items-center gap-1 text-sm font-semibold ${colorClasses.icon} group-hover:translate-x-1 transition-transform duration-200`}>
                      <span>View details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </StrategicLink>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
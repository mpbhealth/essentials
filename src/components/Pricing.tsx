'use client'
import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody, Badge } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { pricing } from '@/data/essentials'
import { enrollClick } from '@/lib/track'
import { DollarSign, Shield, Clock, Heart, Zap, CircleCheck as CheckCircle, TrendingUp, Users, Calculator, Sparkles, ArrowRight, Star, Award, Crown, User, UserPlus, UsersRound } from 'lucide-react'

export function Pricing() {
  const [totalSavings, setTotalSavings] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState(pricing.plans[0].id)
  const baseEnrollmentUrl = 'https://essentials.enrollmpb.com/'

  useEffect(() => {
    // Animate total savings counter
    const target = 2650
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepTime = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setTotalSavings(target)
        clearInterval(timer)
      } else {
        setTotalSavings(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [])

  const planIcons = {
    'member-only': User,
    'member-plus-one': UserPlus,
    'member-family': UsersRound
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
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
    <section id='pricing' className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/40" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      
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
            <Crown className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Premium Value</span>
          </div>
          
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Transparent pricing
            </span>
            <br />
            <span className="text-slate-700">extraordinary value</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8 px-4">
            Essentials provides comprehensive healthcare solutions for minor to major health concerns. 
            A powerful complement to any healthcare plan, or a standalone solution for complete peace of mind.
          </p>

          {/* Value Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl px-6 py-3 shadow-lg"
          >
            <TrendingUp className="w-5 h-5" />
            <span className="font-bold text-lg">Average member saves ${totalSavings.toLocaleString()}+ yearly</span>
          </motion.div>
        </motion.div>

        {/* Pricing Plans Grid */}
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            {pricing.plans.map((plan, index) => {
              const Icon = planIcons[plan.id] || User
              const isPopular = plan.popular
              const isSelected = selectedPlan === plan.id
              
              return (
                <motion.div
                  key={plan.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`relative ${isPopular ? 'md:-mt-4 md:mb-4' : ''}`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -15 }}
                      animate={{ scale: 1, rotate: -15 }}
                      transition={{ delay: 1, type: "spring", stiffness: 150 }}
                      className="absolute -top-4 -right-4 z-20 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg"
                    >
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" fill="currentColor" />
                        Most Popular
                      </div>
                    </motion.div>
                  )}

                  <Card className={`h-full transition-all duration-500 border-2 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer ${
                    isPopular 
                      ? 'border-accent-300 shadow-2xl scale-105' 
                      : isSelected 
                        ? 'border-brand-300 shadow-xl' 
                        : 'border-transparent hover:border-brand-200'
                  }`}>
                    {/* Background */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isPopular 
                        ? 'bg-gradient-to-br from-accent-50 via-white to-brand-50 opacity-80' 
                        : 'bg-gradient-to-br from-brand-50 via-white to-accent-50 opacity-60 group-hover:opacity-80'
                    }`} />
                    
                    <CardBody className="relative z-10 p-6 sm:p-8 text-center">
                      {/* Plan Icon & Name */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${
                          isPopular ? 'from-accent-500 to-accent-600' : 'from-brand-500 to-brand-600'
                        } shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                      <p className="text-sm text-slate-600 mb-6">{plan.description}</p>

                      {/* Pricing */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 150, delay: 0.5 + index * 0.1 }}
                        className="mb-6"
                      >
                        <div className="text-4xl font-black text-slate-900 mb-2">
                          <span className={`text-gradient bg-gradient-to-r ${
                            isPopular ? 'from-accent-600 to-brand-500' : 'from-brand-600 to-accent-500'
                          } bg-clip-text text-transparent`}>
                            {plan.display}
                          </span>
                        </div>
                        <div className="text-base font-semibold text-slate-600">/{plan.period.toLowerCase()}</div>
                        
                        {/* Enrollment Fee */}
                        <div className="mt-2 text-sm text-slate-500">
                          + {pricing.enrollmentFee.display} {pricing.enrollmentFee.period.toLowerCase()}
                        </div>
                      </motion.div>

                      {/* Benefits */}
                      <div className="space-y-3 mb-8">
                        {['All Essentials benefits included', 'No long-term contracts', 'Cancel anytime', '24/7 support'].map((benefit, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + i * 0.1 + index * 0.1 }}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                            </div>
                            {benefit}
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href={`${baseEnrollmentUrl}?benefitid=${plan.benefitId}`}
                        onClick={() => enrollClick(`pricing_${plan.id}`)}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn block mb-4"
                      >
                        <Button className={`w-full text-lg py-4 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                          isPopular
                            ? 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700'
                            : 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700'
                        }`}>
                          <span className="flex items-center justify-center gap-2">
                            Choose {plan.name}
                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </Button>
                      </motion.a>

                      {/* Floating Elements */}
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                        className="absolute top-6 left-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                      >
                        <Sparkles className={`w-6 h-6 ${isPopular ? 'text-accent-500' : 'text-brand-500'}`} />
                      </motion.div>
                    </CardBody>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Enrollment Fee Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-3 shadow-lg">
            <DollarSign className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-medium">
              One-time enrollment fee of {pricing.enrollmentFee.display} applies to all plans
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
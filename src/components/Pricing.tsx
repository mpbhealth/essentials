'use client'
import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody, Badge } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { price } from '@/data/essentials'
import { enrollClick } from '@/lib/track'
import { DollarSign, Shield, Clock, Heart, Zap, CircleCheck as CheckCircle, TrendingUp, Users, Calculator, Sparkles, ArrowRight, Star, Award, Crown } from 'lucide-react'

const valueProps = [
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Virtual urgent care anytime',
    value: '$200+ saved per visit',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Heart,
    title: 'Primary Care',
    description: 'Unlimited consultations',
    value: '$150+ saved per visit',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Shield,
    title: 'Mental Health',
    description: 'Up to 12 sessions/year',
    value: '$1,800+ value',
    color: 'from-purple-500 to-indigo-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Users,
    title: 'Concierge Support',
    description: 'Expert healthcare navigation',
    value: '$500+ saved monthly',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50'
  }
]

const features = [
  '$0 Unlimited Virtual Urgent Care',
  '$0 Primary Care & Behavioral Health', 
  'MPB Concierge Cost & Quality Search',
  'Medical Records Vault & QR LifeCode',
  'Pharmacy & Supplements Discounts',
  'Pet Telehealth Included'
]

export function Pricing() {
  const [activeValue, setActiveValue] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0)
  const href = 'https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveValue(prev => (prev + 1) % valueProps.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

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
            <Crown className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Premium Value</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Transparent pricing
            </span>
            <br />
            <span className="text-slate-700">extraordinary value</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
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

        {/* Value Propositions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {valueProps.map((prop, i) => {
            const Icon = prop.icon
            const isActive = activeValue === i

            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group"
                onHoverStart={() => setActiveValue(i)}
              >
                <Card className={`h-full transition-all duration-500 border-2 hover:shadow-2xl hover:-translate-y-2 ${
                  isActive ? 'border-brand-300 shadow-xl scale-105' : 'border-transparent hover:border-brand-200'
                }`}>
                  <CardBody className="relative overflow-hidden p-6 text-center">
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 opacity-5 ${prop.bgColor} transition-opacity duration-300 group-hover:opacity-10`} />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${prop.color} shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">{prop.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{prop.description}</p>
                    
                    <div className={`text-sm font-bold bg-gradient-to-r ${prop.color} bg-clip-text text-transparent`}>
                      {prop.value}
                    </div>

                    {/* Active Indicator */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: isActive ? 1 : 0 }}
                      className="absolute top-3 right-3 w-3 h-3 bg-brand-500 rounded-full"
                    />

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${prop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                  </CardBody>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full glass border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
              <CardBody className="p-8 md:p-10">
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                      Complete Healthcare Solution
                    </h3>
                    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
                      Everything you need for comprehensive healthcare coverage, preventive care, and emergency support—all in one membership.
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <Award className="w-12 h-12 text-brand-500" />
                  </motion.div>
                </div>

                {/* Features List */}
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-brand-50 transition-colors duration-300 group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 flex items-center justify-center flex-shrink-0"
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                      <span className="text-slate-700 font-medium group-hover/item:text-brand-700 transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Value Highlight */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-brand-50 to-accent-50 border border-brand-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Calculator className="w-5 h-5 text-brand-600" />
                    <span className="font-bold text-brand-700">Value Breakdown</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Comparable services would cost $200+ per urgent care visit, $150+ per primary care visit, 
                    and $150+ per mental health session. With Essentials, you get unlimited access for just $49.95/month.
                  </p>
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Pricing Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            {/* Popular Badge */}
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

            <Card className="h-full border-2 border-brand-200 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden group">
              {/* Premium Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <CardBody className="relative z-10 p-8 text-center">
                {/* Pricing */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, delay: 0.5 }}
                  className="mb-6"
                >
                  <div className="text-5xl md:text-6xl font-black text-slate-900 mb-2">
                    <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                      ${price.startingAt.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-lg font-semibold text-slate-600">/month</div>
                  
                  {/* Comparison */}
                  <div className="mt-4 text-sm text-slate-500">
                    <span className="line-through">$599+ value</span>
                    <span className="ml-2 text-green-600 font-bold">Save 92%</span>
                  </div>
                </motion.div>

                {/* Benefits */}
                <div className="space-y-3 mb-8">
                  {['No long-term contracts', 'Cancel anytime', 'Money-back guarantee', '24/7 support'].map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
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
                  href={href} 
                  onClick={() => enrollClick('pricing_card')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn block mb-4"
                >
                  <Button className="w-full text-lg py-4 bg-gradient-to-r from-brand-500 to-accent-500 hover:from-brand-600 hover:to-accent-600 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <span className="flex items-center justify-center gap-2">
                      Enroll in Essentials
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.a>

                {/* Disclaimer */}
                <p className='text-xs text-slate-500'>
                  *Eligibility requirements apply for certain programs. See details below.
                </p>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                >
                  <Sparkles className="w-8 h-8 text-brand-500" />
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 5, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                >
                  <DollarSign className="w-8 h-8 text-accent-500" />
                </motion.div>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
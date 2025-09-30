'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'
import { CreditCard, Smartphone, Stethoscope, DollarSign, ArrowRight, Clock, CircleCheck as CheckCircle, Play, Zap, Shield, Users, Star, Sparkles, Phone, MessageSquare, Video } from 'lucide-react'

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const steps = [
    {
      id: 1,
      title: 'Join in minutes',
      description: 'Use our secure online checkout—no long forms or waiting rooms.',
      icon: CreditCard,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      details: 'Simple 3-step enrollment with bank-level security',
      features: ['Instant activation', 'No medical exams', 'Secure payment'],
      visual: '💳'
    },
    {
      id: 2,
      title: 'Start using benefits',
      description: 'Book virtual care, message doctors, and access concierge support.',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      details: 'Immediate access to all services via app or web',
      features: ['24/7 virtual care', 'Instant messaging', 'Concierge support'],
      visual: '🩺'
    },
    {
      id: 3,
      title: 'Save smart',
      description: 'Find fair prices for labs, imaging, and prescriptions with MPB Concierge.',
      icon: DollarSign,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      details: 'Expert guidance to find best prices and quality care',
      features: ['Price comparisons', 'Quality ratings', 'Expert recommendations'],
      visual: '💰'
    }
  ]

  const processFlow = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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

  React.useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        setActiveStep(prev => (prev + 1) % steps.length)
      }, 2000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, steps.length])

  return (
    <section id="how-it-works" ref={ref} className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      
      <div className='relative mx-auto max-w-7xl px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Simple 3-Step Process</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              How it works
            </span>
            <br />
            <span className="text-slate-700">in just 3 simple steps</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Getting started with Essentials is incredibly simple. From enrollment to savings, 
            we've streamlined everything so you can focus on what matters most - your health.
          </p>

          {/* Play Demo Button */}
          <motion.button
            onClick={() => setIsPlaying(!isPlaying)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
              isPlaying 
                ? 'bg-red-500 text-white shadow-lg hover:bg-red-600' 
                : 'bg-brand-500 text-white shadow-lg hover:bg-brand-600'
            }`}
          >
            <Play className={`w-5 h-5 ${isPlaying ? 'hidden' : 'block'}`} />
            <div className={`w-5 h-5 ${isPlaying ? 'block' : 'hidden'}`}>
              <div className="flex gap-1">
                <div className="w-1.5 h-5 bg-white rounded-full"></div>
                <div className="w-1.5 h-5 bg-white rounded-full"></div>
              </div>
            </div>
            {isPlaying ? 'Pause Demo' : 'Play Demo'}
          </motion.button>
        </motion.div>

        {/* Process Flow Timeline */}
        <div className="relative">
          {/* Connecting Path */}
          <div className="absolute top-1/2 left-0 right-0 hidden md:block pointer-events-none z-0">
            <svg 
              width="100%" 
              height="100" 
              viewBox="0 0 800 100" 
              className="absolute inset-0"
            >
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 50 50 L 250 50 L 350 30 L 450 50 L 550 30 L 750 50"
                stroke="url(#flowGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="8 4"
                variants={processFlow}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="drop-shadow-sm"
              />
              
              {/* Flow particles */}
              {[...Array(3)].map((_, i) => (
                <motion.circle
                  key={i}
                  r="3"
                  fill="url(#flowGradient)"
                  initial={{ x: 50, y: 50, opacity: 0 }}
                  animate={{ 
                    x: [50, 250, 450, 750], 
                    y: [50, 50, 30, 50], 
                    opacity: [0, 1, 1, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    delay: i * 1.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className='grid md:grid-cols-3 gap-8 md:gap-12 relative z-10'
          >
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = activeStep === i || (!isPlaying && i === 0)

              return (
                <motion.div
                  key={i}
                  variants={stepVariants}
                  onHoverStart={() => !isPlaying && setActiveStep(i)}
                  className="relative group"
                >
                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.2 + 0.5, type: "spring", stiffness: 150 }}
                    className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${step.color} shadow-lg z-20 flex items-center justify-center`}
                  >
                    <motion.div
                      animate={{ 
                        scale: isActive ? [1, 1.2, 1] : 1,
                        rotate: isActive ? [0, 360] : 0
                      }}
                      transition={{ 
                        repeat: isActive ? Infinity : 0, 
                        duration: 3 
                      }}
                      className="text-white font-bold text-lg"
                    >
                      {step.id}
                    </motion.div>
                  </motion.div>

                  {/* Main Card */}
                  <Card className={`h-full transition-all duration-500 border-2 hover:shadow-2xl hover:-translate-y-4 group ${
                    isActive ? 'border-brand-300 shadow-2xl scale-105' : 'border-transparent hover:border-brand-200'
                  }`}>
                    <CardBody className="relative overflow-hidden p-8">
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 ${step.bgColor} transition-opacity duration-300 group-hover:opacity-10`} />
                      
                      {/* Visual Element */}
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0], scale: isActive ? [1, 1.1, 1] : 1 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="text-6xl mb-6 text-center"
                      >
                        {step.visual}
                      </motion.div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg flex items-center justify-center mx-auto group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className='text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors duration-300'>
                          {step.title}
                        </h3>
                        
                        <p className='text-slate-600 mb-4 leading-relaxed'>
                          {step.description}
                        </p>

                        <div className="text-sm font-medium text-slate-500 mb-6">
                          {step.details}
                        </div>

                        {/* Features List */}
                        <div className="space-y-2">
                          {step.features.map((feature, fi) => (
                            <motion.div
                              key={fi}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.3 + fi * 0.1 + 1 }}
                             className="flex items-center gap-2 text-sm text-slate-600"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Communication Icons */}
                      {i === 1 && (
                        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <Phone className="w-4 h-4 text-brand-400" />
                            <Video className="w-4 h-4 text-brand-400" />
                            <MessageSquare className="w-4 h-4 text-brand-400" />
                          </div>
                        </div>
                      )}

                      {/* Active State Overlay */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: isActive ? 0.1 : 0, 
                          scale: isActive ? 1 : 0.8 
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${step.color} pointer-events-none`}
                      />

                      {/* Success Checkmark for Completed Steps */}
                      {isPlaying && activeStep > i && (
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </CardBody>
                  </Card>

                  {/* Connection Arrow */}
                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 0.6, x: 0 }}
                      transition={{ delay: i * 0.3 + 1.5 }}
                      className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-8 h-8 text-brand-400" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: Clock, stat: '< 5 min', label: 'Average signup time' },
            { icon: Shield, stat: '100%', label: 'Secure checkout' },
            { icon: Star, stat: '4.9/5', label: 'Member satisfaction' }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 1.7 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-xl font-bold text-slate-900">{item.stat}</div>
                <div className="text-sm text-slate-600">{item.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4 shadow-lg">
            <Sparkles className="w-5 h-5 text-brand-500" />
            <span className="text-lg font-semibold text-slate-700">Ready to get started?</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 text-brand-500" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
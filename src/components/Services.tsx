'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'
import { services } from '@/data/essentials'
import { 
  Stethoscope, 
  Brain, 
  Heart, 
  GraduationCap, 
  Users, 
  Shield,
  Phone,
  Video,
  MessageSquare,
  Clock,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react'

const serviceIcons = [
  Stethoscope, // Virtual Healthcare
  Brain,       // Mental Health Counseling
  Heart,       // Elder Care & Financial
  GraduationCap, // Online Training Library
  Users,       // MPB Concierge
  Shield       // Records & QR LifeCode
]

const journeySteps = [
  { 
    phase: 'Immediate Care', 
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-50',
    description: 'When you need care right now'
  },
  { 
    phase: 'Ongoing Wellness', 
    color: 'from-blue-500 to-purple-500',
    bgColor: 'bg-blue-50',
    description: 'Building lasting mental & physical health'
  },
  { 
    phase: 'Life Support', 
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    description: 'Comprehensive life & financial guidance'
  },
  { 
    phase: 'Growth & Learning', 
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    description: 'Personal & professional development'
  },
  { 
    phase: 'Smart Navigation', 
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    description: 'Expert guidance for healthcare decisions'
  },
  { 
    phase: 'Secure Foundation', 
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    description: 'Your health data, protected & accessible'
  }
]

export function Services() {
  const [activeService, setActiveService] = useState(0)
  const [timelineProgress, setTimelineProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setTimelineProgress(100), 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const timelineVariants = {
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

  return (
    <section className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-accent-50/30" />
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className='relative mx-auto max-w-7xl px-4' ref={timelineRef}>
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
            <span className="text-sm font-semibold text-brand-700">Complete Healthcare Journey</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            Your{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              healthcare journey
            </span>
            {' '}reimagined
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From urgent care to lifelong wellness - discover how our integrated services support you at every step
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Timeline SVG Path */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 800 600" 
              className="absolute inset-0"
              style={{ minHeight: '600px' }}
            >
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0a4e8e" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a4cc43" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#0a4e8e" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 100 100 C 200 150, 300 50, 400 100 C 500 150, 600 50, 700 100 C 750 120, 780 150, 700 200 C 600 250, 500 350, 400 300 C 300 250, 200 350, 100 300 C 50 280, 20 250, 100 200 Z"
                stroke="url(#timelineGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="10 5"
                variants={timelineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="drop-shadow-lg"
              />
            </svg>
          </div>

          {/* Services Grid with Timeline Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10'
          >
            {services.map((service, i) => {
              const Icon = serviceIcons[i]
              const journey = journeySteps[i]
              const isActive = activeService === i

              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  onHoverStart={() => setActiveService(i)}
                  className="relative"
                >
                  {/* Timeline Connection Point */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2 + 1 }}
                    className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-r ${journey.color} shadow-lg z-20 flex items-center justify-center`}
                  >
                    <motion.div
                      animate={{ 
                        scale: isActive ? [1, 1.2, 1] : 1,
                        rotate: isActive ? [0, 360] : 0
                      }}
                      transition={{ 
                        repeat: isActive ? Infinity : 0, 
                        duration: 2 
                      }}
                      className="w-3 h-3 bg-white rounded-full"
                    />
                  </motion.div>

                  {/* Service Card */}
                  <Card className={`h-full transition-all duration-500 border-2 hover:shadow-2xl hover:-translate-y-2 group ${
                    isActive ? 'border-brand-300 shadow-xl scale-105' : 'border-transparent hover:border-brand-200'
                  }`}>
                    <CardBody className="relative overflow-hidden p-8">
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-5 ${journey.bgColor} transition-opacity duration-300 group-hover:opacity-10`} />
                      
                      {/* Journey Phase Badge */}
                      <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4 bg-gradient-to-r ${journey.color} text-white`}>
                        <Sparkles className="w-3 h-3" />
                        {journey.phase}
                      </div>

                      {/* Icon with Animation */}
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${journey.color} shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors duration-300'>
                        {service.title}
                      </h3>
                      
                      <p className='text-sm text-slate-600 mb-4 leading-relaxed'>
                        {service.desc}
                      </p>

                      {/* Journey Description */}
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs font-medium text-slate-500">
                          {journey.description}
                        </p>
                      </div>

                      {/* Interactive Elements */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-1">
                          <Phone className="w-4 h-4 text-brand-400" />
                          <Video className="w-4 h-4 text-brand-400" />
                          <MessageSquare className="w-4 h-4 text-brand-400" />
                        </div>
                      </div>

                      {/* Availability Indicator */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full"
                      >
                        <Clock className="w-3 h-3" />
                        <span>Available 24/7</span>
                      </motion.div>

                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${journey.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
                    </CardBody>
                  </Card>

                  {/* Connection Arrow */}
                  {i < services.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.3, scale: 1 }}
                      transition={{ delay: i * 0.3 + 2 }}
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10"
                    >
                      <ArrowRight className="w-6 h-6 text-brand-400" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-600">All services available instantly</span>
            </div>
            <div className="w-px h-4 bg-slate-300" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-500" />
              <span className="text-sm font-medium text-slate-600">24/7/365 access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
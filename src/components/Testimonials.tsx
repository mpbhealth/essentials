'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/essentials'
import { Star, Quote, ArrowRight, ArrowLeft, Heart, Users, Shield, Clock, CircleCheck as CheckCircle, Sparkles, TrendingUp, Award, Zap, Play, Pause } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  const memberStats = [
    { 
      icon: Users, 
      number: '10,000+', 
      label: 'Active Members',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      description: 'Trusted nationwide'
    },
    { 
      icon: Heart, 
      number: '98%', 
      label: 'Satisfaction Rate',
      color: 'from-red-500 to-pink-500', 
      bgColor: 'bg-red-50',
      description: 'Exceptional experience'
    },
    { 
      icon: Clock, 
      number: '24/7', 
      label: 'Support Available',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50', 
      description: 'Always there for you'
    },
    { 
      icon: Shield, 
      number: '100%', 
      label: 'HIPAA Compliant',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      description: 'Your data is secure'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <section aria-label='Member testimonials' className='relative py-20 md:py-28 overflow-hidden'>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/30" />
      
      {/* Animated Background Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-200 to-accent-200 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.15, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 3 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-200 to-brand-200 rounded-full blur-3xl"
      />

      {/* Floating Elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 rounded-full ${
            i % 3 === 0 ? 'bg-brand-300' : i % 3 === 1 ? 'bg-accent-300' : 'bg-purple-300'
          } opacity-20`}
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className='relative mx-auto max-w-7xl px-4'>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-20'
        >
          {/* Badge with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-50 to-accent-50 border-2 border-brand-200 rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-5 h-5 text-brand-600" />
            </motion.div>
            <span className="text-sm font-bold text-brand-700">Member Success Stories</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
            </motion.div>
          </motion.div>
          
          {/* Enhanced Title */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.1] mb-8'>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real members,{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative inline-block"
            >
              <span className="text-gradient bg-gradient-to-r from-brand-600 via-accent-500 to-brand-600 bg-clip-text text-transparent bg-300%">
                real results
              </span>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1 }}
                className="absolute bottom-2 left-0 h-4 bg-gradient-to-r from-accent-200 via-accent-300 to-accent-200 -z-10 rounded-lg opacity-60"
              />
            </motion.span>
          </h2>
          
          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Discover how Essentials is transforming healthcare experiences for{' '}
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              className="font-bold text-brand-600"
            >
              thousands of members
            </motion.span>
            {' '}nationwide
          </motion.p>
        </motion.div>

        {/* Enhanced Member Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {memberStats.map((stat, i) => {
            const Icon = stat.icon
            const isHovered = hoveredStat === i
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                onHoverStart={() => setHoveredStat(i)}
                onHoverEnd={() => setHoveredStat(null)}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
              >
                {/* Background Card */}
                <div className={`glass border border-white/30 rounded-3xl p-6 md:p-8 text-center backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden ${
                  isHovered ? 'border-brand-300' : ''
                }`}>
                  
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Icon with Enhanced Animation */}
                  <motion.div
                    whileHover={{ 
                      rotate: 360, 
                      scale: 1.2,
                      transition: { duration: 0.6 }
                    }}
                    className={`relative z-10 w-16 h-16 mx-auto mb-4 rounded-3xl bg-gradient-to-r ${stat.color} shadow-2xl flex items-center justify-center group-hover:shadow-3xl transition-all duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    
                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        opacity: isHovered ? 0.3 : 0,
                        scale: isHovered ? 1.5 : 1
                      }}
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} blur-md`}
                    />
                  </motion.div>

                  {/* Stats Number with Counter Animation */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 150,
                      delay: i * 0.1 + 0.5 
                    }}
                    className="relative z-10 text-3xl md:text-4xl font-black text-slate-900 mb-2 group-hover:text-brand-700 transition-colors duration-300"
                  >
                    {stat.number}
                  </motion.div>

                  {/* Label */}
                  <div className="relative z-10 text-sm md:text-base font-bold text-slate-700 mb-2 group-hover:text-brand-600 transition-colors duration-300">
                    {stat.label}
                  </div>

                  {/* Description (appears on hover) */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: isHovered ? 1 : 0, 
                      height: isHovered ? 'auto' : 0 
                    }}
                    className="relative z-10 text-xs text-slate-500 font-medium overflow-hidden"
                  >
                    {stat.description}
                  </motion.div>

                  {/* Floating Sparkles */}
                  <motion.div
                    animate={{ 
                      opacity: isHovered ? 1 : 0,
                      rotate: [0, 360],
                      scale: isHovered ? [1, 1.2, 1] : 1
                    }}
                    transition={{ 
                      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1, repeat: Infinity }
                    }}
                    className="absolute top-3 right-3 z-10"
                  >
                    <Sparkles className="w-4 h-4 text-accent-400" />
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Enhanced Main Testimonial */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            onHoverStart={() => setIsAutoPlaying(false)}
            onHoverEnd={() => setIsAutoPlaying(true)}
          >
            {/* Main Testimonial Card */}
            <div className="relative glass border-2 border-white/40 rounded-3xl shadow-3xl backdrop-blur-xl overflow-hidden">
              {/* Dynamic Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-white/60 to-accent-50/40" />
              
              {/* Quote Icon with Animation */}
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute top-8 left-8 w-20 h-20 rounded-3xl bg-gradient-to-r from-brand-500 via-accent-500 to-brand-600 shadow-2xl flex items-center justify-center"
              >
                <Quote className="w-10 h-10 text-white" />
              </motion.div>

              {/* Auto-play Controls */}
              <div className="absolute top-8 right-8 flex gap-2">
                <motion.button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass border border-white/30 flex items-center justify-center text-slate-600 hover:text-brand-600 transition-colors shadow-lg"
                >
                  {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </motion.button>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-16 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -30, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    {/* Enhanced Stars */}
                    <div className="flex justify-center gap-2 mb-8">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, rotate: -180 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ 
                            delay: i * 0.1 + 0.5,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Enhanced Quote */}
                    <blockquote className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 mb-10 leading-tight max-w-4xl mx-auto'>
                      <motion.span
                        animate={{ 
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ 
                          duration: 10, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        className="bg-gradient-to-r from-slate-900 via-brand-700 to-slate-900 bg-300% bg-clip-text text-transparent"
                      >
                        "{currentTestimonial.quote}"
                      </motion.span>
                    </blockquote>

                    {/* Enhanced Member Info */}
                    <div className="flex items-center justify-center gap-6">
                      {/* Avatar */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-brand-400 via-accent-400 to-brand-500 flex items-center justify-center text-white font-black text-2xl shadow-2xl relative overflow-hidden"
                      >
                        {currentTestimonial.name.charAt(0)}
                        
                        {/* Animated Ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border-4 border-transparent border-t-white/30 border-r-white/20"
                        />
                      </motion.div>
                      
                      {/* Member Details */}
                      <div className="text-left">
                        <div className='text-xl md:text-2xl font-black text-slate-900 mb-1'>
                          {currentTestimonial.name}
                        </div>
                        <div className='text-slate-600 font-semibold flex items-center gap-2'>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {currentTestimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1, x: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-6 w-14 h-14 rounded-full glass border-2 border-white/40 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-300 transition-all duration-300 shadow-xl"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1, x: 3 }}
                  whileTap={{ scale: 0.9 }}
                  className="mr-6 w-14 h-14 rounded-full glass border-2 border-white/40 flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-300 transition-all duration-300 shadow-xl"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Floating Decorations */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0], 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-600 shadow-2xl flex items-center justify-center"
            >
              <Heart className="w-8 h-8 text-white" fill="currentColor" />
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 15, 0], 
                rotate: [0, -10, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 1 
              }}
              className="absolute -bottom-8 -left-8 w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-600 shadow-2xl flex items-center justify-center"
            >
              <TrendingUp className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Enhanced Progress Indicators */}
          <div className='mt-10 flex justify-center gap-4'>
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.8 }}
                className={`relative overflow-hidden transition-all duration-500 ${
                  i === currentIndex 
                    ? 'w-12 h-4 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg' 
                    : 'w-4 h-4 rounded-full bg-slate-200 hover:bg-slate-300 shadow-sm'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              >
                {i === currentIndex && (
                  <>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      key={`progress-${currentIndex}`}
                      transition={{ duration: 5 }}
                      className="absolute top-0 left-0 h-full bg-white/30 rounded-full"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.5, 0] }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500"
                    />
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto glass border border-white/30 rounded-3xl shadow-2xl backdrop-blur-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30" />
            
            {/* Animated Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 shadow-lg flex items-center justify-center opacity-30"
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
              >
                <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                  Join thousands
                </span>
                {' '}of satisfied members
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 mb-6"
              >
                Experience the difference that comprehensive healthcare support makes
              </motion.p>

              {/* Success Metrics */}
              <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 shadow-lg"
                >
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span className="text-slate-700">Instant enrollment</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 shadow-lg"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-slate-700">No contracts</span>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/60 rounded-full px-4 py-2 shadow-lg"
                >
                  <Heart className="w-4 h-4 text-red-500" />
                  <span className="text-slate-700">24/7 support</span>
                </motion.div>
              </div>
            </div>

            {/* Bottom decoration */}
            <motion.div 
              animate={{ 
                y: [0, 8, 0], 
                rotate: [0, -8, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut", 
                delay: 2 
              }}
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 shadow-lg flex items-center justify-center opacity-30"
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/essentials'
import { Star, Quote, ArrowRight, ArrowLeft, Heart, Users, Shield, Clock, CircleCheck as CheckCircle, Sparkles } from 'lucide-react'

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
    { icon: Users, number: '10,000+', label: 'Active Members' },
    { icon: Heart, number: '98%', label: 'Satisfaction Rate' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Shield, number: '100%', label: 'HIPAA Compliant' }
  ]

  return (
    <section aria-label='Member testimonials' className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50/40" />
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
            <Star className="w-4 h-4 text-brand-500" fill="currentColor" />
            <span className="text-sm font-semibold text-brand-700">Member Success Stories</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            Real members,{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              real results
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover how Essentials is transforming healthcare experiences for thousands of members nationwide
          </p>
        </motion.div>

        {/* Member Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {memberStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
            onHoverStart={() => setIsAutoPlaying(false)}
            onHoverEnd={() => setIsAutoPlaying(true)}
          >
            {/* Main Card */}
            <div className="relative glass border border-white/30 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30 opacity-60" />
              
              {/* Quote Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center"
              >
                <Quote className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 + 0.5 }}
                        >
                          <Star className="w-6 h-6 text-yellow-400" fill="currentColor" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className='text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 leading-relaxed'>
                      "{currentTestimonial.quote}"
                    </blockquote>

                    {/* Member Info */}
                    <div className="flex items-center justify-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-400 to-accent-400 flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      >
                        {currentTestimonial.name.charAt(0)}
                      </motion.div>
                      <div className="text-left">
                        <div className='text-lg font-bold text-slate-900'>{currentTestimonial.name}</div>
                        <div className='text-slate-600'>{currentTestimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <motion.button
                  onClick={prevTestimonial}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="ml-4 w-12 h-12 rounded-full glass border border-white/30 flex items-center justify-center text-slate-600 hover:text-brand-600 transition-colors shadow-lg"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <motion.button
                  onClick={nextTestimonial}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="mr-4 w-12 h-12 rounded-full glass border border-white/30 flex items-center justify-center text-slate-600 hover:text-brand-600 transition-colors shadow-lg"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 shadow-lg flex items-center justify-center"
            >
              <Heart className="w-6 h-6 text-white" fill="currentColor" />
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-400 to-brand-500 shadow-lg flex items-center justify-center"
            >
              <CheckCircle className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Progress Indicators */}
          <div className='mt-8 flex justify-center gap-3'>
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex 
                    ? 'bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg' 
                    : 'bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`View testimonial ${i + 1}`}
              >
                {i === currentIndex && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 animate-ping"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4 shadow-lg">
            <Sparkles className="w-5 h-5 text-brand-500" />
            <span className="text-lg font-semibold text-slate-700">Join thousands of satisfied members</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
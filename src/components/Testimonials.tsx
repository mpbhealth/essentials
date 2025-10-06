'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/data/essentials'
import { Star, Quote, ArrowRight, ArrowLeft, Heart, Users, Shield, Clock, CircleCheck as CheckCircle, Sparkles, Award, ChevronLeft, ChevronRight } from 'lucide-react'

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
    { 
      icon: Users, 
      number: '10,000+', 
      label: 'Active Members',
      description: 'Trusted nationwide'
    },
    { 
      icon: Heart, 
      number: '98%', 
      label: 'Satisfaction Rate',
      description: 'Exceptional experience'
    },
    { 
      icon: Clock, 
      number: '24/7', 
      label: 'Support Available',
      description: 'Always there for you'
    },
    { 
      icon: Shield, 
      number: '100%', 
      label: 'HIPAA Compliant',
      description: 'Your data is secure'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section aria-label='Member testimonials' className='relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-slate-50 to-white'>
      {/* Subtle background elements */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-100 rounded-full blur-3xl opacity-20" />

      <div className='relative mx-auto max-w-7xl px-4'>
        {/* Championship Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-20'
        >
          {/* Championship Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white border-2 border-brand-200 rounded-full px-6 py-3 mb-8 shadow-lg"
          >
            <Award className="w-5 h-5 text-brand-600" />
            <span className="text-sm font-bold text-brand-700">Member Success Stories</span>
          </motion.div>
          
          {/* Championship Title */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight mb-6'>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Real members,{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent"
            >
              real results
            </motion.span>
          </h2>
          
          {/* Championship Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed"
          >
            Discover how Essentials is transforming healthcare experiences for{' '}
            <span className="font-bold text-brand-600">thousands of members</span>
            {' '}nationwide
          </motion.p>
        </motion.div>

        {/* Championship Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {memberStats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="text-center group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Clean Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-md flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Championship Numbers */}
                  <div className="text-3xl font-black text-slate-900 mb-2">
                    {stat.number}
                  </div>

                  {/* Clean Label */}
                  <div className="text-sm font-bold text-slate-700 mb-2">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Championship 3-Card Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Cards Container */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {testimonials.map((testimonial, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="relative bg-white border border-slate-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                      {/* Quote Icon */}
                      <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-md flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 p-8">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star key={starIdx} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className='text-lg font-bold text-slate-900 mb-6 leading-relaxed min-h-[120px]'>
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Member */}
                        <div className="flex items-center gap-3 pt-6 border-t border-slate-100">
                          {/* Avatar */}
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                            {testimonial.name.charAt(0)}
                          </div>

                          {/* Member Details */}
                          <div>
                            <div className='text-base font-black text-slate-900'>
                              {testimonial.name}
                            </div>
                            <div className='text-sm text-slate-600 font-medium flex items-center gap-1'>
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/50 to-accent-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-xl flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-400 hover:scale-110 transition-all duration-200 z-20"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border-2 border-slate-200 shadow-xl flex items-center justify-center text-slate-600 hover:text-brand-600 hover:border-brand-400 hover:scale-110 transition-all duration-200 z-20"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className='mt-8 flex justify-center gap-2'>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-brand-500 to-accent-500'
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`View testimonial set ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Championship CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-lg p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
                Join thousands
              </span>
              {' '}of satisfied members
            </h3>
            
            <p className="text-lg text-slate-600 mb-6">
              Experience the difference that comprehensive healthcare support makes
            </p>

            {/* Championship Features */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold">
              <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-slate-700">Instant enrollment</span>
              </div>
              
              <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-slate-700">No contracts</span>
              </div>
              
              <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="text-slate-700">24/7 support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
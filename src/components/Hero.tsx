'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button, PremiumButton } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { price, pitch } from '@/data/essentials'
import { Sparkles, Shield, Heart, Zap, Users, Clock, Phone, Video, MessageSquare, Star, Award, ArrowRight, CircleCheck as CheckCircle, Crown } from 'lucide-react'

export function Hero() {
  const [activeFeature, setActiveFeature] = useState(0)
  const href = 'https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'

  const features = [
    { icon: Clock, text: '24/7 Virtual Care', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, text: 'Mental Health Support', color: 'from-red-500 to-pink-500' },
    { icon: Users, text: 'Expert Concierge', color: 'from-green-500 to-emerald-500' },
    { icon: Shield, text: 'Smart Savings', color: 'from-purple-500 to-indigo-500' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [features.length])

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }
      }
    }
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Championship Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-50/30 to-accent-50/40" />
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-brand-400/20 to-accent-400/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-400/20 to-brand-400/20 rounded-full blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            {/* Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 glass border border-white/30 rounded-full px-6 py-3 shadow-xl backdrop-blur-xl bg-white/70 group hover:bg-white/90 transition-all duration-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center"
                >
                  <Crown className="w-4 h-4 text-white" />
                </motion.div>
                <span className="font-bold text-brand-700 text-sm sm:text-base">
                  Essentials by MPB Health
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-tight"
            >
              <span className="text-gradient bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                {pitch?.headline ?? 'Mental, Physical, Balance!'}
              </span>
              <br />
              <span className="text-slate-800">One membership.</span>
              <br />
              <span className="text-slate-700">Real support.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {pitch?.sub ?? 'Unlimited $0 virtual care plus expert concierge help and smart savings—so you can handle life\'s health moments quickly and affordably.'}
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              variants={itemVariants}
              className="mb-10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {features.map((feature, i) => {
                  const Icon = feature.icon
                  const isActive = activeFeature === i
                  
                  return (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: isActive ? 1.05 : 1,
                        y: isActive ? -5 : 0
                      }}
                      className={`glass border border-white/30 rounded-2xl p-4 text-center backdrop-blur-xl transition-all duration-500 ${
                        isActive ? 'bg-white/90 shadow-xl' : 'bg-white/70'
                      }`}
                    >
                      <motion.div
                        animate={{ 
                          rotate: isActive ? [0, 360] : 0,
                          scale: isActive ? [1, 1.2, 1] : 1
                        }}
                        transition={{ duration: 0.8 }}
                        className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-r ${feature.color} shadow-lg flex items-center justify-center`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className={`text-xs sm:text-sm font-bold transition-colors duration-300 ${
                        isActive ? 'text-brand-700' : 'text-slate-700'
                      }`}>
                        {feature.text}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8"
            >
              <motion.a 
                href={href} 
                onClick={() => enrollClick('hero_primary')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group w-full sm:w-auto"
              >
                <PremiumButton className="w-full sm:w-auto text-lg px-8 py-4 shadow-2xl hover:shadow-3xl">
                  <div className="flex items-center justify-center gap-3">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span>Enroll Today — {price?.display ?? '$49.95/month'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </PremiumButton>
              </motion.a>
              
              <motion.a 
                href="#details"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto"
              >
                <Button className="w-full sm:w-auto border-2 border-slate-300 bg-white/80 text-slate-700 hover:border-brand-400 hover:text-brand-700 hover:bg-white px-8 py-4 text-lg backdrop-blur-sm">
                  <div className="flex items-center justify-center gap-2">
                    See What's Included
                    <CheckCircle className="w-4 h-4 group-hover:text-green-500 transition-colors" />
                  </div>
                </Button>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="font-medium">No contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-500" />
                <span className="font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-500" />
                <span className="font-medium">10,000+ members</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Interactive Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative glass border border-white/30 rounded-3xl shadow-3xl backdrop-blur-xl bg-white/80 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 to-accent-50/40" />
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 right-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-brand-400 to-accent-500 shadow-xl flex items-center justify-center z-10"
              >
                <Zap className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 shadow-xl flex items-center justify-center z-10"
              >
                <Heart className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 text-center">
                {/* Visual Icons */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[Phone, Video, MessageSquare].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                      className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 shadow-lg flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-slate-600" />
                    </motion.div>
                  ))}
                </div>

                {/* Main Visual Text */}
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4">🩺💬💪</div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                    Complete Healthcare in Your Pocket
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                    Unlimited $0 virtual urgent care, primary care, behavioral health, 
                    expert concierge help, and smart savings—all on your phone, available 24/7.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200">
                  {[
                    { label: 'Response Time', value: '< 2min', color: 'text-green-600' },
                    { label: 'Availability', value: '24/7/365', color: 'text-blue-600' },
                    { label: 'Satisfaction', value: '98%', color: 'text-purple-600' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <div className={`text-lg md:text-xl font-black ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
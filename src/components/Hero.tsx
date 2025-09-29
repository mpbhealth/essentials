'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button, GhostButton } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { price, pitch } from '@/data/essentials'
import { ArrowRight, Shield, Clock, Users } from 'lucide-react'

export function Hero() {
  const href = process.env.NEXT_PUBLIC_ENROLL_URL || '#'
  
  return (
    <section className="relative overflow-hidden hero-gradient min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                <Shield className="w-4 h-4" />
                Essentials by MPB Health
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]"
            >
              <span className="text-gradient">{pitch.headline.split(' ').slice(0, 2).join(' ')}</span>{' '}
              <span className="relative">
                {pitch.headline.split(' ').slice(2).join(' ')}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-2 left-0 h-3 bg-accent-200 -z-10 rounded-sm"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl"
            >
              {pitch.sub}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 flex items-center gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-500" />
                <span>24/7 Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-500" />
                <span>10,000+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-500" />
                <span>HIPAA Compliant</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <motion.a 
                href={href} 
                onClick={() => enrollClick('hero_primary')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Button className="btn-premium group-hover:shadow-2xl group-hover:-translate-y-0.5 transition-all duration-300 text-lg px-8 py-4">
                  Enroll Today — {price.display}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.a>
              
              <motion.a 
                href="#details"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GhostButton className="text-lg px-6 py-4 hover:bg-white hover:shadow-lg transition-all duration-300">
                  See what's included
                </GhostButton>
              </motion.a>
            </motion.div>

            {/* Disclaimer */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-xs text-slate-400"
            >
              No long-term contracts. Cancel anytime. Money-back guarantee.
            </motion.p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative perspective-1000"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateX: 5 }}
                className="relative aspect-[4/3] rounded-3xl glass border border-white/30 shadow-2xl backdrop-blur-xl p-8 md:p-12 will-change-transform"
              >
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-accent-500 rounded-2xl p-3 shadow-lg"
                >
                  <span className="text-2xl">💬</span>
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 bg-brand-500 rounded-2xl p-3 shadow-lg"
                >
                  <span className="text-2xl text-white">🩺</span>
                </motion.div>

                {/* Content */}
                <div className="text-center h-full flex flex-col justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-7xl md:text-8xl mb-6 animate-bounce-gentle"
                  >
                    🏥
                  </motion.div>
                  
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="text-xl md:text-2xl font-bold text-slate-800 mb-4"
                  >
                    Healthcare Reimagined
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="text-slate-600 leading-relaxed"
                  >
                    Virtual urgent care, primary care, mental health, concierge support, and smart savings—all in your pocket.
                  </motion.p>
                </div>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30 rounded-3xl pointer-events-none" />
              </motion.div>

              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-100 to-accent-100 rounded-3xl -z-10 blur-xl opacity-30" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
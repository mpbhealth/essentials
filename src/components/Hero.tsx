'use client'
import React from 'react'
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion'
import { Button, GhostButton } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { pricing, pitch } from '@/data/essentials'
import { ArrowRight, Shield, Clock, Users, Sparkles, Heart, Stethoscope, Phone, Video, MessageSquare, Zap, Star, Award, TrendingUp, Globe, Activity, UserCheck } from 'lucide-react'

const FloatingElement = ({ children, delay = 0, duration = 4 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
  >
    {children}
  </motion.div>
)

const InteractiveServiceCard = ({ icon: Icon, title, description, color, delay }: {
  icon: any, title: string, description: string, color: string, delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 50 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      delay: delay + 1.2 
    }}
    whileHover={{ 
      scale: 1.05, 
      y: -5,
      transition: { duration: 0.2 }
    }}
    className="glass border border-white/30 rounded-2xl p-6 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
  >
    <motion.div
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${color} shadow-lg flex items-center justify-center mb-4 group-hover:shadow-xl transition-shadow duration-300`}
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.div>
    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
      {title}
    </h4>
    <p className="text-sm text-slate-600 leading-relaxed">
      {description}
    </p>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
  </motion.div>
)

export function Hero() {
  const href = 'https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'
  
  const services = [
    {
      icon: Stethoscope,
      title: "Virtual Care",
      description: "24/7 urgent care & primary care",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Mental Health",
      description: "Behavioral health support",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Concierge",
      description: "Expert healthcare navigation",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const stats = [
    { icon: Users, value: "10K+", label: "Members" },
    { icon: Star, value: "4.9", label: "Rating" },
    { icon: Globe, value: "24/7", label: "Access" },
    { icon: Shield, value: "100%", label: "Secure" }
  ]

  return (
    <section className="relative overflow-hidden hero-gradient min-h-[95vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Enhanced Background Orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-brand-300 to-brand-100 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-gradient-to-br from-accent-300 to-accent-100 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-brand-300' : 'bg-accent-300'} opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 max-w-4xl px-4 sm:px-0"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1,
                type: "spring",
                stiffness: 150
              }}
              className="mb-6"
            >
              <motion.span 
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-50 to-accent-50 border-2 border-brand-200 text-brand-700 px-6 py-3 text-sm font-bold backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Shield className="w-5 h-5" />
                </motion.div>
                <span>Essentials by MPB Health</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
              </motion.span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6 md:mb-8"
            >
              <motion.span 
                className="text-gradient bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: '300% 100%' }}
              >
                {pitch.headline.split(' ').slice(0, 2).join(' ')}
              </motion.span>
              <br />
              <span className="relative inline-block">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {pitch.headline.split(' ').slice(2).join(' ')}
                </motion.span>
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: '100%', opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  className="absolute bottom-2 left-0 h-4 bg-gradient-to-r from-accent-200 via-accent-300 to-accent-200 -z-10 rounded-lg"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-6 md:mb-8 px-4 sm:px-0"
            >
              {pitch.sub}
            </motion.p>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.8 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex flex-col items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <span className="text-2xl font-black text-slate-900 group-hover:text-brand-600 transition-colors">
                        {stat.value}
                      </span>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button 
                href={href} 
                onClick={enrollClick}
                className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Enroll Today — Starting ${pricing.plans[0].price}/mo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <GhostButton className="text-lg px-8 py-4 border-2">
                <Sparkles className="w-5 h-5 mr-2" />
                See What's Included
              </GhostButton>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap items-center gap-4 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>No contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-500" />
                <span>10,000+ members</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.img
                  src="/Cell Phone(1).png"
                  alt="MPB Health mobile app dashboard"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-300 to-accent-300 rounded-full blur-3xl -z-10"
              />

              {/* Decorative Elements */}
              <FloatingElement delay={0} duration={5}>
                <div className="absolute top-10 -left-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-xl flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
              </FloatingElement>

              <FloatingElement delay={1} duration={6}>
                <div className="absolute bottom-20 -right-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
              </FloatingElement>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
                
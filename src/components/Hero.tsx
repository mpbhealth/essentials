'use client'
import React from 'react'
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion'
import { Button, GhostButton } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { price, pitch } from '@/data/essentials'
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
  const href = process.env.NEXT_PUBLIC_ENROLL_URL || '#'
  
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
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 max-w-4xl"
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
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] mb-8"
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
              className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl mb-8"
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
                      <div className="font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-600">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8"
            >
              <motion.a 
                href={href} 
                onClick={() => enrollClick('hero_primary')}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className="relative overflow-hidden bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500 bg-300% text-white font-bold rounded-2xl px-10 py-5 shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Zap className="w-6 h-6" />
                    Enroll Today — {price.display}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full opacity-80"
                  />
                </div>
              </motion.a>
              
              <motion.a 
                href="#details"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <GhostButton className="text-lg px-8 py-5 hover:bg-white hover:shadow-xl transition-all duration-300 border-2 border-slate-300 hover:border-brand-400 group-hover:text-brand-600">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    See what's included
                  </span>
                </GhostButton>
              </motion.a>
            </motion.div>

            {/* Disclaimer */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-2 text-sm text-slate-500 bg-white/40 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 max-w-fit"
            >
              <UserCheck className="w-4 h-4 text-green-500" />
              <span>No contracts • Cancel anytime • Money-back guarantee</span>
            </motion.p>
          </motion.div>

          {/* Enhanced Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-5 relative perspective-1000"
          >
            {/* Interactive Service Cards */}
            <div className="space-y-6">
              {services.map((service, i) => (
                <InteractiveServiceCard
                  key={i}
                  {...service}
                  delay={i * 0.2}
                />
              ))}
            </div>

            {/* Main Visual Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="mt-8 relative"
            >
              <motion.div 
                whileHover={{ scale: 1.03, rotateY: 5 }}
                className="relative rounded-3xl glass border-2 border-white/40 shadow-2xl backdrop-blur-xl p-8 will-change-transform overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-white/20 to-accent-50/40" />

                {/* Header */}
                <div className="relative z-10 text-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-6xl mb-4"
                  >
                    🏥
                  </motion.div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Healthcare Reimagined
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Complete care in your pocket
                  </p>
                </div>

                {/* Interactive Access Methods */}
                <div className="relative z-10 flex justify-center gap-4 mb-6">
                  {[
                    { icon: Phone, label: 'Call', color: 'from-blue-500 to-cyan-500' },
                    { icon: Video, label: 'Video', color: 'from-purple-500 to-indigo-500' },
                    { icon: MessageSquare, label: 'Chat', color: 'from-green-500 to-emerald-500' }
                  ].map((method, i) => {
                    const Icon = method.icon
                    return (
                      <motion.div
                        key={method.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2.2 + i * 0.2 }}
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${method.color} shadow-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300 group`}
                      >
                        <Icon className="w-6 h-6 text-white mb-1" />
                        <span className="text-xs text-white font-medium">{method.label}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Floating Action Elements */}
                <FloatingElement delay={2.5}>
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-accent-400 to-accent-500 rounded-2xl p-4 shadow-xl">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                </FloatingElement>

                <FloatingElement delay={3} duration={5}>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-brand-400 to-brand-500 rounded-2xl p-4 shadow-xl">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </FloatingElement>

                <FloatingElement delay={3.5} duration={6}>
                  <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-3 shadow-xl">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </FloatingElement>

                {/* Premium Glow Effect */}
                <motion.div
                  animate={{ 
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-accent-500/20 to-brand-500/20 rounded-3xl blur-xl pointer-events-none"
                />
              </motion.div>
              
              {/* Background decoration with enhanced effects */}
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute -inset-8 bg-gradient-to-r from-brand-100 via-accent-100 to-brand-100 rounded-3xl -z-10 blur-2xl opacity-40"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 bg-white/60 backdrop-blur-xl border-2 border-white/40 rounded-3xl px-12 py-6 shadow-2xl">
            {[
              { icon: Shield, label: 'HIPAA Secure', color: 'text-blue-600' },
              { icon: Clock, label: '24/7 Available', color: 'text-green-600' },
              { icon: Users, label: 'Expert Team', color: 'text-purple-600' },
              { icon: Award, label: 'Premium Care', color: 'text-orange-600' }
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.7 + i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-10 h-10 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:shadow-xl transition-all duration-300`}
                  >
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </motion.div>
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Interactive Elements */}
      <div className="absolute top-1/4 left-10 pointer-events-none">
        <FloatingElement delay={4}>
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-400 to-brand-500 shadow-xl flex items-center justify-center opacity-80">
            <Heart className="w-8 h-8 text-white" fill="currentColor" />
          </div>
        </FloatingElement>
      </div>
      
      <div className="absolute bottom-1/4 right-10 pointer-events-none">
        <FloatingElement delay={5} duration={6}>
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-accent-400 to-accent-500 shadow-xl flex items-center justify-center opacity-80">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </FloatingElement>
      </div>
      
      <div className="absolute top-1/2 right-1/4 pointer-events-none">
        <FloatingElement delay={6} duration={5}>
          <div className="w-8 h-8 rounded-xl bg-white shadow-lg flex items-center justify-center opacity-90">
            <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
          </div>
        </FloatingElement>
      </div>
    </section>
  )
}
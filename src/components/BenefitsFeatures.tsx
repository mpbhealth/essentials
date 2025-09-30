'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'
import { benefits, features } from '@/data/essentials'
import { TrendingUp, Users, Shield, Zap, CircleCheck as CheckCircle, Sparkles, ArrowRight, Crown, Globe, Layers, Smartphone, Heart, DollarSign, Award, Settings } from 'lucide-react'

const debtDismissalIcons = [
  DollarSign, // Reduce Medical Bills
  Shield,     // Financial Protection
  Users,      // Expert Advocacy
  CheckCircle // Proven Results
]

const debtDismissalBenefits = [
  'Reduce Medical Bills',
  'Financial Protection', 
  'Expert Advocacy',
  'Proven Results'
]

const debtDismissalFeatures = [
  'Eligibility Assessment',
  'Professional Negotiation',
  'Payment Plan Setup', 
  'Ongoing Support'
]

export function BenefitsFeatures() {
  const [activeBenefit, setActiveBenefit] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const cardVariants = {
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

  return (
    <section ref={ref} className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/30" />
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      
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
            <Award className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Premium Benefits & Features</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            Get help with{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              medical debt
            </span>
            <br />
            <span className="text-slate-700">through our Debt Dismissal program</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            When medical bills pile up, our Debt Dismissal program helps eligible members 
            reduce or eliminate large medical and hospital bills through proven advocacy and negotiation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Debt Dismissal Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Debt Dismissal Header */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 shadow-lg flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className='text-2xl md:text-3xl font-black text-slate-900'>Debt Relief</h3>
                  <p className="text-slate-600 font-medium">Financial protection when you need it</p>
                </div>
              </div>
            </motion.div>

            {/* Debt Dismissal Benefits Grid */}
            <div className="space-y-6">
              {debtDismissalBenefits.map((benefit, i) => {
                const Icon = debtDismissalIcons[i]
                const isActive = activeBenefit === i
                
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    onHoverStart={() => setActiveBenefit(i)}
                    className="group"
                  >
                    <Card className={`transition-all duration-500 border-2 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                      isActive ? 'border-brand-300 shadow-xl scale-[1.02]' : 'border-transparent hover:border-brand-200'
                    }`}>
                      <CardBody className="relative overflow-hidden p-6">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-50/30 to-accent-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-14 h-14 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors duration-300">
                              {benefit}
                            </h4>
                            
                            {/* Dynamic descriptions */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {i === 0 && "Significantly reduce or potentially eliminate large hospital and medical bills through proven negotiation strategies"}
                              {i === 1 && "Protect your financial future from overwhelming medical debt that could impact your family's stability"}
                              {i === 2 && "Professional advocates work directly with hospitals and providers on your behalf to secure the best outcomes"}
                              {i === 3 && "Track record of successful debt reductions and dismissals for qualifying members nationwide"}
                            </p>
                            
                            {/* Progress Indicator */}
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isActive ? '100%' : '20%' }}
                              className="mt-3 h-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-500"
                            />
                          </div>
                          
                          {/* Arrow */}
                          <motion.div
                            animate={{ x: isActive ? 5 : 0 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <ArrowRight className="w-5 h-5 text-brand-500" />
                          </motion.div>
                        </div>
                        
                        {/* Active Glow Effect */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: isActive ? 0.1 : 0, 
                            scale: isActive ? 1 : 0.8 
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 pointer-events-none"
                        />
                      </CardBody>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Process Header */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-r from-accent-500 to-accent-600 shadow-lg flex items-center justify-center"
                >
                  <Crown className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className='text-2xl md:text-3xl font-black text-slate-900'>Our Process</h3>
                  <p className="text-slate-600 font-medium">How we help resolve your debt</p>
                </div>
              </div>
            </motion.div>

            {/* Process Grid */}
            <div className="space-y-6">
              {debtDismissalFeatures.map((feature, i) => {
                const Icon = debtDismissalIcons[i]
                const isActive = activeFeature === i
                
                return (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    onHoverStart={() => setActiveFeature(i)}
                    className="group"
                  >
                    <Card className={`transition-all duration-500 border-2 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                      isActive ? 'border-accent-300 shadow-xl scale-[1.02]' : 'border-transparent hover:border-accent-200'
                    }`}>
                      <CardBody className="relative overflow-hidden p-6">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-50/30 to-brand-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative z-10 flex items-center gap-4">
                          {/* Icon */}
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className="w-14 h-14 rounded-2xl bg-gradient-to-r from-accent-500 to-brand-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </motion.div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-accent-700 transition-colors duration-300">
                              {feature}
                            </h4>
                            
                            {/* Dynamic descriptions */}
                            <p className="text-sm text-slate-600 leading-relaxed">
                              {i === 0 && "We review your financial situation and medical bills to determine qualification for debt dismissal programs"}
                              {i === 1 && "Experienced advocates negotiate directly with hospitals and medical providers to reduce or eliminate your debt"}
                              {i === 2 && "If needed, we help establish manageable payment plans that work within your budget and financial capacity"}
                              {i === 3 && "Continued support throughout the process with regular updates and guidance until resolution is achieved"}
                            </p>
                            
                            {/* Progress Indicator */}
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: isActive ? '100%' : '20%' }}
                              className="mt-3 h-1 bg-gradient-to-r from-accent-500 to-brand-500 rounded-full transition-all duration-500"
                            />
                          </div>
                          
                          {/* Arrow */}
                          <motion.div
                            animate={{ x: isActive ? 5 : 0 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            <ArrowRight className="w-5 h-5 text-accent-500" />
                          </motion.div>
                        </div>
                        
                        {/* Active Glow Effect */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ 
                            opacity: isActive ? 0.1 : 0, 
                            scale: isActive ? 1 : 0.8 
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-accent-500 to-brand-500 pointer-events-none"
                        />
                      </CardBody>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Connection Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white/60 backdrop-blur-sm border border-white/30 rounded-3xl px-10 py-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-brand-500 rounded-full animate-pulse" />
              <span className="font-semibold text-slate-700">Debt Relief</span>
            </div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-slate-400"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
            
            <div className="flex items-center gap-3">
              <span className="font-semibold text-slate-700">Expert Process</span>
              <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-6 h-6 text-brand-500" />
            </motion.div>
            
            <span className="font-bold text-transparent bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text">
              Financial Protection
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
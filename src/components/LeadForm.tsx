'use client'
import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { leadSubmit } from '@/lib/track'
import { MessageSquare, User, Mail, Phone, MessageCircle, Send, CircleCheck as CheckCircle, Sparkles, Users, Clock, Shield, ArrowRight } from 'lucide-react'

export function LeadForm() {
  const [sent, setSent] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const formFields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Full name',
      icon: User,
      required: true,
      label: 'Full name'
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email address',
      icon: Mail,
      required: true,
      label: 'Email'
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Phone number (optional)',
      icon: Phone,
      required: false,
      label: 'Phone'
    },
    {
      name: 'message',
      type: 'textarea',
      placeholder: 'Tell us what you need help with (optional)',
      icon: MessageCircle,
      required: false,
      label: 'Message'
    }
  ]

  const advisorStats = [
    { icon: Users, label: 'Healthcare Experts', value: '50+' },
    { icon: Clock, label: 'Avg Response Time', value: '<2hr' },
    { icon: Shield, label: 'HIPAA Compliant', value: '100%' }
  ]

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

  return (
    <section aria-label='Talk to an advisor' className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-50/30" />
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

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
            <MessageSquare className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Expert Healthcare Guidance</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            Talk to a{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              healthcare advisor
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Have questions about Essentials? Our certified healthcare advisors will help you understand 
            if our membership is right for your needs—completely free consultation.
          </p>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {advisorStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl px-6 py-3 shadow-lg group hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  className='relative glass border border-white/30 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden p-8 md:p-12 text-center'
                >
                  {/* Success Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-emerald-50/30" />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg flex items-center justify-center"
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                      className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      Request Received! 🎉
                    </h3>
                    
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                      Thanks! We received your request. Our healthcare advisor team will reach out shortly 
                      to discuss how Essentials can support your healthcare needs.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span>Response within 2 hours</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>100% confidential</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='relative glass border border-white/30 rounded-3xl shadow-2xl backdrop-blur-xl overflow-hidden'
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30" />
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [0, -8, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-400 to-accent-500 shadow-lg flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>

                  <form 
                    name='advisor' 
                    method='POST' 
                    data-netlify='true' 
                    data-netlify-honeypot='trap' 
                    className='relative z-10 p-8 md:p-12 space-y-6' 
                    onSubmit={() => {
                      leadSubmit()
                      setTimeout(() => setSent(true), 300)
                    }}
                  >
                    <input type='hidden' name='form-name' value='advisor' />
                    <p className='hidden'>
                      <label>Don't fill this out if you're human: <input name='trap' /></label>
                    </p>

                    {/* Form Fields */}
                    <div className="space-y-6">
                      {formFields.map((field, i) => {
                        const Icon = field.icon
                        const isFocused = focusedField === field.name
                        const hasValue = formData[field.name as keyof typeof formData].length > 0

                        return (
                          <motion.div
                            key={field.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group"
                          >
                            {field.type === 'textarea' ? (
                              <div className="relative">
                                <motion.div
                                  animate={{ 
                                    scale: isFocused ? 1.05 : 1,
                                    boxShadow: isFocused 
                                      ? '0 0 0 2px rgba(10, 78, 142, 0.2)' 
                                      : '0 0 0 0px transparent'
                                  }}
                                  className="relative"
                                >
                                  <textarea
                                    name={field.name}
                                    aria-label={field.label}
                                    placeholder={field.placeholder}
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                                    onFocus={() => setFocusedField(field.name)}
                                    onBlur={() => setFocusedField(null)}
                                    className='w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-brand-300 focus:bg-white focus:outline-none resize-none min-h-32'
                                  />
                                  <motion.div
                                    animate={{ 
                                      color: isFocused || hasValue ? '#0a4e8e' : '#64748b',
                                      scale: isFocused ? 1.1 : 1
                                    }}
                                    className="absolute left-4 top-4"
                                  >
                                    <Icon className="w-6 h-6" />
                                  </motion.div>
                                </motion.div>
                              </div>
                            ) : (
                              <div className="relative">
                                <motion.div
                                  animate={{ 
                                    scale: isFocused ? 1.05 : 1,
                                    boxShadow: isFocused 
                                      ? '0 0 0 2px rgba(10, 78, 142, 0.2)' 
                                      : '0 0 0 0px transparent'
                                  }}
                                  className="relative"
                                >
                                  <input
                                    required={field.required}
                                    name={field.name}
                                    type={field.type}
                                    aria-label={field.label}
                                    placeholder={field.placeholder}
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                                    onFocus={() => setFocusedField(field.name)}
                                    onBlur={() => setFocusedField(null)}
                                    className='w-full pl-14 pr-4 py-4 rounded-2xl border-2 border-slate-200 bg-white/70 backdrop-blur-sm transition-all duration-300 focus:border-brand-300 focus:bg-white focus:outline-none'
                                  />
                                  <motion.div
                                    animate={{ 
                                      color: isFocused || hasValue ? '#0a4e8e' : '#64748b',
                                      scale: isFocused ? 1.1 : 1
                                    }}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2"
                                  >
                                    <Icon className="w-6 h-6" />
                                  </motion.div>
                                </motion.div>

                                {/* Animated Border */}
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: isFocused ? '100%' : '0%' }}
                                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full transition-all duration-300"
                                />
                              </div>
                            )}
                          </motion.div>
                        )
                      })}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className='w-full group relative overflow-hidden bg-gradient-to-r from-brand-500 to-accent-500 text-white font-semibold rounded-2xl px-8 py-4 shadow-lg hover:shadow-2xl transition-all duration-300'
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Request a Call
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </motion.button>

                    {/* Privacy Notice */}
                    <p className="text-xs text-slate-500 text-center leading-relaxed">
                      <Shield className="w-3 h-3 inline mr-1" />
                      Your information is secure and will only be used to connect you with a healthcare advisor. 
                      We respect your privacy and follow HIPAA guidelines.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Info Card */}
            <div className="glass border border-white/30 rounded-3xl shadow-xl backdrop-blur-xl p-8 md:p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/20 to-accent-50/20" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                  Why talk to an advisor?
                </h3>

                <div className="space-y-6">
                  {[
                    { icon: MessageSquare, title: 'Personalized Guidance', desc: 'Get tailored advice based on your specific healthcare needs and budget' },
                    { icon: Users, title: 'Expert Knowledge', desc: 'Our advisors are certified healthcare professionals with years of experience' },
                    { icon: Shield, title: 'No Pressure', desc: 'Free consultation with no obligation - we\'re here to help you make the right choice' }
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="flex items-start gap-4 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                          className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-700 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-slate-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Avg Call Duration', value: '15 min', icon: Clock },
                { label: 'Member Satisfaction', value: '98%', icon: CheckCircle }
              ].map((stat, i) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="glass border border-white/30 rounded-2xl p-6 text-center group hover:shadow-xl transition-shadow duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-brand-500 to-accent-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
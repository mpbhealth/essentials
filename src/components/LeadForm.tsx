'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, CircleCheck as CheckCircle, Sparkles, Users, Clock, Shield, Phone, Mail, MapPin } from 'lucide-react'

export function LeadForm() {
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

          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="glass border border-white/30 rounded-3xl shadow-xl backdrop-blur-xl p-6 md:p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30" />
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-900 mb-6 text-center">Contact Us</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Phone */}
                  <motion.a
                    href="tel:8558164650"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                        (855) 816-4650
                      </div>
                      <div className="text-xs text-slate-600">Call us</div>
                    </div>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:info@mympb.com"
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                        info@mympb.com
                      </div>
                      <div className="text-xs text-slate-600">Email us</div>
                    </div>
                  </motion.a>

                  {/* Location */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300"
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
                        5301 N Federal Hwy
                      </div>
                      <div className="text-xs text-slate-600">Boca Raton, FL 33487</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating decoration */}
              <motion.div 
                animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-gradient-to-r from-accent-400 to-accent-500 shadow-lg flex items-center justify-center opacity-30"
              >
                <MessageSquare className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>

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
            <motion.div
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
                className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-400 to-accent-500 shadow-xl hover:shadow-2xl flex items-center justify-center z-30 transition-shadow duration-300"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>

              {/* Cognito Forms Embed */}
              <div className='relative z-10 p-8 md:p-12'>
                <div 
                  dangerouslySetInnerHTML={{
                    __html: '<script src="https://www.cognitoforms.com/f/seamless.js" data-key="K4Fk3PtQHE-6M-fMiX2fVA" data-form="469"></script>'
                  }}
                />
                
                {/* Privacy Notice */}
                <div className="mt-6 text-xs text-slate-500 text-center leading-relaxed">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Your information is secure and will only be used to connect you with a healthcare advisor. 
                  We respect your privacy and follow HIPAA guidelines.
                </div>
              </div>
            </motion.div>
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
'use client'
import React from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'

/** Benefit-focused cards replacing service features. */
const items = [
  {
    tag: { label: 'Immediate Peace of Mind', color: 'bg-orange-500' },
    icon: '🩺',
    title: 'Care in Minutes',
    blurb:
      'Start a visit 24/7 from your phone—no waiting rooms, no guessing. Get answers, scripts, and next steps fast for everyday issues.',
    sub: 'When you need help right now',
    meta: 'Available 24/7'
  },
  {
    tag: { label: 'Ongoing Wellness', color: 'bg-indigo-500' },
    icon: '🧠',
    title: 'Feel Balanced Again',
    blurb:
      'Talk to a counselor virtually—up to the session limits in your membership—to lower stress, sleep better, and build lasting resilience.',
    sub: 'Mental & emotional health that fits life',
    meta: 'Easy to schedule'
  },
  {
    tag: { label: 'Life Support', color: 'bg-emerald-500' },
    icon: '💚',
    title: 'Less Money Stress',
    blurb:
      'Expert guidance for eldercare, budgeting, and financial wellness—so big decisions feel simpler and you keep more of what you earn.',
    sub: 'Clear options, confident choices',
    meta: 'Human experts'
  },
  {
    tag: { label: 'Growth & Learning', color: 'bg-fuchsia-500' },
    icon: '🎓',
    title: 'Grow Your Skills',
    blurb:
      'A training library for work & life—level up communication, leadership, and wellbeing with bite-size lessons you can track.',
    sub: 'Small steps, real progress',
    meta: 'On-demand'
  },
  {
    tag: { label: 'Smart Navigation', color: 'bg-amber-500' },
    icon: '🧭',
    title: 'Pay Fair Prices',
    blurb:
      'Concierge finds quality options for labs, imaging, and prescriptions—helping you avoid surprise bills and overpaying. We can also guide hospital financial assistance where eligible.',
    sub: 'Clarity before you book',
    meta: '1:1 guidance'
  },
  {
    tag: { label: 'Secure Foundation', color: 'bg-blue-600' },
    icon: '🛡️',
    title: 'Everything in One Place',
    blurb:
      'Your records vault and QR LifeCode keep health info organized and shareable in emergencies—so your story travels with you.',
    sub: 'Protected & portable',
    meta: 'HIPAA-secure'
  }
]

export function BenefitsJourney() {
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
    <section id='services' aria-label='Your healthcare journey reimagined' className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-accent-50/30" />
      <div className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute -bottom-1/4 -right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            Your{' '}
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              healthcare journey
            </span>
            {' '}reimagined
          </h2>
          
          <p className='text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4'>
            From urgent moments to everyday wellness—see how these benefits make life easier, calmer, and more affordable.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <Card className='h-full card-hover border-0 shadow-lg bg-white/70 backdrop-blur-sm group-hover:bg-white transition-all duration-300 relative overflow-hidden'>
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 to-accent-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardBody className="relative z-10 p-6">
                  <div className='flex items-start gap-4'>
                    {/* Icon */}
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                      className='h-12 w-12 rounded-2xl grid place-items-center text-2xl shadow-lg bg-white border border-slate-200 group-hover:shadow-xl transition-shadow duration-300'
                    >
                      {item.icon}
                    </motion.div>
                    
                    {/* Content */}
                    <div className='flex-1'>
                      {/* Tag and Meta */}
                      <div className='flex items-center gap-2 mb-3'>
                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white ${item.tag.color} shadow-sm`}>
                          {item.tag.label}
                        </span>
                        <span className='ml-auto text-xs font-medium text-slate-500'>{item.meta}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-700 transition-colors duration-300'>
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className='text-sm text-slate-700 leading-relaxed mb-3'>
                        {item.blurb}
                      </p>
                      
                      {/* Subtitle */}
                      <p className='text-xs font-medium text-slate-500 italic'>
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </CardBody>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
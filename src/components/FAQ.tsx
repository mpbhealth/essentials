'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'
import { ChevronDown, CircleHelp as HelpCircle, Search, Shield, Clock, CreditCard, UserCheck, Sparkles, MessageCircle, CircleCheck as CheckCircle, Info } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    { 
      q: 'Is Essentials insurance?', 
      a: 'No. Essentials is a membership that includes virtual care services, concierge support, and discounts. It is not insurance and does not replace major medical coverage.',
      icon: Shield,
      category: 'Coverage'
    },
    { 
      q: 'When can I use services?', 
      a: 'Immediately after you enroll. Most virtual care services are available 24/7/365.',
      icon: Clock,
      category: 'Access'
    },
    { 
      q: 'Are there extra fees?', 
      a: 'Virtual urgent care, primary care, and behavioral health are $0 visit fee. Some third-party services or add-ons may have separate costs.',
      icon: CreditCard,
      category: 'Pricing'
    },
    { 
      q: 'Can I cancel?', 
      a: 'Yes, you can cancel anytime from your member account.',
      icon: UserCheck,
      category: 'Membership'
    },
    {
      q: 'What devices can I use?',
      a: 'Access Essentials through any smartphone, tablet, or computer with an internet connection. Our platform works on iOS, Android, and all major web browsers.',
      icon: MessageCircle,
      category: 'Technology'
    },
    {
      q: 'How does MPB Concierge work?',
      a: 'Our expert team helps you find fair prices for labs, imaging, and prescriptions. Simply contact us with your needs, and we\'ll research options and provide recommendations.',
      icon: Info,
      category: 'Concierge'
    }
  ]

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const categories = [...new Set(faqs.map(faq => faq.category))]
  
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
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id='faq' className='relative py-20 md:py-28 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-brand-50/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className='relative mx-auto max-w-5xl px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-semibold text-brand-700">Frequently Asked Questions</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 mb-6'>
            <span className="text-gradient bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Questions?
            </span>
            <br />
            <span className="text-slate-700">We have answers</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Everything you need to know about Essentials membership, coverage, and how to get started.
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-lg mx-auto"
          >
            <div className="relative glass border border-white/30 rounded-2xl overflow-hidden">
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-transparent backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" />
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filters */}
        {searchTerm === '' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category, i) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/30 text-sm font-medium text-slate-600 hover:text-brand-600 hover:border-brand-300 hover:bg-brand-50 transition-all duration-300"
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='space-y-4'
        >
          <AnimatePresence>
            {filteredFaqs.map((faq, i) => {
              const Icon = faq.icon
              const isOpen = openIndex === i
              
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  layout
                  className="group"
                >
                  <Card className={`transition-all duration-500 border-2 hover:shadow-2xl cursor-pointer ${
                    isOpen ? 'border-brand-300 shadow-xl' : 'border-transparent hover:border-brand-200'
                  }`}>
                    <CardBody className="relative overflow-hidden">
                      {/* Background Pattern */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${
                        isOpen ? 'bg-brand-50' : 'bg-slate-50'
                      }`} />
                      
                      {/* Question */}
                      <motion.div
                        onClick={() => toggleFAQ(i)}
                        className="relative z-10 flex items-center gap-4 p-2"
                      >
                        {/* Icon */}
                        <motion.div
                          animate={{ 
                            rotate: isOpen ? 360 : 0,
                            scale: isOpen ? 1.1 : 1
                          }}
                          transition={{ duration: 0.5 }}
                          className={`w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0 ${
                            isOpen 
                              ? 'bg-gradient-to-r from-brand-500 to-accent-500' 
                              : 'bg-gradient-to-r from-slate-400 to-slate-500 group-hover:from-brand-400 group-hover:to-accent-400'
                          } transition-all duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        {/* Question Text */}
                        <div className="flex-1">
                          <div className={`font-bold text-lg transition-colors duration-300 ${
                            isOpen ? 'text-brand-700' : 'text-slate-900 group-hover:text-brand-600'
                          }`}>
                            {faq.q}
                          </div>
                          
                          {/* Category Badge */}
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-300 ${
                              isOpen 
                                ? 'bg-brand-100 text-brand-700' 
                                : 'bg-slate-100 text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-600'
                            }`}>
                              {faq.category}
                            </span>
                          </div>
                        </div>
                        
                        {/* Chevron */}
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                            isOpen ? 'bg-brand-100 text-brand-600' : 'text-slate-400 group-hover:text-brand-500 group-hover:bg-brand-50'
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </motion.div>

                      {/* Answer */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="relative z-10 overflow-hidden"
                          >
                            <div className="pl-16 pr-4 pb-4">
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <p className='text-slate-700 leading-relaxed text-lg'>
                                  {faq.a}
                                </p>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Hover Glow Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isOpen ? 0.1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 pointer-events-none"
                      />
                    </CardBody>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-slate-400 to-slate-500 shadow-lg flex items-center justify-center">
              <Search className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No results found</h3>
            <p className="text-slate-600">Try searching with different keywords or browse all questions above.</p>
          </motion.div>
        )}

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
            <span className="text-lg font-semibold text-slate-700">Still have questions? Talk to an advisor above!</span>
          </div>
        </motion.div>

        {/* JSON-LD Schema */}
        <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context': 'https://schema.org', 
          '@type': 'FAQPage', 
          mainEntity: faqs.map(x => ({ 
            '@type': 'Question', 
            name: x.q, 
            acceptedAnswer: { 
              '@type': 'Answer', 
              text: x.a 
            }
          }))
        })}} />
      </div>
    </section>
  )
}
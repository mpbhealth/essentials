'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { Menu, X, Heart } from 'lucide-react'

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const href = 'https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: "What's Included", href: '#details' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'FAQs', href: '#faq' }
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass border-b border-white/20 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className='mx-auto max-w-7xl px-4'>
        <div className='flex h-16 md:h-20 items-center justify-between'>
          {/* Logo */}
          <motion.a 
            href='/' 
            className='flex items-center gap-3 group'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
           <div className='relative group-hover:scale-105 transition-transform duration-300'>
             <img 
              src="/MPB-Health-No-background.png"
               alt="MPB Health"
               className='h-8 md:h-10 w-auto object-contain'
             />
             <div className='absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg blur-lg transition-opacity duration-300' />
           </div>
           <div className='hidden sm:block'>
             <div className='text-xs text-slate-500 font-medium'>Essentials</div>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8'>
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className='text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors duration-200 relative group'
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 group-hover:w-full transition-all duration-300' />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className='hidden md:flex items-center gap-4'>
            <motion.a 
              href={href} 
              onClick={() => enrollClick('header')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className='bg-brand-500 hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300'>
                Enroll Now
              </Button>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors'
            aria-label='Toggle mobile menu'
          >
            <AnimatePresence mode='wait'>
              {isMobileMenuOpen ? (
                <motion.div
                  key='close'
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className='w-6 h-6' />
                </motion.div>
              ) : (
                <motion.div
                  key='menu'
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className='w-6 h-6' />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='lg:hidden border-t border-white/20 bg-white/90 backdrop-blur-sm'
            >
              <nav className='py-4 space-y-2'>
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='block py-2 px-4 text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors'
                  >
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigation.length * 0.1 }}
                  className='px-4 pt-2'
                >
                  <a href={href} onClick={() => enrollClick('mobile_header')} className='block'>
                    <Button className='w-full bg-brand-500 hover:bg-brand-600 text-white'>
                      Enroll Now
                    </Button>
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
'use client'

import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Button({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button 
      {...props} 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'btn-focus inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold shadow-sm transition-all duration-300 hover:shadow-lg active:shadow-sm',
        'bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-brand-500',
        className
      )} 
    >
      {children}
    </motion.button>
  )
}

export function GhostButton({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button 
      {...props} 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'btn-focus inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300',
        'border-2 border-slate-200 text-slate-700 hover:border-brand-300 hover:text-brand-600 hover:bg-brand-50',
        'focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )} 
    >
      {children}
    </motion.button>
  )
}

export function PremiumButton({ className, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <motion.button 
      {...props} 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(
        'btn-premium relative overflow-hidden group',
        className
      )} 
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.button>
  )
}
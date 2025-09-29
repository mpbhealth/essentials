'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { MotionProps } from 'framer-motion'

// Safe motion wrapper components that are always client-side
export const MotionDiv = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & MotionProps
>(({ children, ...props }, ref) => (
  <motion.div ref={ref} {...props}>
    {children}
  </motion.div>
))
MotionDiv.displayName = 'MotionDiv'

export const MotionSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & MotionProps
>(({ children, ...props }, ref) => (
  <motion.section ref={ref} {...props}>
    {children}
  </motion.section>
))
MotionSection.displayName = 'MotionSection'

export const MotionButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & MotionProps
>(({ children, ...props }, ref) => (
  <motion.button ref={ref} {...props}>
    {children}
  </motion.button>
))
MotionButton.displayName = 'MotionButton'

export { AnimatePresence }

// Common animation variants
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

export const slideIn = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}
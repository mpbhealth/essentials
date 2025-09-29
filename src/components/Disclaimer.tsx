import React from 'react'
import { disclaimer } from '@/data/essentials'

export function Disclaimer() {
  return (
    <section className='py-10 border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-6xl px-4 text-sm text-slate-600 space-y-4'>
        <p>{disclaimer.ekra}</p>
        <p>{disclaimer.hospital}</p>
        <p className='text-xs text-slate-500'>*Debt Dismissal and certain benefits require eligibility; speak to a healthcare advisor for details.</p>
      </div>
    </section>
  )
}
'use client'
import React, { useState, useEffect } from 'react'

export function SiteFooter() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div>© {year} MPB Health. All rights reserved.</div>
        <nav className='flex items-center gap-4'>
          <a href='#' className='hover:text-slate-900'>Terms</a>
          <a href='#' className='hover:text-slate-900'>Privacy</a>
          <a href='#faq' className='hover:text-slate-900'>FAQ</a>
        </nav>
      </div>
    </footer>
  )
}
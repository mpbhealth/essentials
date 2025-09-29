'use client'
import React from 'react'
import { useEffect, useState } from 'react'

export function CookieBanner() {
  const [show,setShow] = useState(false)
  useEffect(() => { 
    const ok = localStorage.getItem('consent')
    if(!ok) setTimeout(() => setShow(true), 600) 
  }, [])
  if(!show) return null
  return (
    <div className='fixed bottom-4 inset-x-4 z-50 rounded-2xl border border-slate-200 bg-white shadow p-4 text-sm'>
      We use cookies for basic analytics and to improve your experience. 
      <button onClick={() => {localStorage.setItem('consent','1'); setShow(false)}} className='ml-2 rounded-lg bg-[var(--brand)] px-3 py-1 text-white'>Okay</button>
    </div>
  )
}
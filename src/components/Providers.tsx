'use client'
import React from 'react'
import { useEffect } from 'react'

const isProd = process.env.NODE_ENV === 'production'


export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => { 
    const id = process.env.NEXT_PUBLIC_GTM_ID
    if (isProd && id) {
      const s = document.createElement('script')
      s.async = true
      s.src = `https://www.googletagmanager.com/gtm.js?id=${id}`
      document.head.appendChild(s)
    } 
  }, [])
  
  return <>{children}</>
}
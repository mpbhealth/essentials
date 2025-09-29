'use client'
import React from 'react'
import { Button } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'

export function StickyCTA() {
  const href = process.env.NEXT_PUBLIC_ENROLL_URL || '#'
  return (
    <div className='fixed bottom-3 inset-x-3 z-40 md:hidden'>
      <a href={href} onClick={() => enrollClick('sticky')} className='block'>
        <Button className='w-full rounded-full'>Enroll Now — $49.95/mo</Button>
      </a>
    </div>
  )
}
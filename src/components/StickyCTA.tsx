'use client'
import React from 'react'
import { Button } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'

export function StickyCTA() {
  const href = 'https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'
  return (
    <div className='fixed bottom-3 inset-x-3 z-40 sm:hidden'>
      <a href={href} onClick={() => enrollClick('sticky')} className='block'>
        <Button className='w-full rounded-full py-4 text-base font-bold shadow-xl hover:shadow-2xl touch-manipulation'>
          <span className="flex items-center justify-center gap-2">
            Enroll Now — $49.95/mo
          </span>
        </Button>
      </a>
    </div>
  )
}
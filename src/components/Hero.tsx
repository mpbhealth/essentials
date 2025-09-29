'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { GhostButton } from '@/components/ui/Button'
import { enrollClick } from '@/lib/track'
import { price, pitch } from '@/data/essentials'

export function Hero() {
  const href = process.env.NEXT_PUBLIC_ENROLL_URL || '#'

  return (
    <section className="relative overflow-hidden min-h-[95vh] flex items-center">
      {/* Decorative background kept simple to avoid parser issues */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50" />

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-3">
            <span className="inline-flex items-center rounded-full bg-[var(--brand,#0a4e8e)]/10 text-[var(--brand,#0a4e8e)] px-3 py-1 text-xs font-semibold">
              Essentials by MPB Health
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            {pitch?.headline ?? 'Mental, Physical, Balance! One membership. Real support.'}
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            {pitch?.sub ??
              'Unlimited $0 virtual care plus expert concierge help and smart savings—so you can handle life\'s health moments quickly and affordably.'}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a href={href} onClick={() => enrollClick('hero_primary')}>
              <Button aria-label="Enroll in Essentials now">
                Enroll Today — {price?.display ?? '$49.95 / month'}
              </Button>
            </a>
            <a href="#details">
              <GhostButton aria-label="See what's included">See what's included</GhostButton>
            </a>
          </div>

          <p className="mt-3 text-xs text-slate-500">No long-term contracts. Cancel anytime.</p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-slate-50 border border-slate-200 flex items-center justify-center text-center p-8">
            <div>
              <div className="text-6xl">🩺💬</div>
              <p className="mt-3 text-slate-700">
                Unlimited $0 virtual urgent &amp; primary care, behavioral health, concierge help, and smart savings—on your
                phone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
export function TrustBar() {
  const logos = ['/logos/press1.svg','/logos/press2.svg','/logos/press3.svg','/logos/press4.svg']
  return (
    <section aria-label='Trusted by members nationwide' className='py-8 border-y border-slate-100 bg-white'>
      <div className='mx-auto max-w-6xl px-4'>
        <div className='text-center text-xs uppercase tracking-wider text-slate-500'>Trusted resources & partners</div>
        <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center opacity-80'>
          {logos.map((src, i) => <img key={i} src={src} alt='' className='h-8 w-auto' loading='lazy' />)}
        </div>
      </div>
    </section>
  )
}
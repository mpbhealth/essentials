import { Breadcrumbs } from '@/components/InternalLinking'

export default function ThankYou() {
  return (
    <main className='min-h-dvh px-4'>
      <div className='container mx-auto py-8'>
        <Breadcrumbs 
          items={[
            { label: 'Healthcare Advisor Request', href: '/#advisor' },
            { label: 'Thank You', current: true }
          ]}
        />
      </div>
      
      <div className='grid place-items-center text-center'>
      <div>
        <h1 className='text-3xl md:text-4xl font-black text-slate-900'>Thanks — we got your request!</h1>
        <p className='mt-2 text-slate-600 max-w-xl'>A healthcare advisor will reach out shortly. In the meantime, you can enroll online anytime.</p>
        <div className='mt-6'>
          <a className='inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm bg-[var(--primary)] text-white' href='https://www.1enrollment.com/order/checkout.cfm?id=768413&pdid=42463'>Enroll Now</a>
          
          {/* Additional helpful links */}
          <div className='mt-8 flex flex-wrap justify-center gap-4 text-sm'>
            <a href='/#services' className='text-slate-600 hover:text-brand-600 underline'>Learn about our services</a>
            <a href='/#pricing' className='text-slate-600 hover:text-brand-600 underline'>View pricing</a>
            <a href='/#faq' className='text-slate-600 hover:text-brand-600 underline'>Read FAQs</a>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
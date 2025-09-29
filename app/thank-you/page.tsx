export default function ThankYou() {
  return (
    <main className='min-h-dvh grid place-items-center px-4 text-center'>
      <div>
        <h1 className='text-3xl md:text-4xl font-black text-slate-900'>Thanks — we got your request!</h1>
        <p className='mt-2 text-slate-600 max-w-xl'>A healthcare advisor will reach out shortly. In the meantime, you can enroll online anytime.</p>
        <div className='mt-6'>
          <a className='inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm bg-[var(--primary)] text-white' href={process.env.NEXT_PUBLIC_ENROLL_URL || '#'}>Enroll Now</a>
        </div>
      </div>
    </main>
  );
}
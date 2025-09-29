export default function NotFound() {
  return (
    <main className='min-h-dvh grid place-items-center px-4 text-center'>
      <div>
        <h1 className='text-3xl md:text-4xl font-black text-slate-900'>Page not found</h1>
        <p className='mt-2 text-slate-600'>Let's get you back on track.</p>
        <a className='mt-6 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm bg-[var(--primary)] text-white' href='/'>Go home</a>
      </div>
    </main>
  );
}
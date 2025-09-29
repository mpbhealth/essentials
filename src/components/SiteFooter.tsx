import React from 'react'
export function SiteFooter() {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4'>
        <div>© <span id='y'></span> MPB Health. All rights reserved.</div>
        <nav className='flex items-center gap-4'>
          <a href='#' className='hover:text-slate-900'>Terms</a>
          <a href='#' className='hover:text-slate-900'>Privacy</a>
          <a href='#faq' className='hover:text-slate-900'>FAQ</a>
        </nav>
        <script dangerouslySetInnerHTML={{__html:"document.getElementById('y').textContent=new Date().getFullYear()"}} />
      </div>
    </footer>
  )
}
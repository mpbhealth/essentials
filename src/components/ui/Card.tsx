import React from 'react'
import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { 
  return <div {...props} className={clsx('rounded-3xl shadow-sm border border-slate-200 bg-white', className)} /> 
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) { 
  return <div {...props} className={clsx('p-6 md:p-8', className)} /> 
}

export function Badge({ children }: { children: React.ReactNode }) { 
  return <span className='inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600'>{children}</span> 
}
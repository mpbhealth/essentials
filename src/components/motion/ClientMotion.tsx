'use client'
import dynamic from 'next/dynamic'
import React from 'react'

// Dynamic import with SSR disabled for motion components
const DynamicMotion = dynamic(
  () => import('framer-motion').then(mod => mod.motion),
  { 
    ssr: false,
    loading: () => <div>Loading animation...</div>
  }
)

// Client-only motion component
export function ClientMotionDiv({ 
  children, 
  fallback = null, 
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & {
  fallback?: React.ReactNode
}) {
  const [mounted, setMounted] = React.useState(false)
  
  React.useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) {
    return <div {...props}>{fallback || children}</div>
  }
  
  return (
    <DynamicMotion.div {...props}>
      {children}
    </DynamicMotion.div>
  )
}

// Hook for checking if we're on client
export function useIsClient() {
  const [isClient, setIsClient] = React.useState(false)
  
  React.useEffect(() => {
    setIsClient(true)
  }, [])
  
  return isClient
}
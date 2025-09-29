'use client'
import React, { useEffect } from 'react'

export function JotformAgent() {
  useEffect(() => {
    // Create and append the Jotform AI agent script
    const script = document.createElement('script')
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/01956c3c0573728389695af08bc83bd3ad07/embed.js'
    script.async = true
    
    // Add script to document head
    document.head.appendChild(script)
    
    // Cleanup function
    return () => {
      // Remove script if component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return null // This component doesn't render any visible JSX
}
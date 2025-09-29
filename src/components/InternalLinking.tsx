import React from 'react'
import { ArrowRight, Chrome as Home, ChevronRight } from 'lucide-react'

// Breadcrumb Component
export function Breadcrumbs({ 
  items, 
  className = "" 
}: { 
  items: Array<{ label: string; href?: string; current?: boolean }>,
  className?: string 
}) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      <a 
        href="/" 
        className="flex items-center text-slate-500 hover:text-brand-600 transition-colors"
        aria-label="Go to homepage"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </a>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          {item.href && !item.current ? (
            <a 
              href={item.href}
              className="text-slate-500 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span 
              className="text-slate-900 font-medium"
              aria-current={item.current ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}

// Strategic Internal Link Component
export function StrategicLink({ 
  href, 
  children, 
  variant = 'inline',
  rel = "related",
  className = ""
}: {
  href: string
  children: React.ReactNode
  variant?: 'inline' | 'card' | 'button'
  rel?: string
  className?: string
}) {
  const baseClasses = "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
  
  const variantClasses = {
    inline: "text-brand-600 hover:text-brand-700 underline decoration-2 underline-offset-2",
    card: "block p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:shadow-md bg-white hover:bg-brand-50",
    button: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500 text-white hover:bg-brand-600 shadow-sm hover:shadow-md"
  }

  return (
    <a 
      href={href}
      rel={rel}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
      {variant === 'button' && <ArrowRight className="w-4 h-4" />}
    </a>
  )
}

// Related Content Links Component
export function RelatedLinks({ 
  title = "Related Information",
  links,
  className = ""
}: {
  title?: string
  links: Array<{ href: string; text: string; description?: string }>
  className?: string
}) {
  return (
    <div className={`bg-slate-50 rounded-2xl p-6 ${className}`}>
      <h3 className="text-lg font-bold text-slate-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {links.map((link, index) => (
          <StrategicLink 
            key={index}
            href={link.href} 
            variant="card"
            className="text-sm"
          >
            <div className="font-medium text-slate-900 mb-1">{link.text}</div>
            {link.description && (
              <div className="text-slate-600 text-xs">{link.description}</div>
            )}
          </StrategicLink>
        ))}
      </div>
    </div>
  )
}

// Navigation Schema Component
export function NavigationSchema() {
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": [
      {
        "@type": "WebPage",
        "name": "Healthcare Services",
        "url": "/#services",
        "description": "Virtual urgent care, primary care, and mental health services"
      },
      {
        "@type": "WebPage", 
        "name": "What's Included",
        "url": "/#details",
        "description": "Complete list of Essentials membership benefits"
      },
      {
        "@type": "WebPage",
        "name": "Pricing",
        "url": "/#pricing", 
        "description": "Transparent pricing for Essentials membership"
      },
      {
        "@type": "WebPage",
        "name": "How It Works",
        "url": "/#how-it-works",
        "description": "Simple 3-step process to get started"
      },
      {
        "@type": "WebPage",
        "name": "FAQ", 
        "url": "/#faq",
        "description": "Frequently asked questions about Essentials"
      }
    ]
  }

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
    />
  )
}
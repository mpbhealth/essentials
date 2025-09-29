'use client'
import React, { useState, useEffect } from 'react'
import { StrategicLink } from '@/components/InternalLinking'
import { Phone, Mail, MapPin, Shield, Heart, Users } from 'lucide-react'

export function SiteFooter() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  const footerSections = [
    {
      title: "Healthcare Services",
      links: [
        { text: "Virtual Urgent Care", href: "/#services", rel: "related" },
        { text: "Primary Care", href: "/#services", rel: "related" },
        { text: "Mental Health", href: "/#services", rel: "related" },
        { text: "Concierge Support", href: "/#services", rel: "related" }
      ]
    },
    {
      title: "Membership",
      links: [
        { text: "What's Included", href: "/#details", rel: "related" },
        { text: "Pricing & Plans", href: "/#pricing", rel: "related" },
        { text: "How It Works", href: "/#how-it-works", rel: "related" },
        { text: "Member Benefits", href: "/#details", rel: "related" }
      ]
    },
    {
      title: "Support",
      links: [
        { text: "Talk to an Advisor", href: "/#advisor", rel: "related" },
        { text: "Frequently Asked Questions", href: "/#faq", rel: "related" },
        { text: "Contact Us", href: "tel:8558164650", rel: "contact" },
        { text: "Member Login", href: "#", rel: "external" }
      ]
    }
  ]
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-16'>
        {/* Main Footer Content */}
        <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12'>
          {/* Brand Section */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-3 mb-4'>
              <img 
                src="/MPB-Health-No-background.png"
                alt="MPB Health"
                className='h-8 w-auto object-contain'
              />
              <div>
                <div className='font-bold text-slate-900'>MPB Health</div>
                <div className='text-xs text-slate-500'>Essentials Membership</div>
              </div>
            </div>
            <p className='text-sm text-slate-600 mb-6 max-w-md leading-relaxed'>
              Comprehensive virtual healthcare, expert concierge support, and smart savings 
              — all in one membership designed to put your health first.
            </p>
            
            {/* Contact Info */}
            <div className='space-y-3'>
              <StrategicLink 
                href="tel:8558164650" 
                variant="inline"
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600"
                rel="contact"
              >
                <Phone className="w-4 h-4" />
                (855) 816-4650
              </StrategicLink>
              
              <StrategicLink 
                href="mailto:info@mympb.com"
                variant="inline" 
                className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600"
                rel="contact"
              >
                <Mail className="w-4 h-4" />
                info@mympb.com
              </StrategicLink>
              
              <div className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>5301 N Federal Hwy<br />Boca Raton, FL 33487</span>
              </div>
          {/* Navigation Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className='font-bold text-slate-900 mb-4'>{section.title}</h3>
              <nav className='space-y-3'>
                {section.links.map((link, linkIndex) => (
                  <StrategicLink
                    key={linkIndex}
                    href={link.href}
                    variant="inline"
                    rel={link.rel}
                    className="block text-sm text-slate-600 hover:text-brand-600"
                  >
                    {link.text}
                  </StrategicLink>
                ))}
              </nav>
            </div>
          ))}
        </div>
            </div>
        {/* Trust Indicators */}
        <div className='border-t border-slate-200 pt-8 mb-8'>
          <div className='flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500'>
            <div className='flex items-center gap-2'>
              <Shield className='w-4 h-4 text-blue-500' />
              <span>HIPAA Compliant</span>
            </div>
            <div className='flex items-center gap-2'>
              <Heart className='w-4 h-4 text-red-500' />
              <span>24/7 Care Available</span>
            </div>
            <div className='flex items-center gap-2'>
              <Users className='w-4 h-4 text-green-500' />
              <span>10,000+ Members</span>
            </div>
          </div>
        </div>
          </div>
        {/* Bottom Bar */}
        <div className='border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600'>
          <div>© {year} MPB Health. All rights reserved.</div>
          <nav className='flex items-center gap-6'>
            <StrategicLink href="#" variant="inline" rel="legal">Terms of Service</StrategicLink>
            <StrategicLink href="#" variant="inline" rel="legal">Privacy Policy</StrategicLink>
            <StrategicLink href="/#faq" variant="inline" rel="help">FAQ</StrategicLink>
          </nav>
        </div>
      </div>
    </footer>
  )
}
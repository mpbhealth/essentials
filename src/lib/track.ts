export function track(event: string, payload: Record<string, any> = {}) { 
  try { 
    (window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({ event, ...payload })
  } catch(_) {} 
}

export function enrollClick(source: string) { 
  track('enroll_click', { source }) 
}

export function leadSubmit() { 
  track('lead_submit', { form: 'advisor' }) 
}
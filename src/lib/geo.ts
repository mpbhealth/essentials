// GEO Marketing & State Detection Service
export interface LocationData {
  country: string
  countryCode: string
  state: string
  stateCode: string
  city: string
  zipCode: string
  latitude: number
  longitude: number
  timezone: string
  isp: string
}

export interface StateAvailability {
  stateCode: string
  stateName: string
  isActive: boolean
  launchDate?: string
  suspendedDate?: string
  notes?: string
}

// All US states for reference
export const ALL_US_STATES = [
  { stateCode: 'AL', stateName: 'Alabama' },
  { stateCode: 'AK', stateName: 'Alaska' },
  { stateCode: 'AZ', stateName: 'Arizona' },
  { stateCode: 'AR', stateName: 'Arkansas' },
  { stateCode: 'CA', stateName: 'California' },
  { stateCode: 'CO', stateName: 'Colorado' },
  { stateCode: 'CT', stateName: 'Connecticut' },
  { stateCode: 'DE', stateName: 'Delaware' },
  { stateCode: 'FL', stateName: 'Florida' },
  { stateCode: 'GA', stateName: 'Georgia' },
  { stateCode: 'HI', stateName: 'Hawaii' },
  { stateCode: 'ID', stateName: 'Idaho' },
  { stateCode: 'IL', stateName: 'Illinois' },
  { stateCode: 'IN', stateName: 'Indiana' },
  { stateCode: 'IA', stateName: 'Iowa' },
  { stateCode: 'KS', stateName: 'Kansas' },
  { stateCode: 'KY', stateName: 'Kentucky' },
  { stateCode: 'LA', stateName: 'Louisiana' },
  { stateCode: 'ME', stateName: 'Maine' },
  { stateCode: 'MD', stateName: 'Maryland' },
  { stateCode: 'MA', stateName: 'Massachusetts' },
  { stateCode: 'MI', stateName: 'Michigan' },
  { stateCode: 'MN', stateName: 'Minnesota' },
  { stateCode: 'MS', stateName: 'Mississippi' },
  { stateCode: 'MO', stateName: 'Missouri' },
  { stateCode: 'MT', stateName: 'Montana' },
  { stateCode: 'NE', stateName: 'Nebraska' },
  { stateCode: 'NV', stateName: 'Nevada' },
  { stateCode: 'NH', stateName: 'New Hampshire' },
  { stateCode: 'NJ', stateName: 'New Jersey' },
  { stateCode: 'NM', stateName: 'New Mexico' },
  { stateCode: 'NY', stateName: 'New York' },
  { stateCode: 'NC', stateName: 'North Carolina' },
  { stateCode: 'ND', stateName: 'North Dakota' },
  { stateCode: 'OH', stateName: 'Ohio' },
  { stateCode: 'OK', stateName: 'Oklahoma' },
  { stateCode: 'OR', stateName: 'Oregon' },
  { stateCode: 'PA', stateName: 'Pennsylvania' },
  { stateCode: 'RI', stateName: 'Rhode Island' },
  { stateCode: 'SC', stateName: 'South Carolina' },
  { stateCode: 'SD', stateName: 'South Dakota' },
  { stateCode: 'TN', stateName: 'Tennessee' },
  { stateCode: 'TX', stateName: 'Texas' },
  { stateCode: 'UT', stateName: 'Utah' },
  { stateCode: 'VT', stateName: 'Vermont' },
  { stateCode: 'VA', stateName: 'Virginia' },
  { stateCode: 'WA', stateName: 'Washington' },
  { stateCode: 'WV', stateName: 'West Virginia' },
  { stateCode: 'WI', stateName: 'Wisconsin' },
  { stateCode: 'WY', stateName: 'Wyoming' },
]

// Current allowed states based on mpb.health availability
// This should be managed through admin interface in production
export const ALLOWED_STATES: StateAvailability[] = ALL_US_STATES.map(state => ({
  ...state,
  isActive: true
}))

class GeoLocationService {
  private static instance: GeoLocationService
  private locationCache: LocationData | null = null
  private readonly CACHE_KEY = 'mpb_user_location'
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000 // 24 hours

  static getInstance(): GeoLocationService {
    if (!GeoLocationService.instance) {
      GeoLocationService.instance = new GeoLocationService()
    }
    return GeoLocationService.instance
  }

  // Get user location using multiple fallback methods
  async detectLocation(): Promise<LocationData | null> {
    // Check cache first
    const cached = this.getCachedLocation()
    if (cached && this.isCacheValid(cached.timestamp)) {
      this.locationCache = cached.data
      return cached.data
    }

    try {
      // Primary: Use ipapi.co (free tier: 1000 requests/day)
      const response = await fetch('https://ipapi.co/json/', {
        headers: {
          'User-Agent': 'MPB-Health-GeoDetection/1.0'
        }
      })

      if (!response.ok) {
        throw new Error('Primary geolocation service failed')
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(`Geolocation error: ${data.reason}`)
      }

      const locationData: LocationData = {
        country: data.country_name || 'Unknown',
        countryCode: data.country_code || 'US',
        state: data.region || 'Unknown',
        stateCode: data.region_code || '',
        city: data.city || 'Unknown',
        zipCode: data.postal || '',
        latitude: data.latitude || 0,
        longitude: data.longitude || 0,
        timezone: data.timezone || 'America/New_York',
        isp: data.org || 'Unknown ISP'
      }

      // Cache the result
      this.cacheLocation(locationData)
      this.locationCache = locationData

      return locationData
    } catch (error) {
      console.warn('Primary geolocation failed, trying fallback:', error)
      return this.fallbackDetection()
    }
  }

  // Fallback using ipinfo.io
  private async fallbackDetection(): Promise<LocationData | null> {
    try {
      const response = await fetch('https://ipinfo.io/json', {
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Fallback geolocation service failed')
      }

      const data = await response.json()

      const [lat, lng] = (data.loc || '0,0').split(',')
      const [city, stateCode] = (data.region || ',').split(', ')

      const locationData: LocationData = {
        country: data.country === 'US' ? 'United States' : data.country || 'Unknown',
        countryCode: data.country || 'US',
        state: this.getStateName(stateCode) || 'Unknown',
        stateCode: stateCode || '',
        city: data.city || 'Unknown',
        zipCode: data.postal || '',
        latitude: parseFloat(lat) || 0,
        longitude: parseFloat(lng) || 0,
        timezone: data.timezone || 'America/New_York',
        isp: data.org || 'Unknown ISP'
      }

      this.cacheLocation(locationData)
      this.locationCache = locationData

      return locationData
    } catch (error) {
      console.error('All geolocation methods failed:', error)
      // Return default US location as last resort
      return this.getDefaultLocation()
    }
  }

  // Get default location (fallback)
  private getDefaultLocation(): LocationData {
    return {
      country: 'United States',
      countryCode: 'US',
      state: 'Florida',
      stateCode: 'FL',
      city: 'Miami',
      zipCode: '33101',
      latitude: 25.7617,
      longitude: -80.1918,
      timezone: 'America/New_York',
      isp: 'Unknown ISP'
    }
  }

  // Cache management
  private cacheLocation(location: LocationData): void {
    try {
      const cacheData = {
        data: location,
        timestamp: Date.now()
      }
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(cacheData))
    } catch (error) {
      console.warn('Failed to cache location data:', error)
    }
  }

  private getCachedLocation(): { data: LocationData; timestamp: number } | null {
    try {
      const cached = localStorage.getItem(this.CACHE_KEY)
      return cached ? JSON.parse(cached) : null
    } catch (error) {
      console.warn('Failed to read cached location:', error)
      return null
    }
  }

  private isCacheValid(timestamp: number): boolean {
    return Date.now() - timestamp < this.CACHE_DURATION
  }

  // Helper methods
  private getStateName(stateCode: string): string | undefined {
    return ALL_US_STATES.find(s => s.stateCode === stateCode)?.stateName
  }

  // Get current cached location
  getCurrentLocation(): LocationData | null {
    return this.locationCache
  }

  // Clear location cache
  clearCache(): void {
    localStorage.removeItem(this.CACHE_KEY)
    this.locationCache = null
  }
}

// Utility functions
export const geoService = GeoLocationService.getInstance()

export function getAvailableStates(): StateAvailability[] {
  return ALLOWED_STATES.filter(state => state.isActive)
}

export function isStateAvailable(stateCode: string): boolean {
  return ALLOWED_STATES.some(state => 
    state.stateCode === stateCode && state.isActive
  )
}

export function getUnavailableStates(): StateAvailability[] {
  return ALL_US_STATES.filter(state => 
    !ALLOWED_STATES.some(allowed => 
      allowed.stateCode === state.stateCode && allowed.isActive
    )
  ).map(state => ({
    ...state,
    isActive: false
  }))
}

// Admin functions (for state management)
export async function updateStateAvailability(
  stateCode: string, 
  isActive: boolean, 
  notes?: string
): Promise<boolean> {
  // In production, this would make an API call
  // For now, we'll simulate the update
  const stateIndex = ALLOWED_STATES.findIndex(s => s.stateCode === stateCode)
  
  if (stateIndex >= 0) {
    ALLOWED_STATES[stateIndex] = {
      ...ALLOWED_STATES[stateIndex],
      isActive,
      notes,
      suspendedDate: !isActive ? new Date().toISOString() : undefined
    }
    return true
  }
  
  return false
}

// Track geo-based events
export function trackGeoEvent(event: string, location: LocationData) {
  // Integration with existing tracking
  try {
    (window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({
      event: 'geo_event',
      geo_event_type: event,
      geo_country: location.country,
      geo_state: location.state,
      geo_city: location.city,
      geo_zip: location.zipCode
    })
  } catch (error) {
    console.warn('Geo tracking failed:', error)
  }
}
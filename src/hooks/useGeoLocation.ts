'use client'
import { useState, useEffect, useCallback } from 'react'
import { geoService, type LocationData, isStateAvailable, getAvailableStates, trackGeoEvent } from '@/lib/geo'

export interface GeoLocationHook {
  location: LocationData | null
  isLoading: boolean
  error: string | null
  isStateAvailable: boolean
  availableStates: Array<{ stateCode: string; stateName: string }>
  isRestricted: boolean
  refreshLocation: () => Promise<void>
  clearCache: () => void
}

export function useGeoLocation(): GeoLocationHook {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const detectLocation = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const detectedLocation = await geoService.detectLocation()
      
      if (detectedLocation) {
        setLocation(detectedLocation)
        
        // Track geo detection event
        trackGeoEvent('location_detected', detectedLocation)
        
        // Track if user is from restricted state
        if (!isStateAvailable(detectedLocation.stateCode)) {
          trackGeoEvent('restricted_state_visit', detectedLocation)
        }
      } else {
        setError('Unable to detect your location')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Location detection failed'
      setError(errorMessage)
      console.error('Geolocation error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    detectLocation()
  }, [detectLocation])

  const refreshLocation = useCallback(async () => {
    geoService.clearCache()
    await detectLocation()
  }, [detectLocation])

  const clearCache = useCallback(() => {
    geoService.clearCache()
    setLocation(null)
    setIsLoading(true)
    detectLocation()
  }, [detectLocation])

  return {
    location,
    isLoading,
    error,
    isStateAvailable: location ? isStateAvailable(location.stateCode) : true,
    availableStates: getAvailableStates().map(state => ({
      stateCode: state.stateCode,
      stateName: state.stateName
    })),
    isRestricted: location ? !isStateAvailable(location.stateCode) : false,
    refreshLocation,
    clearCache
  }
}

// Hook for getting only available states for dropdowns
export function useAvailableStates() {
  return getAvailableStates().map(state => ({
    value: state.stateCode,
    label: state.stateName
  }))
}

// Hook for form state management with geo pre-selection
export function useGeoForm(initialState?: string) {
  const { location, isLoading } = useGeoLocation()
  const [selectedState, setSelectedState] = useState(initialState || '')

  useEffect(() => {
    // Auto-select state if user is from available state and no initial state provided
    if (location && !initialState && !selectedState && isStateAvailable(location.stateCode)) {
      setSelectedState(location.stateCode)
    }
  }, [location, initialState, selectedState])

  return {
    selectedState,
    setSelectedState,
    suggestedState: location?.stateCode,
    isGeoLoading: isLoading,
    location
  }
}
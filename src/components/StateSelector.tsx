'use client'
import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGeoForm, useAvailableStates } from '@/hooks/useGeoLocation'
import { ChevronDown, MapPin, CircleCheck as CheckCircle2, Search } from 'lucide-react'

interface StateSelectorProps {
  value?: string
  onChange?: (stateCode: string) => void
  placeholder?: string
  className?: string
  showGeoSuggestion?: boolean
  required?: boolean
  name?: string
}

export function StateSelector({
  value,
  onChange,
  placeholder = "Select your state",
  className = "",
  showGeoSuggestion = true,
  required = false,
  name = "state"
}: StateSelectorProps) {
  const availableStates = useAvailableStates()
  const { selectedState, setSelectedState, suggestedState, location } = useGeoForm(value)
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Handle outside clicks
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Sync with external value changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedState(value)
    }
  }, [value, setSelectedState])

  const handleStateSelect = (stateCode: string) => {
    setSelectedState(stateCode)
    onChange?.(stateCode)
    setIsOpen(false)
    setSearchTerm('')
  }

  const filteredStates = availableStates.filter(state =>
    state.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
    state.value.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const selectedStateName = availableStates.find(s => s.value === selectedState)?.label

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Hidden input for form submission */}
      <input type="hidden" name={name} value={selectedState} required={required} />
      
      {/* Geo Suggestion */}
      {showGeoSuggestion && suggestedState && !selectedState && location && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-2 flex items-center gap-2 text-sm text-brand-600 bg-brand-50 px-3 py-2 rounded-lg border border-brand-200"
        >
          <MapPin className="w-4 h-4" />
          <span>
            Detected: {location.state}
          </span>
          <button
            type="button"
            onClick={() => handleStateSelect(suggestedState)}
            className="ml-auto text-xs font-medium text-brand-700 hover:text-brand-800 underline"
          >
            Use This
          </button>
        </motion.div>
      )}

      {/* Selector Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between px-4 py-3 bg-white border border-slate-300 rounded-xl text-left transition-all duration-200 ${
          isOpen ? 'border-brand-500 ring-2 ring-brand-500/20' : 'hover:border-brand-400'
        } ${selectedState ? 'text-slate-900' : 'text-slate-500'}`}
      >
        <div className="flex items-center gap-2">
          {selectedState && (
            <CheckCircle2 className="w-4 h-4 text-green-500" />
          )}
          <span>
            {selectedStateName || placeholder}
          </span>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-slate-400" />
        </motion.div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-300 rounded-xl shadow-2xl z-50 max-h-80 overflow-hidden"
          >
            {/* Search */}
            <div className="p-3 border-b border-slate-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search states..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20"
                />
              </div>
            </div>

            {/* States List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredStates.length === 0 ? (
                <div className="p-4 text-center text-slate-500">
                  No states found
                </div>
              ) : (
                <>
                  {/* Geo suggestion at top if applicable */}
                  {suggestedState && !selectedState && location && filteredStates.some(s => s.value === suggestedState) && (
                    <motion.button
                      type="button"
                      onClick={() => handleStateSelect(suggestedState)}
                      className="w-full px-4 py-3 text-left hover:bg-brand-50 transition-colors border-b border-brand-100 bg-brand-25 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-brand-600" />
                          <span className="font-medium text-slate-900">
                            {location.state}
                          </span>
                          <span className="text-xs bg-brand-100 text-brand-700 px-2 py-1 rounded-full">
                            Your Location
                          </span>
                        </div>
                        {selectedState === suggestedState && (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </motion.button>
                  )}

                  {/* All available states */}
                  {filteredStates.map((state) => (
                    <motion.button
                      key={state.value}
                      type="button"
                      onClick={() => handleStateSelect(state.value)}
                      whileHover={{ backgroundColor: '#f8fafc' }}
                      className={`w-full px-4 py-3 text-left transition-colors ${
                        selectedState === state.value 
                          ? 'bg-brand-50 text-brand-900' 
                          : 'hover:bg-slate-50 text-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{state.label}</span>
                        {selectedState === state.value && (
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-3 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 text-center">
              {availableStates.length} states available • Expanding soon to more states
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Simple state dropdown for basic forms
export function SimpleStateDropdown({
  value,
  onChange,
  className = "",
  required = false,
  name = "state"
}: Omit<StateSelectorProps, 'showGeoSuggestion'>) {
  const availableStates = useAvailableStates()
  
  return (
    <select
      name={name}
      value={value || ''}
      onChange={(e) => onChange?.(e.target.value)}
      required={required}
      className={`w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 ${className}`}
    >
      <option value="">Select your state</option>
      {availableStates.map((state) => (
        <option key={state.value} value={state.value}>
          {state.label}
        </option>
      ))}
    </select>
  )
}
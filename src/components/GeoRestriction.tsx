'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody } from '@/components/ui/Card'
import { useGeoLocation } from '@/hooks/useGeoLocation'
import { MapPin, CircleAlert as AlertCircle, Mail, Phone, Bell, Clock, Users, ArrowRight } from 'lucide-react'

export function GeoRestrictionBanner() {
  const { location, isRestricted, isLoading } = useGeoLocation()

  if (isLoading || !isRestricted || !location) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-3 text-sm font-medium">
          <AlertCircle className="w-5 h-5" />
          <span>
            MPB Health membership is not currently available in {location.state}. 
            We're working to expand our services to your area.
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function GeoRestrictionModal() {
  const { location, isRestricted, isLoading } = useGeoLocation()

  if (isLoading || !isRestricted || !location) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl w-full"
      >
        <Card className="relative overflow-hidden border-2 border-amber-200 shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50" />
          
          <CardBody className="relative z-10 p-8 text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg flex items-center justify-center"
            >
              <MapPin className="w-10 h-10 text-white" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                Service Not Available in {location.state}
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                MPB Health Essentials membership is not currently available in your state. 
                We're actively working to expand our services and hope to serve {location.state} residents soon.
              </p>

              {/* Location Details */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Detected Location</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span><strong>State:</strong> {location.state} ({location.stateCode})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span><strong>City:</strong> {location.city}</span>
                  </div>
                </div>
              </div>

              {/* Get Notified Section */}
              <div className="bg-gradient-to-r from-brand-50 to-accent-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                  <Bell className="w-5 h-5 text-brand-600" />
                  Get Notified When We Launch
                </h3>
                
                <p className="text-slate-600 mb-4">
                  Be the first to know when MPB Health Essentials becomes available in {location.state}!
                </p>

                <a
                  href={`mailto:expansion@mpb.health?subject=Notify me when available in ${location.state}&body=Hi, I'm interested in MPB Health Essentials and would like to be notified when it becomes available in ${location.state} (${location.stateCode}). My current location: ${location.city}, ${location.state} ${location.zipCode}`}
                  className="inline-flex items-center gap-2 bg-brand-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5" />
                  Notify Me
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Contact Information */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a
                  href="tel:8558164650"
                  className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (855) 816-4650
                </a>
                <a
                  href="mailto:info@mpb.health"
                  className="flex items-center gap-2 text-slate-600 hover:text-brand-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@mpb.health
                </a>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Wrong location? Your location is detected automatically based on your IP address. 
                  If this is incorrect, please contact us.
                </p>
              </div>
            </motion.div>
          </CardBody>
        </Card>
      </motion.div>
    </div>
  )
}

export function GeoRestrictionInline() {
  const { location, isRestricted, isLoading, availableStates } = useGeoLocation()

  if (isLoading || !isRestricted || !location) {
    return null
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <Card className="border-2 border-amber-200 shadow-xl">
          <CardBody className="p-12 bg-gradient-to-br from-amber-50 to-orange-50">
            {/* Header */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl font-black text-slate-900 mb-4">
              Not Available in {location.state} Yet
            </h2>

            <p className="text-xl text-slate-600 mb-8">
              MPB Health Essentials is currently available in {availableStates.length} states and expanding rapidly. 
              We're working hard to bring our services to {location.state} residents.
            </p>

            {/* Available States Preview */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-slate-900 mb-4">Currently Available In:</h3>
              <div className="flex flex-wrap justify-center gap-2 max-h-32 overflow-y-auto">
                {availableStates.slice(0, 10).map((state) => (
                  <span
                    key={state.stateCode}
                    className="bg-brand-100 text-brand-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {state.stateName}
                  </span>
                ))}
                {availableStates.length > 10 && (
                  <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                    +{availableStates.length - 10} more
                  </span>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a
                href={`mailto:expansion@mpb.health?subject=Interest in ${location.state} expansion&body=I'm interested in MPB Health Essentials becoming available in ${location.state}. Please notify me of updates.`}
                className="inline-flex items-center gap-2 bg-brand-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl text-lg"
              >
                <Bell className="w-5 h-5" />
                Get Expansion Updates
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <p className="text-sm text-slate-500">
                We'll email you as soon as we launch in {location.state}
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
    </motion.section>
  )
}
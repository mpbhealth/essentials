'use client'
import React, { useState, useEffect } from 'react'
import { Shield, CheckCircle, Lock } from 'lucide-react'
import { ENROLLMENT_STEPS, MPB_BRAND_COLORS } from '@/lib/enrollment-types'

interface EnrollShellProps {
  vendorUrl: string;
  mode: 'iframe' | 'redirect';
  currentStep?: number;
}

export function EnrollShell({ vendorUrl, mode, currentStep = 3 }: EnrollShellProps) {
  const [iframeHeight, setIframeHeight] = useState('100vh');

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === 'https://www.1enrollment.com') {
        if (event.data.height) {
          setIframeHeight(`${event.data.height}px`);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src="/MPB-Health-No-background.png" alt="MPB Health" className="h-10" />
              <div className="hidden sm:block">
                <h1 className="text-lg font-black text-slate-900">Enrollment</h1>
                <p className="text-xs text-slate-600">Secure checkout powered by our partner</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
              <Lock className="w-4 h-4 text-green-600" />
              <span className="text-sm font-bold text-green-700">Secure</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {ENROLLMENT_STEPS.map((step, idx) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      step.id <= currentStep
                        ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    {step.id < currentStep ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <div className="hidden md:block">
                    <div className={`text-sm font-bold ${step.id <= currentStep ? 'text-slate-900' : 'text-slate-400'}`}>
                      {step.name}
                    </div>
                    <div className="text-xs text-slate-500">{step.description}</div>
                  </div>
                </div>
                {idx < ENROLLMENT_STEPS.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                      step.id < currentStep ? 'bg-gradient-to-r from-brand-500 to-accent-500' : 'bg-slate-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-blue-900 mb-1">Secure Payment Processing</h3>
              <p className="text-sm text-blue-700">
                Payments are processed securely by our enrollment partner. MPB Health never stores your card details.
                Your information is protected with industry-standard PCI DSS compliance.
              </p>
            </div>
          </div>
        </div>

        {mode === 'iframe' ? (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <iframe
              src={vendorUrl}
              allow="payment *"
              className="w-full border-0"
              style={{ height: iframeHeight, minHeight: '600px' }}
              title="Enrollment checkout"
            />
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-slate-200">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Securely redirecting to checkout...</h2>
              <p className="text-slate-600 mb-6">
                You'll be taken to our secure enrollment partner in just a moment.
              </p>
              <div className="flex justify-center">
                <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-sm text-slate-500">
          <p>Need help? Contact us at <a href="tel:1-800-555-0123" className="text-brand-600 hover:underline font-semibold">1-800-555-0123</a> or <a href="mailto:support@mpb.health" className="text-brand-600 hover:underline font-semibold">support@mpb.health</a></p>
        </div>
      </div>
    </div>
  );
}

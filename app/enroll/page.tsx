'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { EnrollShell } from './EnrollShell'
import { PrefillForm } from './PrefillForm'
import { EnrollmentParams, EmbedCheckResult, CheckoutUrlResponse } from '@/lib/enrollment-types'

function EnrollPageContent() {
  const searchParams = useSearchParams();
  const [checkoutUrl, setCheckoutUrl] = useState<string>('');
  const [embedCheck, setEmbedCheck] = useState<EmbedCheckResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const hasParams = searchParams.toString().length > 0;

  useEffect(() => {
    if (!hasParams) {
      setLoading(false);
      return;
    }

    const initializeEnrollment = async () => {
      try {
        const params: EnrollmentParams = {
          firstName: searchParams.get('firstName') || undefined,
          lastName: searchParams.get('lastName') || undefined,
          dob: searchParams.get('dob') || undefined,
          tier: searchParams.get('tier') || undefined,
          smoker: (searchParams.get('smoker') as 'yes' | 'no') || undefined,
          spouse: (searchParams.get('spouse') as 'yes' | 'no') || undefined,
          children: searchParams.get('children') || undefined,
        };

        const [embedResult, urlResult] = await Promise.all([
          fetch('/.netlify/functions/detect-embed').then(res => res.json()),
          fetch('/.netlify/functions/build-checkout-url', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ params }),
          }).then(res => res.json()),
        ]);

        setEmbedCheck(embedResult as EmbedCheckResult);
        setCheckoutUrl((urlResult as CheckoutUrlResponse).checkoutUrl);

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'EnrollmentHandoff', {
            mode: embedResult.embeddable ? 'iframe' : 'redirect',
            params: Object.keys(params).filter(k => params[k as keyof EnrollmentParams]),
          });
        }

        if (!embedResult.embeddable && urlResult.checkoutUrl) {
          setTimeout(() => {
            window.location.replace(urlResult.checkoutUrl);
          }, 2500);
        }

        setLoading(false);
      } catch (err) {
        setError('Unable to initialize enrollment. Please try again.');
        setLoading(false);
        console.error('Enrollment init error:', err);
      }
    };

    initializeEnrollment();
  }, [hasParams, searchParams]);

  if (!hasParams) {
    return <PrefillForm />;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-lg font-bold text-slate-700">Preparing your enrollment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md bg-white rounded-2xl shadow-xl border border-red-200 p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">Something went wrong</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <div className="flex flex-col gap-3">
            <a
              href="/enroll"
              className="bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Try Again
            </a>
            <a
              href="/enroll/help"
              className="border-2 border-slate-300 text-slate-700 font-bold py-3 px-6 rounded-lg hover:border-brand-500 transition-all duration-300"
            >
              Get Help
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!checkoutUrl || !embedCheck) {
    return null;
  }

  return (
    <EnrollShell
      vendorUrl={checkoutUrl}
      mode={embedCheck.embeddable ? 'iframe' : 'redirect'}
      currentStep={3}
    />
  );
}

export default function EnrollPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    }>
      <EnrollPageContent />
    </Suspense>
  );
}

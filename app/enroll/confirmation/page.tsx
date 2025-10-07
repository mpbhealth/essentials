'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { CheckCircle, Mail, Phone, FileText, ArrowRight, Shield, Users } from 'lucide-react'

function ConfirmationContent() {
  const searchParams = useSearchParams();

  const memberId = searchParams.get('member_id') || searchParams.get('id');
  const plan = searchParams.get('plan') || searchParams.get('tier');
  const status = searchParams.get('status');
  const email = searchParams.get('email');

  const isSuccess = status === 'success' || memberId;

  if (!isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md bg-white rounded-2xl shadow-xl border border-yellow-200 p-8 text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 mb-3">Enrollment Status Unclear</h2>
          <p className="text-slate-600 mb-6">
            We didn't receive confirmation of your enrollment. If you completed checkout, you should receive an email shortly.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="/enroll/help"
              className="bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Contact Support
            </a>
            <a
              href="/"
              className="border-2 border-slate-300 text-slate-700 font-bold py-3 px-6 rounded-lg hover:border-brand-500 transition-all duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <img src="/MPB-Health-No-background.png" alt="MPB Health" className="h-10" />
            <div>
              <h1 className="text-2xl font-black text-slate-900">Welcome to MPB Health!</h1>
              <p className="text-slate-600">Your enrollment is complete</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-8 text-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h2 className="text-3xl font-black text-white mb-2">Enrollment Successful!</h2>
            <p className="text-green-50 text-lg">You're all set to start using your benefits</p>
          </div>

          <div className="p-8">
            {memberId && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-blue-900 mb-1">Member ID</p>
                    <p className="text-2xl font-black text-blue-700">{memberId}</p>
                  </div>
                  <Shield className="w-12 h-12 text-blue-400" />
                </div>
              </div>
            )}

            {plan && (
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-700 mb-1">Plan</p>
                    <p className="text-xl font-black text-slate-900">{plan}</p>
                  </div>
                  <Users className="w-10 h-10 text-slate-400" />
                </div>
              </div>
            )}

            <div className="border-t border-slate-200 pt-6 mb-6">
              <h3 className="text-lg font-black text-slate-900 mb-4">What happens next?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Check your email</h4>
                    <p className="text-sm text-slate-600">
                      You'll receive a welcome email with your member portal login details and how to access your benefits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Set up your account</h4>
                    <p className="text-sm text-slate-600">
                      Log in to your member portal to complete your profile and explore available services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Start using your benefits</h4>
                    <p className="text-sm text-slate-600">
                      Access virtual care, concierge services, and all your member benefits immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://portal.mpb.health"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Access Member Portal
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/enroll/help"
                className="flex items-center justify-center gap-2 border-2 border-slate-300 text-slate-700 font-bold py-3 px-6 rounded-lg hover:border-brand-500 transition-all duration-300"
              >
                Get Help
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Mail className="w-8 h-8 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">Email Support</h3>
            <a href="mailto:support@mpb.health" className="text-sm text-brand-600 hover:underline">
              support@mpb.health
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Phone className="w-8 h-8 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">Phone Support</h3>
            <a href="tel:1-800-555-0123" className="text-sm text-brand-600 hover:underline">
              1-800-555-0123
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <FileText className="w-8 h-8 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-2">Help Center</h3>
            <a href="/enroll/help" className="text-sm text-brand-600 hover:underline">
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}

'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { User, Users, Calendar, Shield } from 'lucide-react'

export function PrefillForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    tier: 'member-only',
    smoker: 'no',
    spouse: 'no',
    children: '0',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) params.set(key, value);
    });

    router.push(`/enroll?${params.toString()}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <img src="/MPB-Health-No-background.png" alt="MPB Health" className="h-10" />
            <div>
              <h1 className="text-2xl font-black text-slate-900">Create your MPB Health account</h1>
              <p className="text-slate-600">Join thousands of members nationwide</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">Member Information</h2>
                <p className="text-sm text-slate-600">Tell us about yourself</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-200"
                placeholder="John"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-200"
                placeholder="Doe"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="dob" className="block text-sm font-bold text-slate-700 mb-2">
              Date of Birth *
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="date"
                id="dob"
                name="dob"
                required
                value={formData.dob}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-200"
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-900">Household</h2>
                <p className="text-sm text-slate-600">Who will be covered?</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="tier" className="block text-sm font-bold text-slate-700 mb-2">
                Coverage Tier *
              </label>
              <select
                id="tier"
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-200"
              >
                <option value="member-only">Member Only</option>
                <option value="member-plus-one">Member + One</option>
                <option value="member-family">Member + Family</option>
              </select>
            </div>

            <div>
              <label htmlFor="smoker" className="block text-sm font-bold text-slate-700 mb-2">
                Tobacco User?
              </label>
              <select
                id="smoker"
                name="smoker"
                value={formData.smoker}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-200"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="spouse" className="block text-sm font-bold text-slate-700 mb-2">
                Include Spouse?
              </label>
              <select
                id="spouse"
                name="spouse"
                value={formData.spouse}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-200"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>

            <div>
              <label htmlFor="children" className="block text-sm font-bold text-slate-700 mb-2">
                Number of Children
              </label>
              <input
                type="number"
                id="children"
                name="children"
                min="0"
                max="10"
                value={formData.children}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all duration-200"
              />
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-700">
                <p className="font-bold mb-1">Your information is secure</p>
                <p>We use industry-standard encryption to protect your personal data.</p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-brand-500 to-accent-500 text-white font-bold py-4 px-8 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
          >
            Continue to Checkout
          </button>
        </form>

        <div className="text-center mt-8 text-sm text-slate-500">
          <p>Already have an account? <a href="https://mpb.health/login" className="text-brand-600 hover:underline font-semibold">Sign in</a></p>
        </div>
      </div>
    </div>
  );
}

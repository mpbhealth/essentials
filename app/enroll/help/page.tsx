'use client'
import React, { useState } from 'react'
import { Phone, Mail, MessageCircle, HelpCircle, Clock, Shield, Users, CreditCard, FileText, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react'

const FAQ_ITEMS = [
  {
    question: 'How long does enrollment take?',
    answer: 'The enrollment process typically takes 5-10 minutes. You\'ll need your basic personal information, household details, and payment method ready.',
  },
  {
    question: 'When can I start using my benefits?',
    answer: 'Your benefits are active immediately after enrollment is complete. You\'ll receive a welcome email with your member ID and portal access within minutes.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) and debit cards. Payments are processed securely by our enrollment partner.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes! You can upgrade or change your plan at any time through your member portal or by contacting our support team.',
  },
  {
    question: 'What if I need to cancel?',
    answer: 'MPB Health has no contracts. You can cancel anytime through your member portal or by calling our support team. No cancellation fees apply.',
  },
  {
    question: 'Is my information secure?',
    answer: 'Absolutely. We use industry-standard encryption and PCI DSS compliant payment processing. Your card details are never stored by MPB Health.',
  },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <img src="/MPB-Health-No-background.png" alt="MPB Health" className="h-10" />
            <div>
              <h1 className="text-2xl font-black text-slate-900">Enrollment Help</h1>
              <p className="text-slate-600">We're here to help you every step of the way</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600 mb-4">Speak with our enrollment specialists</p>
            <a
              href="tel:1-800-555-0123"
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all duration-300"
            >
              1-800-555-0123
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri 8am-8pm EST</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Live Chat</h3>
            <p className="text-slate-600 mb-4">Get instant answers to your questions</p>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Intercom) {
                  (window as any).Intercom('show');
                } else {
                  alert('Live chat will be available soon!');
                }
              }}
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all duration-300"
            >
              Start Chat
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>Available 24/7</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 mb-4">We'll respond within 24 hours</p>
            <a
              href="mailto:support@mpb.health"
              className="inline-flex items-center gap-2 text-brand-600 font-bold hover:gap-3 transition-all duration-300"
            >
              support@mpb.health
              <ArrowRight className="w-4 h-4" />
            </a>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>Response within 24hrs</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
              <p className="text-slate-600">Quick answers to common enrollment questions</p>
            </div>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden hover:border-brand-300 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors duration-200"
                >
                  <span className="font-bold text-slate-900 pr-4">{item.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-brand-500 to-accent-500 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-3xl font-black mb-3">Ready to try again?</h2>
          <p className="text-white/90 mb-6 text-lg">
            If you experienced an issue during enrollment, we're here to help you complete the process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/enroll"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-600 font-bold py-3 px-8 rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Retry Enrollment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:1-800-555-0123"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white hover:text-brand-600 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call for Help
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Shield className="w-10 h-10 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Security</h3>
            <p className="text-sm text-slate-600">PCI DSS Compliant</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <Users className="w-10 h-10 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Support</h3>
            <p className="text-sm text-slate-600">24/7 Assistance</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <CreditCard className="w-10 h-10 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Flexible</h3>
            <p className="text-sm text-slate-600">No Contracts</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <FileText className="w-10 h-10 text-brand-500 mx-auto mb-3" />
            <h3 className="font-bold text-slate-900 mb-1">Resources</h3>
            <a href="/faq" className="text-sm text-brand-600 hover:underline">View All FAQs</a>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    // Initialize animations if needed
    if (typeof window !== 'undefined' && window.initAnimations) {
      window.initAnimations();
    }
  }, []);

  return (
    <>
    <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 fade-trigger">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
          <p className="text-gray-600 dark:text-gray-400">Last Updated: February 15, 2024</p>
        </div>

        {/* Introduction */}
        <section className="prose dark:prose-invert max-w-none fade-trigger delay-100">
          <p className="text-gray-600 dark:text-gray-400">
            We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="space-y-6 fade-trigger delay-200">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Information We Collect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Personal Information */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Name</li>
                <li>• Email address</li>
                <li>• Phone number</li>
                <li>• Postal address</li>
              </ul>
            </div>

            {/* Technical Data */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Data</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• IP address</li>
                <li>• Browser type</li>
                <li>• Device info</li>
                <li>• Cookies</li>
              </ul>
            </div>

            {/* Usage Data */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Usage Data</h3>
              </div>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Pages visited</li>
                <li>• Time spent</li>
                <li>• Interactions</li>
                <li>• Preferences</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="space-y-6 fade-trigger delay-300">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">How We Use Your Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Service Provision */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Service Provision</h3>
              <p className="text-gray-600 dark:text-gray-400">To provide and maintain our services, including monitoring the usage of our services.</p>
            </div>

            {/* Communication */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Communication</h3>
              <p className="text-gray-600 dark:text-gray-400">To contact you about updates, security alerts, and support messages.</p>
            </div>

            {/* Security */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Security</h3>
              <p className="text-gray-600 dark:text-gray-400">To detect, prevent and address technical issues and security vulnerabilities.</p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="space-y-6 fade-trigger delay-400">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Rights</h2>
          <div className="space-y-4">
            {['Access', 'Rectification', 'Erasure', 'Restrict Processing'].map((right, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Right to {right}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  You can request {right.toLowerCase()} of your personal information at any time.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="space-y-6 fade-trigger delay-500">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Additional Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Cookie Policy</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Third-party Services</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We may employ third-party companies and individuals to facilitate our service or assist in analyzing how our service is used.
              </p>
            </div>
          </div>
        </section>
      </div>
      
    </div>
    <Footer/>
    </>
  );
}
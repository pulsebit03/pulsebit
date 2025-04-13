'use client';

import { useEffect } from 'react';
import { initAnimations } from '../initAnimations';
import Footer from '@/components/Footer';

export default function Privacy() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <>
      <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-gradient"></div>
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6 fade-trigger">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">Privacy Policy</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:scale-105 transition-transform duration-300">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8 fade-trigger delay-100">
            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Messages you send through our contact form</li>
                <li>Information about your device and how you use our website</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Respond to your inquiries and provide customer service</li>
                <li>Send you updates about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:contact@pulsebit.tech" className="text-blue-400 hover:text-blue-300 transition-colors">contact@pulsebit.tech</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
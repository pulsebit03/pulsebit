'use client';

import { useEffect } from 'react';
import { initAnimations } from '../initAnimations';
import Footer from '@/components/Footer';

export default function Terms() {
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
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">Terms & Conditions</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:scale-105 transition-transform duration-300">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8 fade-trigger delay-100">
            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</li>
                <li>This is the grant of a license, not a transfer of title.</li>
                <li>You may not modify or copy the materials.</li>
                <li>You may not use the materials for any commercial purpose.</li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-300">
                All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of PulseBit Tech or its content suppliers and protected by international copyright laws.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
              <p className="text-gray-300">
                The materials on PulseBit Tech's website are provided on an 'as is' basis. PulseBit Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Limitations</h2>
              <p className="text-gray-300">
                In no event shall PulseBit Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on PulseBit Tech's website.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms & Conditions, please contact us at{' '}
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
'use client';

import { useEffect } from 'react';
import { initAnimations } from '../initAnimations';
import Footer from '@/components/Footer';

export default function Contact() {
  useEffect(() => {
    initAnimations();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-gradient"></div>
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header Section */}
          <div className="text-center space-y-6 fade-trigger">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:scale-105 transition-transform duration-300">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start fade-trigger delay-100">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Office Address */}
                <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 bg-blue-900 rounded-lg">
                      <svg className="w-4 h-4 text-blue-600 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold  text-white">Office Address</h3>
                      <p className="mt-2 text-white ">
                      Grasim Colony, Renukoot<br />
                      Sonebhadra (UP), 231217,<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Details */}
                <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 bg-blue-900 rounded-lg">
                      <svg className="w-4 h-4 text-blue-600 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold  text-white">Contact Details</h3>
                      <div className="mt-2 space-y-1 text-white">
                        <p>Phone: +916306411343</p>
                        <p>Email: contact@pulsebit.tech</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 bg-gray-800 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-100 bg-blue-900 rounded-lg">
                    <svg className="w-6 h-6 text-blue-600 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold  text-white">Business Hours</h3>
                    <div className="mt-2 space-y-1 text-white">
                      <p>Monday - Friday: 6:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="p-4 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group h-64">
                <div className=" p-0 w-full h-full bg-gray-200 bg-gray-700 rounded flex items-center justify-center">
                  {/* <span className="text-gray-500 ">Map Integration</span> */}
                  <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.0267820285385!2d83.04536787399883!3d24.205841578362307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398edaee0c4fc251%3A0x7d53f1c319c02262!2sGrasim%20Chemicals%20Colony!5e0!3m2!1sen!2sin!4v1742608154756!5m2!1sen!2sin"></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="backdrop-blur-sm bg-gray-800/30 p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder='PulseBit'
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-white mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder='Tech'
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder='example@pulsebit.tech'
                  className="w-full px-4 py-2 border border-gray-300 border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder='Your Subject'
                  className="w-full px-4 py-2 border border-gray-300 border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Hi, I am interested in discussing a potential project. I would like to learn more about your services and how we can collaborate together.'
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-700 text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.0267820285385!2d83.04536787399883!3d24.205841578362307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398edaee0c4fc251%3A0x7d53f1c319c02262!2sGrasim%20Chemicals%20Colony!5e0!3m2!1sen!2sin!4v1742608154756!5m2!1sen!2sin"></iframe> */}

      <Footer />
    </>
  );
}
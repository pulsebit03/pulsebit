'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    setMounted(true);
    document.documentElement.className = 'dark';
    // Set active item based on current path
    const path = window.location.pathname;
    const currentItem = path === '/' ? 'Home' : 
                       path === '/about' ? 'About' : 
                       path === '/tech' ? 'Tech Stack' : 
                       path === '/contact' ? 'Contact' : 'Home';
    setActiveItem(currentItem);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header className="relative z-50 w-full backdrop-blur-none border-b border-gray-800/10 shadow-none">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-center h-16 px-4 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
          <Link
            href="/"
            className="block relative z-10"
          >
            <Image src='/projects/brand-logo.png' alt='PulseBit.Tech' width={65} height={55} className="object-contain" />
          </Link>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block bg-gradient-to-r from-purple-500/5 to-blue-500/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
              <div className="absolute left-4">
                <Link
                  href="/"
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg opacity-20 blur transition-all duration-300 group-hover:opacity-30 group-hover:blur-md"></div>
                  <Image src='/projects/brand-logo.png' alt='PulseBit.Tech' width={70} height={60} className="relative object-contain" />
                </Link>
              </div>

              <nav className="flex space-x-12">
                {['Home', 'About', 'Contact', 'Tech Stack'].map((item) => (
                  <Link
                    key={item}
                    href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Tech Stack' ? '/tech' : `${item.toLowerCase()}`}
                    className="relative text-gray-200 hover:text-blue-400 transition-colors py-2 px-1 group overflow-hidden text-sm font-medium"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-t border-gray-800/30 shadow-xl z-50">
        <div className="flex justify-around items-center h-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
          {['Home', 'About', 'Contact', 'Tech Stack'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Tech Stack' ? '/tech' : `${item.toLowerCase()}`}
              onClick={() => setActiveItem(item)}
              className={`flex flex-col items-center justify-center w-full h-full ${activeItem === item ? 'text-blue-400 scale-105' : 'text-gray-400'} transition-all duration-300 hover:text-blue-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-lg relative group`}>
              {activeItem === item && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-sm -z-10" />
              )}
            
              {item === 'Home' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )}
              {item === 'About' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {item === 'Contact' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              )}
              {item === 'Tech Stack' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )}
              <span className="text-xs mt-1">{item}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
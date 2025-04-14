"use client";

import { useRouter } from 'next/navigation';
import ParticlesBackground from './ParticlesBackground';
import { useEffect, useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 overflow-hidden">
      <ParticlesBackground />
      <div 
        className="max-w-6xl mx-auto text-center z-10 space-y-8"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
            Innovate. Transform.<br />
            <span className="text-white">Succeed Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto fade-trigger delay-100 leading-relaxed">
            We transform businesses through cutting-edge technology solutions and innovative digital strategies.
          </p>
        </div>
        <div className="pt-8 fade-trigger delay-200 flex flex-wrap gap-6 justify-center items-center">
          <button 
            onClick={() => router.push('/contact')} 
            className="px-10 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:scale-105 transition-all duration-300"
          >
            Start Your Journey
          </button>
          <button
            onClick={() => router.push('/portfolio')}
            className="px-10 py-4 rounded-full text-lg font-semibold border-2 border-purple-500 text-white hover:bg-purple-500/20 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
          >
            Explore Our Work
          </button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto fade-trigger delay-300">
          {['4+', '10+', '98%', '24/7'].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{stat}</div>
              <div className="text-sm md:text-base text-gray-400 mt-2">
                {index === 0 && 'Years Experience'}
                {index === 1 && 'Projects Delivered'}
                {index === 2 && 'Client Satisfaction'}
                {index === 3 && 'Support Available'}
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </section>
    </>
  );
}

import React from 'react';
import { Search, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your needs and create a comprehensive project plan.'
  },
  {
    number: '02',
    title: 'Design & Prototyping',
    description: 'Creating wireframes and interactive prototypes for your approval.'
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Building your solution with clean code and thorough testing.'
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'Deploying your project and providing ongoing maintenance.'
  }
];

export default function WorkProcess() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-gradient"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 scroll-trigger">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-gradient">How We Work</h2>
          <p className="text-gray-700 text-white max-w-2xl mx-auto text-lg fade-trigger delay-100">
            Our proven process ensures successful project delivery and exceeds client expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group scroll-trigger" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="backdrop-blur-sm bg-gray-800/80 rounded-xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white group-hover:scale-110 transition-transform duration-300 animate-gradient float-animation">
                    {index === 0 && <Search className="w-6 h-6" />}
                    {index === 1 && <Palette className="w-6 h-6" />}
                    {index === 2 && <Code className="w-6 h-6" />}
                    {index === 3 && <Rocket className="w-6 h-6" />}
                  </div>
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 group-hover:scale-110 transition-transform duration-300 animate-gradient">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse">
                    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
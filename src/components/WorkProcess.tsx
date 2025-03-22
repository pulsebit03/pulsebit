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
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How We Work</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our proven process ensures successful project delivery and exceeds client expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group scroll-trigger" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <Search className="w-8 h-8" />}
                    {index === 1 && <Palette className="w-8 h-8" />}
                    {index === 2 && <Code className="w-8 h-8" />}
                    {index === 3 && <Rocket className="w-8 h-8" />}
                  </div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
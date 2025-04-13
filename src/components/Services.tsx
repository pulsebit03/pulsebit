import { Globe, Smartphone, Palette } from 'lucide-react';

const services = [
  {
    title: 'Website Design',
    description: 'We create modern, responsive websites that engage your audience and drive results.',
    features: ['Responsive Design', 'Custom Solutions', 'SEO Optimized', 'User Analytics']
  },
  {
    title: 'Mobile Applications',
    description: 'Build native and cross-platform mobile apps that deliver exceptional user experiences.',
    features: ['iOS & Android', 'Cross Platform', 'Push Notifications', 'Offline Support']
  },
  {
    title: 'Graphics Design',
    description: 'Create stunning visuals that capture your brands essence and message.',
    features: ['Brand Identity', 'UI/UX', 'Logo Design', 'Marketing Assets']
  }
];

export default function Services() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-gradient"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:scale-105 transition-transform duration-300">
            Transforming Ideas Into Reality
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg fade-trigger delay-100">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group backdrop-blur-sm bg-gray-800/80 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 fade-trigger hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white group-hover:scale-110 transition-transform duration-300 animate-gradient float-animation">
                  {index === 0 && <Globe className="w-6 h-6" />}
                  {index === 1 && <Smartphone className="w-6 h-6" />}
                  {index === 2 && <Palette className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 mb-8 text-lg">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-gray-300 group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="mr-3 text-blue-400">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
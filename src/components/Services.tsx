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
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the modern digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 fade-trigger" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-3 mb-4">
                {index === 0 && <Globe className="w-6 h-6 text-primary" />}
                {index === 1 && <Smartphone className="w-6 h-6 text-primary" />}
                {index === 2 && <Palette className="w-6 h-6 text-primary" />}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                    <span className="mr-2 text-primary dark:text-primary">•</span>
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
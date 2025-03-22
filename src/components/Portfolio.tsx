import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce solution with seamless user experience.',
    image: '/projects/ecommerce.svg',
    category: 'Web Development'
  },
  {
    title: 'Health & Fitness App',
    description: 'Mobile app for tracking fitness goals and health metrics.',
    image: '/projects/health.svg',
    category: 'Mobile App'
  },
  {
    title: 'Portfolio Website',
    description: 'Professional portfolio website with modern design.',
    image: '/projects/portfolio.svg',
    category: 'Web Design'
  },
  {
    title: 'Food Delivery App',
    description: 'Real-time food delivery tracking application.',
    image: '/projects/food.svg',
    category: 'Mobile App'
  },
  {
    title: 'Wellness Platform',
    description: 'Comprehensive wellness and meditation platform.',
    image: '/projects/wellness.svg',
    category: 'Web Development'
  },
  {
    title: 'Social Media App',
    description: 'Feature-rich social networking application.',
    image: '/projects/social.svg',
    category: 'Mobile App'
  }
];

export default function Portfolio() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Work</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 scale-trigger" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="aspect-w-16 aspect-h-9 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-800">
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
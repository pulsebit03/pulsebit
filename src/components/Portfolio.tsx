import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';


const projects = [
  {
    title: 'NextHire',
    description: 'NextHire is an AI-powered platform that helps users practice and improve their job interview skills through simulated sessions.',
    image: '/projects/nextHire.png',
    category: 'Web Development(SaaS)',
    url:'https://nexthire.pulsebit.tech/'
  },
  {
    title: 'Logo Design',
    description: 'Custom logo design for your business with attention to detail.',
    image: '/projects/project-3.jpeg',
    category: 'Graphic Design',
    url:'https://vectorvista.anandsharma.info/'
  },
  {
    title: 'Portfolio Website',
    description: 'Professional portfolio website with modern design.',
    image: '/projects/project-1.png',
    category: 'Web Design',
    url:'https://vectorvista.anandsharma.info/'
  },
  
  {
    title: 'E-commerce Solution',
    description: 'Comprehensive wellness and meditation platform.',
    image: '/projects/e-commerce.png',
    category: 'Web Development',
    url:'https://akxbrand02.vercel.app/'
  },{
    title: 'SAAS Solution',
    description: 'Full Stack SAAS solution for businesses.',
    image: '/projects/project-2.png',
    category: 'Mobile & Web App',
    url:'https://genioai.anandsharma.info/'
  },
  {
    title: 'SAAS Solution',
    description: 'Full Stack SAAS solution for Creativity.',
    image: '/projects/genio.png',
    category: 'Mobile & Web App',
    url:'https://genioai.anandsharma.info/'
  }
];

export default function Portfolio() {
  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-trigger">
          <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:scale-105 transition-transform duration-300">Our Recent Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg fade-trigger delay-100">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 scale-trigger transform hover:scale-[1.02] hover:shadow-lg" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="aspect-w-16 aspect-h-9 relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5 bg-gradient-to-b from-transparent to-black/60">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                <a 
                  href={project.url} 
                  className="inline-flex items-center px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white font-medium hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
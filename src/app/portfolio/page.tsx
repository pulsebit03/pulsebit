"use client";

import { useState } from 'react';
import ParticlesBackground from '@/components/ParticlesBackground';
import Footer from '@/components/Footer';

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    link?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A modern e-commerce solution with real-time inventory management and secure payment processing.',
        image: '/projects/e-commerce.png',
        category: 'Web Development',
        technologies: ['React', 'NodeJS', 'MongoDB', 'Express'],
        link: 'https://akxbrand.com'
    },
    {
        id: 2,
        title: 'Genio AI Assistant',
        description: 'An AI-powered virtual assistant for automated customer support and business process automation.',
        image: '/projects/genio.png',
        category: 'AI & Machine Learning',
        technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
        link: 'https://genioai.anandsharma.info'
    },
    {
        id: 3,
        title: 'NextHire Platform',
        description: 'A comprehensive recruitment platform connecting talented professionals with leading companies.',
        image: '/projects/nextHire.png',
        category: 'Web Development',
        technologies: ['NextJS', 'TypeScript', 'NodeJS', 'MongoDB'],
        link: 'https://nexthire.pulsebit.tech'
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'Professional portfolio website with modern design.',
        image: '/projects/project-1.png',
        category: 'Web Development',
        technologies: ['ReactJS', 'NodeJS'],
        link: 'https://anandsharma.info'
    },
    {
        id: 5,
        title: 'NextHire Platform',
        description: 'A comprehensive recruitment platform connecting talented professionals with leading companies.',
        image: '/projects/nextHire.png',
        category: 'Web Development',
        technologies: ['NextJS', 'TypeScript', 'NodeJS', 'PostgreSQL'],
        link: 'https://nexthire.pulsebit.tech'
    },
    {
        id: 6,
        title: 'Logo Design',
        description: 'Custom logo design for your business with attention to detail.',
        image: '/projects/project-3.jpeg',
        category: 'Web Development',
        technologies: ['ReactJS', 'TypeScript', 'NodeJS'],
        link: 'https://nexthire.pulsebit.tech'
    },
];

const categories = ['All', 'Web Development', 'AI & Machine Learning', 'Mobile Development', 'UI/UX Design'];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <>
            <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
                <ParticlesBackground />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">
                            Our Portfolio
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient">
                            Showcasing Our Best Work
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                            Explore our diverse portfolio of successful projects that demonstrate our expertise in delivering innovative digital solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-lg'
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div
                                key={project.id}
                                className={`group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border ${hoveredProject === project.id ? 'border-blue-500/50 shadow-2xl scale-105' : 'border-gray-700/50'} transition-all duration-300`}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-sm bg-gray-700/50 text-blue-400 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white rounded-full text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                        >
                                            View Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
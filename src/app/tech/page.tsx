'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect } from 'react';
import { initAnimations } from '../initAnimations';

export default function TechStack() {
    useEffect(() => {
        initAnimations();
    }, []);

    return (
        <>
            <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-gradient"></div>
                <div className="max-w-7xl mx-auto space-y-16 relative z-10">
                    {/* Hero Section */}
                    <section className="text-center space-y-6 fade-trigger">
                        <span className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300">Our Tech Stack</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-gradient hover:scale-105 transition-transform duration-300">
                            Powering Innovation with Modern Tools
                        </h1>
                        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
                            We leverage cutting-edge technologies to deliver exceptional digital solutions. Our
                            carefully selected tech stack ensures scalability, performance, and innovation.
                        </p>
                    </section>

                    {/* Design & UI/UX Tools */}
                    <section className="space-y-8 fade-trigger delay-100">
                        <h2 className="text-2xl font-semibold  text-white text-center mb-8">Design & UI/UX Tools</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Figma */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/figma.svg"
                                            alt="Figma"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold  text-white">Figma</h3>
                                </div>
                                <p className="text-gray-600 text-white mb-4">Professional UI/UX design and prototyping</p>
                                <ul className="space-y-2 text-gray-600 text-white">
                                    <li>• Collaborative design workspace</li>
                                    <li>• Interactive prototyping</li>
                                    <li>• Design system management</li>
                                    <li>• Real-time collaboration</li>
                                </ul>
                            </div>

                            {/* Canva */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/canva-logo.png"
                                            alt="Canva"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold  text-white">Canva</h3>
                                </div>
                                <p className="text-gray-600 text-white mb-4">Quick graphics and social media designs</p>
                                <ul className="space-y-2 text-gray-600 text-white">
                                    <li>• Social media graphics</li>
                                    <li>• Marketing materials</li>
                                    <li>• Presentation templates</li>
                                    <li>• Brand asset creation</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Development Technologies */}
                    <section className="space-y-8 fade-trigger delay-200">
                        <h2 className="text-2xl font-semibold  text-white text-center mb-8">Development Technologies</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Next.js */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/nextjs.svg"
                                            alt="Next.js"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold  text-white">Next.js</h3>
                                </div>
                                <p className="text-gray-600 text-white mb-4">React framework for production</p>
                                <ul className="space-y-2 text-gray-600 text-white">
                                    <li>• Server-side rendering</li>
                                    <li>• Static site generation</li>
                                    <li>• API routes</li>
                                    <li>• Built-in optimization</li>
                                </ul>
                            </div>

                            {/* MERN Stack */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="flex space-x-2">
                                        <Image
                                            src="/tech/MERN-logo.png"
                                            alt="MERN Stack"
                                            width={120}
                                            height={50}
                                            className="object-contain"
                                        />
                                        
                                    </div>
                                    <h3 className="text-xl font-semibold  text-white">MERN Stack</h3>
                                </div>
                                <p className="text-gray-600 text-white mb-4">Full-stack JavaScript solution</p>
                                <ul className="space-y-2 text-gray-600 text-white">
                                    <li>• MongoDB for flexible data storage</li>
                                    <li>• Express.js backend framework</li>
                                    <li>• React for dynamic UIs</li>
                                    <li>• Node.js runtime environment</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Deployment Solutions */}
                    <section className="space-y-8 fade-trigger delay-300">
                        <h2 className="text-2xl font-semibold  text-white text-center mb-8">Deployment Solutions</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {/* AWS */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/aws.svg"
                                            alt="AWS"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold  text-white mb-2">Amazon Web Services</h3>
                                <p className="text-gray-600 text-white">Cloud infrastructure</p>
                            </div>

                            {/* Vercel */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/vercel.svg"
                                            alt="Vercel"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold  text-white mb-2">Vercel</h3>
                                <p className="text-gray-600 text-white">Frontend deployment</p>
                            </div>

                            {/* GitHub */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/github.svg"
                                            alt="GitHub"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold  text-white mb-2">GitHub</h3>
                                <p className="text-gray-600 text-white">Version control</p>
                            </div>

                            {/* Hostinger */}
                            <div className="p-6 backdrop-blur-sm bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105 group">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/hostinger.png"
                                            alt="Hostinger"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-2">Hostinger</h3>
                                <p className="text-gray-600 text-white">Web hosting</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
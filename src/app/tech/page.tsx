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
            <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Hero Section */}
                    <section className="text-center space-y-6 fade-trigger">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Our Technology Stack</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Powering Innovation with Modern Tools
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We leverage cutting-edge technologies to deliver exceptional digital solutions. Our
                            carefully selected tech stack ensures scalability, performance, and innovation.
                        </p>
                    </section>

                    {/* Design & UI/UX Tools */}
                    <section className="space-y-8 fade-trigger delay-100">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">Design & UI/UX Tools</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Figma */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/figma.svg"
                                            alt="Figma"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Figma</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">Professional UI/UX design and prototyping</p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Collaborative design workspace</li>
                                    <li>• Interactive prototyping</li>
                                    <li>• Design system management</li>
                                    <li>• Real-time collaboration</li>
                                </ul>
                            </div>

                            {/* Canva */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/canva-logo.png"
                                            alt="Canva"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Canva</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">Quick graphics and social media designs</p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">Development Technologies</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Next.js */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src="/tech/nextjs.svg"
                                            alt="Next.js"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Next.js</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">React framework for production</p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Server-side rendering</li>
                                    <li>• Static site generation</li>
                                    <li>• API routes</li>
                                    <li>• Built-in optimization</li>
                                </ul>
                            </div>

                            {/* MERN Stack */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="flex space-x-2">
                                        <Image
                                            src="/tech/mongodb.svg"
                                            alt="MongoDB"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                        <Image
                                            src="/tech/express-logo.png"
                                            alt="Express"
                                            width={24}
                                            height={24}
                                            // fill
                                            className="object-contain"
                                        />
                                        <Image
                                            src="/tech/react.svg"
                                            alt="React"
                                            width={24}
                                            height={24}
                                            // fill
                                            className="object-contai bg-white bg-blend-screen"
                                        />
                                        <Image
                                            src="/tech/nodejs.svg"
                                            alt="Node.js"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">MERN Stack</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">Full-stack JavaScript solution</p>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
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
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">Deployment Solutions</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            {/* AWS */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Amazon Web Services</h3>
                                <p className="text-gray-600 dark:text-gray-300">Cloud infrastructure</p>
                            </div>

                            {/* Vercel */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Vercel</h3>
                                <p className="text-gray-600 dark:text-gray-300">Frontend deployment</p>
                            </div>

                            {/* GitHub */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                                <p className="text-gray-600 dark:text-gray-300">Version control</p>
                            </div>

                            {/* Hostinger */}
                            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
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
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hostinger</h3>
                                <p className="text-gray-600 dark:text-gray-300">Web hosting</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
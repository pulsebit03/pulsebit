'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import { useEffect } from 'react';
import { initAnimations } from '../initAnimations';

export default function About() {
    useEffect(() => {
        initAnimations();
    }, []);
    return (
        <>
            <div className="min-h-screen py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto space-y-16">
                    {/* Hero Section */}
                    <section className="text-center space-y-6 fade-trigger">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">We Transform Ideas Into Digital Reality</h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Building innovative solutions since 2024
                        </p>
                    </section>

                    {/* Metrics Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center fade-trigger delay-100">
                        {[
                            { number: '10+', label: 'Sucessfuly Projects Completed' },
                            { number: '3+', label: 'Team Members' },
                            { number: '98%', label: 'Client Satisfaction' }
                        ].map((metric, index) => (
                            <div key={index} className="p-6">
                                <h2 className="text-4xl font-bold text-primary mb-2">{metric.number}</h2>
                                <p className="text-gray-600 dark:text-gray-300">{metric.label}</p>
                            </div>
                        ))}
                    </section>

                    {/* Our Story */}
                    <section className="space-y-8 fade-trigger delay-200">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="relative h-[300px] md:h-[400px] rounded-lg shadow-lg">
                                <Image
                                    src="/projects/brand-logo.gif"
                                    alt="Our Story"
                                    width={1500}
                                    height={1500}
                                    // fill
                                    className="object-contain rounded-lg shadow-lg rotate-3"
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    {/* {[
                                        { year: '2015', text: 'Company founded in Chicago, Illinois.' },
                                        { year: '2018', text: 'Reach 100+ team members, expand into global markets.' },
                                        { year: '2020', text: 'Launched award-winning products globally.' },
                                        { year: '2023', text: 'Established presence in major markets worldwide.' }
                                    ].map((milestone, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="text-primary font-bold">{milestone.year}</div>
                                            <div className="text-gray-600 dark:text-gray-300">{milestone.text}</div>
                                        </div>
                                    ))} */}
                                    <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300 tracking-wide max-w-4xl mx-auto px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        PulseBit.tech creates intuitive websites and mobile applications to help businesses thrive in the digital world. Our services include modern, responsive website design, cross-platform mobile app development, and captivating graphics design.</p>
                                    <p className='text-lg leading-relaxed text-gray-600 dark:text-gray-300 tracking-wide max-w-4xl mx-auto px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'>
                                        We follow a structured process from discovery and planning to design, development, testing, and launch, ensuring high-quality results. Explore our projects in e-commerce, health and fitness, and social media to see how we turn ideas into impactful digital solutions.</p>                                    </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission, Vision, Values */}
                    <section className="grid md:grid-cols-3 gap-8 fade-trigger delay-300">
                        {[
                            {
                                title: 'Mission',
                                description: 'To provide innovative solutions that empower businesses to thrive in the digital era.'
                            },
                            {
                                title: 'Vision',
                                description: 'To be the leading innovator in creating seamless, future-ready digital experiences.'
                            },
                            {
                                title: 'Values',
                                description: 'Integrity, creativity, collaboration, and commitment to excellence in everything we do.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                            </div>
                        ))}
                    </section>

                    {/* Meet Our Leadership */}
                    <section className="space-y-8 fade-trigger delay-400">
                        <h2 className="text-3xl font-bold text-center">Meet Our Leadership</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: 'Nitesh Singh',
                                    role: 'Founder & Chairman',
                                    image: '/projects/founder.jpeg',
                                    socials: [
                                        { type: 'instagram', url: 'https://www.instagram.com/ajashishsingh_099' },
                                        { type: 'linkedin', url: 'https://www.linkedin.com/in/nitesh-singh-pulsebit' }
                                    ]
                                },
                                {
                                    name: 'Asheesh Yadav',
                                    role: 'Product Manager & Co-Founder',
                                    image: '/projects/co-founder.jpeg',
                                    socials: [
                                        { type: 'instagram', url: 'https://www.instagram.com/mr._asheesh' },
                                        { type: 'linkedin', url: 'https://www.linkedin.com/in/asheesh-yadav-pulsebit' }
                                    ]
                                },
                                {
                                    name: 'Anand Kumar Sharma',
                                    role: 'Head of Development & CEO',
                                    image: '/projects/ceo.jpeg',
                                    socials: [
                                        { type: 'instagram', url: 'https://instagram.com/pulsebit.tech' },
                                        { type: 'linkedin', url: 'https://www.linkedin.com/in/anands2959' },
                                        { type: 'github', url: 'https://github.com/anands2959' }
                                    ]
                                }
                            ].map((leader, index) => (
                                <div key={index} className="text-center space-y-4">
                                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                                        <Image
                                            src={leader.image}
                                            alt={leader.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{leader.role}</p>
                                    <div className="flex justify-center space-x-4">
                                        {leader.socials.map((social, socialIndex) => {
                                            if (social.type === 'instagram') {
                                                return (
                                                    <a
                                                        key={`${social.type}-${socialIndex}`}
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-primary transition-colors"
                                                    >
                                                        <span className="sr-only">{social.type}</span>
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                                        </svg>
                                                    </a>
                                                );
                                            }
                                            if (social.type === 'linkedin') {
                                                return (
                                                    <a
                                                        key={`${social.type}-${socialIndex}`}
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-primary transition-colors"
                                                    >
                                                        <span className="sr-only">{social.type}</span>
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                        </svg>
                                                    </a>
                                                );
                                            }
                                            if (social.type === 'github') {
                                                return (
                                                    <a
                                                        key={`${social.type}-${socialIndex}`}
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-primary transition-colors"
                                                    >
                                                        <span className="sr-only">{social.type}</span>
                                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                        </svg>
                                                    </a>
                                                );
                                            }
                                            return null;
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Core Values */}
                    <section className="space-y-8 fade-trigger delay-500">
                        <h2 className="text-3xl font-bold text-center">Our Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    ),
                                    title: 'Collaborative Environment',
                                    description: 'We foster a culture of teamwork and mutual support'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                                        </svg>
                                    ),
                                    title: 'Customer Focus',
                                    description: 'Our clients success is our top priority'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    ),
                                    title: 'Excellence',
                                    description: 'We strive for excellence in everything we do'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    ),
                                    title: 'Integrity',
                                    description: 'We maintain the highest ethical standards'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    ),
                                    title: 'Innovation',
                                    description: 'We embrace new ideas and creative solutions'
                                },
                                {
                                    icon: (
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    ),
                                    title: 'Work-Life Balance',
                                    description: 'We value our teams wellbeing'
                                }
                            ].map((value, index) => (
                                <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center space-x-4 mb-4">
                                        {value.icon}
                                        <h3 className="text-xl font-semibold">{value.title}</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Trusted By */}
                    <section className="space-y-12 fade-trigger delay-600 pb-10 ">
                        <h2 className="text-3xl font-bold text-center">Client Testimonials</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
                            {/* Testimonial 1 */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Shubham Awasthi</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">ServiceNow Developer @ Now Compiler</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;PulseBit.tech transformed our online presence with a sleek, responsive website. Their attention to detail and smooth execution exceeded our expectations!&rdquo;</p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Ayush Awasthi</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Student</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;Their mobile app development team delivered a flawless product that boosted our user engagement by 70%! Highly recommend their services.&rdquo;</p>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Arpit Ranjan Malviya</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Sales Officer, ITC</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic">&ldquo;Working with PulseBit.tech was a game-changer. They built our e-commerce platform with stunning UI/UX, and our sales skyrocketed!&rdquo;</p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Anoop Sharma</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Branch Manager, Utkarsh Small Finance Bank</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic">&quot;The team&apos;s professionalism and innovative approach made our app stand out. They delivered on time with excellent post-launch support!&quot;</p>
                            </div>
                        </div>

                        {/* <div className="mt-16">
                            <h3 className="text-2xl font-bold text-center mb-8">Trusted By</h3>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                                <Image src="/logo/techgrade.svg" alt="TechGrade" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                                <Image src="/logo/photograde.svg" alt="PhotoGrade" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                                <Image src="/logo/freelance.svg" alt="Freelance" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                                <Image src="/logo/softpoint.svg" alt="SoftPoint" width={150} height={50} className="opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
                        </div> */}
                    </section>
                </div>

            </div>
            <Footer />
        </>
    );
}
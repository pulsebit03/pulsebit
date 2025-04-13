'use client';
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    const email = (e.target as HTMLFormElement).email.value;
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image src='/projects/brand-logo.png' alt='PulseBit.Tech' width={180} height={90} className="object-contain" />
            </Link>
            <p className="text-gray-300 text-lg">
              Convert Your Imagination into Innovation
            </p>
          </div>

          {/* Quick Links */}
          <nav className="space-y-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Navigation</h3>
            <div className="flex flex-col space-y-3">
              {['Home', 'About', 'Tech Stack', 'Privacy & Policy', 'Terms & Conditions'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Privacy & Policy' ? '/privacy' : item === 'Terms & Conditions' ? '/terms' : item === 'Tech Stack' ? '/tech' : `#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors hover:translate-x-2 transform duration-300 flex items-center space-x-2"
                >
                  <span className="text-blue-400">•</span>
                  <span>{item}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                <MapPin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Grasim Colony, Renukoot<br />Sonebhadra(UP), 231217, India</span>
              </li>
              <li>
                <a href="mailto:contact@pulsebit.tech" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>contact@pulsebit.tech</span>
                </a>
              </li>
              <li>
                <a href="tel:+916306411343" className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>+91 6306411343</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Newsletter</h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  required
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg pointer-events-none"></div>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 PulseBit.tech. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/pulsebit03" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/pulsebit.tech/" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
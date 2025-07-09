import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Animated gradient text
  const AnimatedGradientText = ({ children }) => (
    <span className="animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      {children}
    </span>
  );

  // Feature card component
  const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className={`glass-card p-6 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}>
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );

  // Mock features data
  const features = [
    {
      icon: SparklesIcon,
      title: 'Modern Design',
      description: 'Experience our beautiful, responsive UI built with the latest web technologies.',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
    },
    {
      icon: ArrowRightIcon,
      title: 'Fast & Reliable',
      description: 'Lightning-fast performance with optimized loading and smooth animations.',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-400',
    },
    {
      icon: SparklesIcon,
      title: 'User Friendly',
      description: 'Intuitive interface that makes navigation and interaction a breeze.',
      color: 'bg-gradient-to-br from-pink-500 to-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-gray-200/50 dark:bg-grid-gray-800/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/80 dark:to-gray-900/80" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="glass-card inline-block px-4 py-2 rounded-full mb-6 shadow-lg">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                Welcome to the future of web experiences
              </p>
            </div>
            
            <h1 className={`text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Build Amazing <AnimatedGradientText>Digital</AnimatedGradientText> Experiences
            </h1>
            
            <p className={`mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Discover our platform's powerful features, beautiful design, and seamless user experience that will take your online presence to the next level.
            </p>
            
            <div className={`mt-10 flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link
                to="/products"
                className="glass-button bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                to="/blog"
                className="glass-button border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-8 py-4 rounded-xl text-lg font-medium hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Read Our Blog</span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Choose Us
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              We combine innovative technology with exceptional design to deliver outstanding results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 delay-${(index + 1) * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-16 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 my-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 transform -skew-y-6"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Join thousands of satisfied customers who trust our platform.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/register"
              className="glass-button bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:shadow-xl hover:-translate-y-0.5 transform transition-all duration-300 inline-flex items-center"
            >
              <span>Create Free Account</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

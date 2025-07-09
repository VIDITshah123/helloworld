import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          <span className="block">Welcome to</span>
          <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            GlassUI
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          A beautiful, modern UI library with glassmorphism design system built with React and Tailwind CSS.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/products"
            className="glass-button px-8 py-3 text-base font-medium text-white hover:opacity-90 transition-opacity"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="glass-button-outline px-8 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Modern Design',
            description: 'Beautiful glassmorphism components that look great on any device.',
            icon: '🎨',
          },
          {
            title: 'Fully Responsive',
            description: 'Looks amazing on mobile, tablet, and desktop devices.',
            icon: '📱',
          },
          {
            title: 'Dark Mode',
            description: 'Built-in dark mode support that respects system preferences.',
            icon: '🌓',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-xl hover:translate-y-[-4px] transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

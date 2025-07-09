import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          We create beautiful, modern web experiences with a focus on design and performance.
        </p>
      </div>

      <div className="glass-card p-8 rounded-xl mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Our Story
        </h2>
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Founded in 2023, GlassUI was born out of a passion for creating beautiful,
            accessible, and performant user interfaces. We believe that great design
            should be both functional and visually stunning.
          </p>
          <p>
            Our team of designers and developers work together to push the boundaries
            of what's possible with modern web technologies, focusing on creating
            intuitive and engaging user experiences.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To empower developers and designers with the tools and resources they need to
            create stunning, performant web applications with ease.
          </p>
        </div>
        <div className="glass-card p-6 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Values</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Quality and attention to detail</li>
            <li>• User-centered design</li>
            <li>• Continuous learning and improvement</li>
            <li>• Open and honest communication</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

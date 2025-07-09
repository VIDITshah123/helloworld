import React from 'react';

const Products = () => {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Products</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Discover our amazing collection of glassmorphism UI components and templates.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="glass-card p-6 rounded-xl hover:translate-y-[-4px] transition-transform duration-300">
            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Product {item}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Beautiful glassmorphism component designed for modern web applications.
            </p>
            <button className="glass-button w-full py-2 text-sm font-medium">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

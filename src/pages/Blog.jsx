import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Glassmorphism',
      excerpt: 'Learn how to implement glassmorphism design in your React applications.',
      date: 'May 15, 2023',
      readTime: '5 min read',
      category: 'Design',
    },
    {
      id: 2,
      title: 'Advanced Tailwind CSS Techniques',
      excerpt: 'Explore advanced techniques to take your Tailwind CSS skills to the next level.',
      date: 'June 2, 2023',
      readTime: '8 min read',
      category: 'Development',
    },
    {
      id: 3,
      title: 'The Future of UI Design',
      excerpt: 'Discover the latest trends and predictions for the future of user interfaces.',
      date: 'June 18, 2023',
      readTime: '6 min read',
      category: 'Design',
    },
  ];

  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Our <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Latest articles and tutorials about design, development, and more.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="glass-card p-6 rounded-xl hover:translate-y-[-4px] transition-transform duration-300">
            <div className="flex items-center space-x-2 text-sm text-blue-500 mb-2">
              <span className="font-medium">{post.category}</span>
              <span>•</span>
              <time dateTime={post.date} className="text-gray-500">
                {post.date}
              </time>
              <span>•</span>
              <span className="text-gray-500">{post.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {post.excerpt}
            </p>
            <button className="text-blue-500 hover:text-blue-400 font-medium transition-colors duration-200">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

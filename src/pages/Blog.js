export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      href: '#',
      description:
        'Learn the basics of React and how to build your first application with this comprehensive guide.',
      date: 'Mar 16, 2023',
      datetime: '2023-03-16',
      category: { title: 'React', href: '#' },
      author: {
        name: 'John Doe',
        role: 'Senior Developer',
        href: '#',
      },
    },
    {
      id: 2,
      title: 'Advanced State Management',
      href: '#',
      description:
        'Explore advanced state management techniques in modern React applications.',
      date: 'Mar 10, 2023',
      datetime: '2023-03-10',
      category: { title: 'State Management', href: '#' },
      author: {
        name: 'Jane Smith',
        role: 'Lead Developer',
        href: '#',
      },
    },
    {
      id: 3,
      title: 'Building Responsive UIs',
      href: '#',
      description:
        'Create beautiful, responsive user interfaces that work on any device with these tips and tricks.',
      date: 'Feb 12, 2023',
      datetime: '2023-02-12',
      category: { title: 'UI/UX', href: '#' },
      author: {
        name: 'Alex Johnson',
        role: 'UI/UX Designer',
        href: '#',
      },
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <span className="text-gray-400">{post.author.name.charAt(0)}</span>
                </div>
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

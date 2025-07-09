export default function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: '$29.99', description: 'Amazing product with great features' },
    { id: 2, name: 'Product 2', price: '$49.99', description: 'Premium quality for professionals' },
    { id: 3, name: 'Product 3', price: '$19.99', description: 'Perfect for everyday use' },
    { id: 4, name: 'Product 4', price: '$99.99', description: 'Top of the line performance' },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Check out our amazing selection of products
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 sm:aspect-[2/1] lg:aspect-[3/2]">
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <span>Product Image</span>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500">{product.price}</span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={`/products/${product.id}`}>
                      <span className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="py-8 px-4 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-start bg-white shadow-md rounded-lg p-6">
        <div className="w-16 flex-shrink-0 flex flex-col text-center leading-none">
          <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200 text-sm">Stock</span>
          <span className="font-bold text-lg text-gray-800">{product.stock}</span>
        </div>
        <div className="flex-grow pl-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1 uppercase">{product.category}</h2>
          <h1 className="title-font text-xl font-semibold text-gray-900 mb-2">{product.title}</h1>
          <p className="leading-relaxed text-sm text-gray-600 mb-4">{product.description}</p>
          <div className="inline-flex items-center">
            <img
              alt={product.title}
              src={product.thumbnail}
              className="w-10 h-10 rounded-full object-cover object-center mr-3"
            />
            <span className="title-font font-medium text-gray-900">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

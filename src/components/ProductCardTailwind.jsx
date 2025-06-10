
import React from 'react';

function ProductCardTailwind({ product }) {
  if (!product) return null; 

  return (
    <div className="bg-pink-100 rounded-xl shadow-md p-4 flex flex-col justify-between h-full hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-semibold text-pink-800 mb-2">{product.title}</h2>
      <p className="text-sm text-gray-700 flex-grow">
        {product.description ? product.description.slice(0, 80) + '...' : product.category}
      </p>
      <div className="mt-3 flex justify-between items-center">
        <span className="text-base font-bold text-gray-800">${product.price}</span>
        <span className="text-sm bg-pink-200 text-pink-800 px-2 py-1 rounded-full">
          {product.rating ?? `Stock: ${product.stock}`}
        </span>
      </div>
    </div>
  );
}

export default ProductCardTailwind;

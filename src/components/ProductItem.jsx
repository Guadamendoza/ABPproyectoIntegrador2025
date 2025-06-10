import React from 'react'

function ProductItem ({title, price, category, stock}) {

    

 return (

        <>
             <div className="bg-pink-100 border p-4 m-2 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 font-medium">${price}</p>
                <p className="text-gray-700" >Stock: {stock}</p>
                <p className="text-gray-600" >Categoría: {category}</p>
            

             
      </div>
    </>
  );
}

export default ProductItem;
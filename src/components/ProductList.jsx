import React from 'react';
import ProductItem from './ProductItem.jsx'; //importando componente propio

function ProductList({ products }) {
  return (
    <>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">{/*Estilos Responsivos*/}

        {products.map(p => (
          <div key={p.id}>
            <ProductItem
              title={p.title}
              price={p.price}
              category={p.category}
              stock={p.stock}
              
            />
          </div>
        ))}
        
        {/* Renderización condicional por si no se encuentran productos */}
        {products.length === 0 && <div>No se encontraron productos</div>}

      
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default ProductList;

import React, {useState} from 'react';
import GraficoBarra from './graficoBarra';
import GraficoTorta from './GraficoTorta'; 
import GraficoLinea from './GraficoLinea';
import TailwindEstadisticas from './TailwindEstadisticas';
import EstadisticasContenido from './ContenidoEstadisticas';

function Estadisticas ({ filteredProducts }) {
  const [show, setShow] = useState(true); // Estado para controlar la visibilidad de las estadísticas

  if (!filteredProducts || filteredProducts.length === 0) {
  return <p className="text-red-500">No hay productos disponibles para mostrar estadísticas.</p>; //si no hay productos mistramos este mensaje
}

const maxProduct = Math.max(...filteredProducts.map(p => p.price)); // map va a devolver una lista con los precios y los tres puntos va a separar los precios, luego el max va a devolver el precio mayor
const minProduct = Math.min(...filteredProducts.map(p => p.price));
const longitud = filteredProducts.filter(p => p.title.length > 20).length;

// precio promedio de todos los productos 
const avgPrice = (filteredProducts.reduce((acc, p) => acc + p.price, 0) / filteredProducts.length).toFixed(2) || 0; //tofixed para que muestre solo 2 decimales

   //cantidad de productos por categoria
  const categorias = [...new Set(filteredProducts.map(p => p.category))]; // las categorias  de los productos filtrados
  const productosPorCategoria = categorias.map(cat => ({ // para cada categoria, vamos a crear un objeto con la categoria y la cantidad de productos que tiene
  categoria: cat,
  cantidad: filteredProducts.filter(p => p.category === cat).length
})); 

//precio promedio por categoria
const precioPromedioPorCategoria = categorias.map(cat => { // para cada categoria, vamos a crear un objeto con la categoria y el precio promedio de los productos que tiene
  const filtrados = filteredProducts.filter(p => p.category === cat); // filtramos los productos por categoria
  const promedio = (filtrados.reduce((acc, p) => acc + p.price, 0) / filtrados.length).toFixed(2) // calculamos el precio promedio de los productos filtrados y toFixed para que solo muestre dos decimales
  return { categoria: cat, promedio };
});

// productos con stock mayor a 50 
    const stockOver50 = filteredProducts.filter(p => p.stock > 50).length;

// productos con rating mayor a 4.5 
const ratingOver45 = filteredProducts.filter(p => p.rating > 4.5).length;

// producto mas caro y mas barato por categoria
const extremosPorCategoria = categorias.map(cat => { 
  const productosDeCategoria = filteredProducts.filter(p => p.category === cat); 
  const maxPrecio = Math.max(...productosDeCategoria.map(p => p.price));
  const minPrecio = Math.min(...productosDeCategoria.map(p => p.price)); 

  return {
    categoria: cat,
    maxPrecio,
    minPrecio }
  });


 
// rating general de todos los productos 
const promedioRatingGeneral = (filteredProducts.reduce((acc, p) => acc + p.rating, 0) / filteredProducts.length).toFixed(2); // calculamos el rating promedio de todos los productos y lo redondeamos a dos decimales

// rating promedio por categoria
const promedioRatingPorCategoria = categorias.map(cat => { //recorre el array 
  const productosCat = filteredProducts.filter(p => p.category === cat); //filtra la categoriaa
  const sumaRatings = productosCat.reduce((acc, p) => acc + p.rating, 0); //suma todos los valores de rating
  const promedio = productosCat.length > 0 ? (sumaRatings / productosCat.length).toFixed(2) : "0.00"; //calcula el promedio y tofixedsirve para ponder solo 2 decimales
  return {
    categoria: cat,
    promedio
  };
});

    return (
      <>
        <button className="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700 transition"  onClick={() => setShow(!show)}>
          {show ? "Ocultar" : "Mostrar"}
        </button>
        {show && (

          <div>
        
           {show && (
        <EstadisticasContenido maxProduct={maxProduct}minProduct={minProduct} longitud={longitud} avgPrice={avgPrice}
          stockOver50={stockOver50} ratingOver45={ratingOver45} productosPorCategoria={productosPorCategoria} precioPromedioPorCategoria={precioPromedioPorCategoria} extremosPorCategoria={extremosPorCategoria}
          promedioRatingGeneral={promedioRatingGeneral} promedioRatingPorCategoria={promedioRatingPorCategoria} filteredProducts={filteredProducts}
        />
      )}
          </div>
        )}
      </>
  );
}

export default Estadisticas; 
import React, {useState} from 'react';
import Estadisticas from './Estadisticas.jsx'; // Importando el componente Estadisticas
function Stats({ maxProduct,minProduct, longitud,stockOver50, ratingOver45, productosPorCategoria, precioPromedioPorCategoria, extremosPorCategoria, promedioRatingGeneral, promedioRatingPorCategoria
}) 
  {
  const [show, setShow] = useState(true); // Estado para controlar la visibilidad de las estadísticas
    return (
      <>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"  onClick={() => setShow(!show)}> {show? "Ocultar" : "Mostrar"}</button>
       { show && (<div className="bg-blue-50 p-4 mt-6 rounded-lg shadow-md transition-opacity duration-100">
        
          <h2 className="text-xl font-bold mb-2 text-blue-800">Estadísticas</h2>
          <p>Precio máximo: ${maxProduct}</p>
          <p>Precio mínimo: ${minProduct}</p>
          <p>Productos con más de 20 caracteres: {longitud}</p>

          <p>stockOver50: {stockOver50}</p>
          <p> Productos con rating mayor a 4.5: {ratingOver45}</p>
           <h3 className="font-semibold mt-4"> Cantidad por categoría:</h3>
          <ul className="list-disc list-inside">
            {productosPorCategoria.map((cat, i) => (
              <li key={i}>{cat.categoria}: {cat.cantidad}</li>
            ))}
          </ul>
           <h3 className="font-semibold mt-4"> Precio promedio por categoría:</h3>
          <ul className="list-disc list-inside">
            {precioPromedioPorCategoria.map((cat, i) => (
              <li key={i}>{cat.categoria}: ${cat.promedio}</li>
            ))}
          </ul>

         <h3 className="font-semibold mt-4"> Extremos de precio por categoría:</h3>
          <ul className="list-disc list-inside">
            {extremosPorCategoria.map((cat, i) => (
              <li key={i}>
                {cat.categoria} — Máx: ${cat.maxPrecio} / Mín: ${cat.minPrecio}
              </li>
            ))}
          </ul>

           <h3 className="font-semibold mt-4"> Rating promedio general:</h3>
          <p>{promedioRatingGeneral}</p>

 <h3 className="font-semibold mt-4"> Rating promedio por categoría:</h3>
          <ul className="list-disc list-inside">
            {promedioRatingPorCategoria.map((cat, i) => (
              <li key={i}>{cat.categoria}: {cat.promedio}</li>
            ))}
          </ul>


        </div>)}
      </>
    );
  }
  
  export default Stats;
  
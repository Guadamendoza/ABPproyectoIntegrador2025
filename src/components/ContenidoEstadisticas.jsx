import React from 'react';
import GraficoBarra from './graficoBarra';
import GraficoTorta from './GraficoTorta';
import GraficoLinea from './GraficoLinea';
import TailwindEstadisticas from './TailwindEstadisticas';

function EstadisticasContenido({maxProduct, minProduct,longitud,avgPrice,stockOver50, ratingOver45, productosPorCategoria, precioPromedioPorCategoria, extremosPorCategoria,promedioRatingGeneral, promedioRatingPorCategoria,filteredProducts
}) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4 text-pink-800">Estadísticas</h3>

      <p className="font-semibold mt-4">Precio máximo: ${maxProduct}</p>
      <p className="font-semibold mt-4">Precio mínimo: ${minProduct}</p>
      <p className="font-semibold mt-4">Productos con título largo: {longitud}</p>
      <p className="font-semibold mt-4">Precio promedio: ${avgPrice}</p>
      <p className="font-semibold mt-4">Stock mayor a 50: {stockOver50}</p>
      <p className="font-semibold mt-4">Rating mayor a 4.5: {ratingOver45}</p>

      <h3 className="font-semibold mt-4">Cantidad por categoría:</h3>
      <ul>
        {productosPorCategoria.map((cat, i) => (
          <li key={i}>{cat.categoria}: {cat.cantidad}</li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Precio promedio por categoría:</h3>
      <ul>
        {precioPromedioPorCategoria.map((cat, i) => (
          <li key={i}>{cat.categoria}: ${cat.promedio}</li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Extremos por categoría:</h3>
      <ul>
        {extremosPorCategoria.map((cat, i) => (
          <li key={i}>
            {cat.categoria}: Máx ${cat.maxPrecio} / Mín ${cat.minPrecio}
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Rating promedio general:</h3>
      <p>{promedioRatingGeneral}</p>

      <h3 className="font-semibold mt-4">Rating promedio por categoría:</h3>
      <ul>
        {promedioRatingPorCategoria.map((cat, i) => (
          <li key={i}>{cat.categoria}: {cat.promedio}</li>
        ))}
      </ul>

      <GraficoBarra filteredProducts={filteredProducts} />
      <GraficoTorta filteredProducts={filteredProducts} />
      <GraficoLinea />
      <TailwindEstadisticas />
    </div>
  );
}

export default EstadisticasContenido;

import React from 'react';

function TailwindEstadisticas({ children }) {
return (
  <section className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl shadow-lg border border-pink-300">
    <p className="text-sm text-pink-700">Estadísticas</p>
    <div className="mb-4 border-b border-pink-300 pb-2">
      <h2 className="text-2xl font-bold text-pink-800 tracking-wide">
        Cantidad de productos por categoria, stock, evolución de precios
      </h2>
    </div>
    {children}
  </section>
);
}

export default TailwindEstadisticas;

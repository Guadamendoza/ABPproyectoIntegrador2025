import React from "react";
function FiltroCatyOrd({ categoria, setCategoria, ordenamiento, setOrdenamiento,categoriasValidas =[] }) { 

 
 return (
    <>
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="border border-pink-300 rounded px-3 py-2 mr-2"
      >
        <option value="">Todas las categorías</option>
        {categoriasValidas.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select
        value={ordenamiento}
        onChange={(e) => setOrdenamiento(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2"
      >
      <option value="">-- Ordenar por --</option>
      <option value="price-asc">Precio (menor a mayor)</option>
      <option value="price-desc">Precio (mayor a menor)</option>
      <option value="rating-asc">Rating (menor a mayor)</option>
      <option value="rating-desc">Rating (mayor a menor)</option>
    </select>


    </>

  
);
}

export default FiltroCatyOrd;


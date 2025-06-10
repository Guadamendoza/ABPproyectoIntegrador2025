import React from "react";
function SearchBar({ term, setTerm }) {
  // input para buscar el producto y onchange para que se actualice el estado de búsqueda cuando se hacen modificaciones en los caracteres
  return (
    <div>
      <input 
        type="text" 
        placeholder="Buscar producto" 
        value={term} 
        onChange={(e) => setTerm(e.target.value)} 
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    </div>
  );
}
 export default SearchBar;

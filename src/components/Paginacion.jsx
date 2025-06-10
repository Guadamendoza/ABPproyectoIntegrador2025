import React from 'react';

function Paginacion({page, setPage, products, limit}) {

  return (
    <>
      {/* el boton va a estar habilitado siempre menos cuando estoy en la pagina 1 */}
       <div className="flex items-center justify-center gap-4 mt-6">
    <button
                disabled={page === 1}
                onClick={() => {
                    setPage(page - 1);
                }}
                className="bg-violet-400 hover:bg-violet-500 text-white px-4 py-2 rounded transition-colors"
            >
                Página anterior
            </button>
            <button
                disabled={products.length < limit}
                onClick={() => {
                    setPage(page + 1);
                }}
                className="bg-violet-400 hover:bg-violet-500 text-white px-4 py-2 rounded transition-colors"
            >
                Página siguiente
            </button>
        </div>
    </>
  );
}

export default Paginacion;

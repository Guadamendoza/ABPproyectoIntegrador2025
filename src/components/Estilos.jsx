function Estilos({products }) {
  return (
    <section className="bg-pink-200 min-h-screen p-10">
      <div className="container mx-auto flex flex-wrap -m-4">
        {(products ?? []).map(product => (
          <div key={product.id} className="p-4 md:w-1/3">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-orange-400 font-bold">${product.price}</p>
              <p className="text-sm text-gray-600">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Estilos; 

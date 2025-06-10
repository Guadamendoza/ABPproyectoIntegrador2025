import React from 'react'
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

// importando componentes propios 
import ProductList from './components/Productlist.jsx';
import Stats from './components/Stats.jsx';
import SearchBar from './components/SearchBar.jsx';
import FiltroCatyOrd from './components/FiltroCatyOrd.jsx';
import Estadisticas from './components/Estadisticas.jsx';
import Paginacion from './components/Paginacion.jsx';
import Descargar from './components/Descargar.jsx';


function App() {
  //estados
  const [products, setProducts] = useState([]);
  const [term, setTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false); 
  const [categoria, setCategoria] = useState("");
  const [ordenamiento, setOrdenamiento] = useState(""); 
  const [page, setPage] = useState(1); // Estado para la paginación
  const [format, setFormat] = useState();
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje]= useState("");
  const [carga, setCarga]= useState(true);
  const [categoriasValidas, setCategoriasValidas]= useState([]);
  


  //referencias 
  const containerRef = useRef (null);
  const limit = 30;
  

  
const url = categoria === "" //si categoria esta vacia carga todos los productos paginados y si categoria tiene un valor carga solo los productos de esa categoria
    ? `https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`
    : `https://dummyjson.com/products/category/${encodeURIComponent(categoria)}?limit=${limit}&skip=${(page - 1) * limit}`;

  // llamada a la API y lo que quiero hacer con la respuesta o la acción que se realice después de tener los productos
  useEffect(() => { 
    axios.get(url) //
         .then(res => { setProducts(res.data.products) //Todos los datos van a ser alojados en el estado;
      const categoriasUnicas = [...new Set(res.data.products.map((p) => p.category))]; // Sacar las categorías únicas de los productos visibles
      setCategoriasValidas(categoriasUnicas); // Las usamos para el que el select solo muestre las categorias que hay en la pagina actual

          setMensaje("Los productos fueron cargados con éxito")
        setTipoMensaje("exito")
        setTimeout (() => setMensaje(null),5000); //Despues de 5 segundos va a desaparecer el mensaje 
        })
        .catch(() => { //si allgo sale mal con la promesa atrapa los errores
      setMensaje("Error al cargar productos");
      setTipoMensaje("error")
      setTimeout(() => setMensaje(null), 3000);
        })
     .finally(() => {
      setTimeout(() => setMensaje(null), 3000);
      setCarga(false); // Ocultar loader
    });
  


  }, [url]);

  
  // Filtrar los productos 
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(term.toLowerCase()) //filtro por nombre
    && (categoria === "" || product.category.toLowerCase().includes(categoria.toLowerCase())) // Filtro por categoría
  );

 // Ordenar los productos segun el precio 
if (ordenamiento === 'price-asc') {
  filteredProducts.sort((a, b) => a.price - b.price);
} else if (ordenamiento === 'price-desc') {
  filteredProducts.sort((a, b) => b.price - a.price);
} else if (ordenamiento === 'rating-asc') {
  filteredProducts.sort((a, b) => a.rating - b.rating);
} else if (ordenamiento === 'rating-desc') {
  filteredProducts.sort((a, b) => b.rating - a.rating);
}
 
// Función para cambiar el modo oscuro
const toggleDarkMode = () => {
  setDarkMode(!darkMode); // Cambia el estado de darkMode al valor contrario
  console.log(containerRef.current.classList.toggle("dark-mode"));
} 
  return (

    <div ref={containerRef} className ="app"> 
      <h1 className="bg-pink-700-text-2xl font-bold mb-4 text-center">Productos</h1>

      <button onClick={toggleDarkMode}
      className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors mb-4"
       >Modo{darkMode? " Claro":" Oscuro"}</button> 

       {/*Componente propio para descargar*/}
       <Descargar format={format} setFormat={setFormat} filteredProducts={filteredProducts} setMensaje ={setMensaje} setTipoMensaje={setTipoMensaje}/>
       
       {/*Componente propio para la busqueda*/}
       <SearchBar term= {term} setTerm = {setTerm}/>

        {/* Componente propio para filtrar por categoría */}
     <FiltroCatyOrd  categoria={categoria} setCategoria={setCategoria}  ordenamiento={ordenamiento} setOrdenamiento={setOrdenamiento} categoriasValidas={categoriasValidas}
/>       
        {/*Componente propio para paginacion*/}
       <Paginacion page={page} setPage={setPage} products={products} limit={limit} />

{carga ? (
  <div className="text-center text-lg text-sky-500 font-semibold mt-10 animate-pulse">Cargando productos...</div>
) : (
  <>
    {/* componente propio para mostrar los productos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

      {mensaje && (
        <div className={`p-3 rounded text-white mb-4 ${tipoMensaje === "exito" ? "bg-green-500" : "bg-red-500"}`}>
          {mensaje}
        </div>
      )}

      {/* componente propio para mostrar los productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <ProductList products={filteredProducts}/>
      </div>

      {/*componente propio para mostrar las estaditicas*/}
      <div className="bg-gray-100 dark:bg-pink-100 rounded-lg p-4 mt-6">
        <Estadisticas filteredProducts={filteredProducts} />
      </div>
    </div>
  </>
  )}
    </div>
  );
}

export default App;

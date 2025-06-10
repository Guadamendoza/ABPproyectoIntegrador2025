**REACT** 

**PROYECTO ABP**
Las prinpales funciones de este proyecto son: 
- Mostrar una lista de productos con sus categorias
- Filtrar los productos y sus categorias
- 
**App.jsx -** Componente Principal de la Aplicación
Este archivo define el componente principal de la aplicación React. Manejando la lógica de la aplicación, el estado global y la integración de los diferentes componentes más pequeños.
Funcionalidades Clave:
-Gestión de Estado: Maneja el estado global de la aplicación, incluyendo:
-La lista de productos (products).
-Término de búsqueda (term).
-Modo oscuro/claro (darkMode).
-Filtros (categoría, ordenamiento, paginación).
-Mensajes de usuario (carga, éxito, error).
-Interacción con API (dummyjson.com):
-Utiliza useEffect y axios para realizar llamadas a la API y obtener los productos.
-Actualiza los productos mostrados según la categoría y la página actual.
-Lógica de Filtrado y Ordenamiento:
-Filtra los productos por nombre y categoría.
-Ordena los productos por precio o calificación (ascendente/descendente).
-Modo Oscuro: Permite alternar entre un tema claro y oscuro para la interfaz de usuario.
-Renderizado de Componentes: Coordina y muestra los componentes hijos como:
-ProductList: Para listar los productos.
-SearchBar: Para la búsqueda de texto.
-FiltroCatyOrd: Para aplicar filtros y ordenamientos.
-Paginacion: Para navegar entre páginas.
-Estadisticas: Para mostrar datos analíticos.
-Descargar: Para exportar los datos.
-Gestiona la visualización de un loader mientras los productos cargan y muestra mensajes de estado al usuario.

**REACT** 

**PROYECTO ABP**
Las prinpales funciones de este proyecto son: 
- Visualización y Gestión de Productos
- Búsqueda de Productos
- Filtrado de Productos por Categoría
- Ordenamiento de Productos
- Paginación
- Análisis y Visualización de Estadísticas
- Exportación de Datos
- Gestión de Interfaz de Usuario
  
**App.jsx -** Componente Principal de la Aplicación
Este archivo define el componente principal de la aplicación React. Manejando la lógica de la aplicación, el estado global y la integración de los diferentes componentes más pequeños.
Funcionalidades Clave:
- Gestión de Estado: Maneja el estado global de la aplicación, incluyendo:
- La lista de productos (products).
-Término de búsqueda (term).
- Modo oscuro/claro (darkMode).
- Filtros (categoría, ordenamiento, paginación).
- Mensajes de usuario (carga, éxito, error).
- Interacción con API (dummyjson.com):
- Utiliza useEffect y axios para realizar llamadas a la API y obtener los productos.
- Actualiza los productos mostrados según la categoría y la página actual.
- Lógica de Filtrado y Ordenamiento:
-Filtra los productos por nombre y categoría.
- Ordena los productos por precio o calificación (ascendente/descendente).
- Modo Oscuro: Permite alternar entre un tema claro y oscuro para la interfaz de usuario.
- Renderizado de Componentes: Coordina y muestra los componentes hijos como:
- ProductList: Para listar los productos.
- SearchBar: Para la búsqueda de texto.
- FiltroCatyOrd: Para aplicar filtros y ordenamientos.
- Paginacion: Para navegar entre páginas.
-Estadisticas: Para mostrar datos analíticos.
-Descargar: Para exportar los datos.
-Gestiona la visualización de un loader mientras los productos cargan y muestra mensajes de estado al usuario.

**ProductList.jsx**- Componente de Lista de Productos
Este componente es responsable de mostrar la lista de productos en la interfaz de usuario.

Funcionalidades Clave:

Renderizado de Productos: - Recibe un array de products como propiedad (props) y los itera para renderizar un ProductItem individual para cada producto.
- Diseño Responsivo: Utiliza clases de Tailwind CSS (grid grid-cols-2 md:grid-cols-4) para adaptar la visualización de los productos a diferentes tamaños de pantalla.
- Mensaje Condicional: Muestra un mensaje "No se encontraron productos" si el array de products está vacío, informando al usuario cuando no hay resultados para su búsqueda o filtros.

**Estadisticas.jsx**- Componente de Cálculo y Presentación de Estadísticas
Este componente es el encargado de calcular diversas métricas y estadísticas sobre los productos filtrados, y de controlar la visibilidad de su presentación.

Funcionalidades Clave:

Cálculo de Métricas:
- Precio máximo y mínimo de los productos.
- Precio promedio general y por categoría.
- Cantidad de productos por categoría.
- Número de productos con stock superior a 50.
- Número de productos con calificación (rating) superior a 4.5.
- Producto más caro y más barato por cada categoría.
- Calificación (rating) promedio general y por categoría.
- Longitud de títulos de productos.
- Control de Visibilidad: Permite al usuario mostrar u ocultar las estadísticas mediante un botón.
- Gestión de Datos Vacíos: Muestra un mensaje si no hay productos disponibles para calcular estadísticas.

  **EstadisticasContenido.jsx** - Componente de Visualización de Estadísticas
Este componente se encarga exclusivamente de presentar y renderizar las diversas estadísticas de productos que le son pasadas como propiedades.

Funcionalidades Clave:

Recepción de Datos: - Recibe como propiedades (props) todas las métricas calculadas previamente en el componente Estadisticas (ej., precio máximo, mínimo, promedios, conteos por categoría, etc.).
- Visualización Detallada: Muestra estas estadísticas de forma clara y organizada utilizando texto, listas y encabezados.
- Integración de Gráficos: Incorpora y renderiza los componentes de gráficos (GraficoBarra, GraficoTorta, GraficoLinea) para una representación visual de los datos, así como el componente TailwindEstadisticas.

 **Descargar.jsx** - Componente de Exportación de Datos
Este componente proporciona la funcionalidad para que los usuarios puedan exportar los productos filtrados en diferentes formatos de archivo.

Funcionalidades Clave:

Selección de Formato: - Permite al usuario elegir el formato de descarga deseado (JSON, CSV, o Excel) a través de un menú desplegable.
- Manejo de Exportación (handleExport):
Genera el contenido del archivo en el formato seleccionado (JSON, CSV, o Excel) a partir de los filteredProducts.
Crea un objeto Blob con los datos y genera una URL temporal para la descarga.- Activación de Descarga (triggerDownload): Simula un clic en un enlace de descarga invisible para iniciar la - Descarga del archivo en el navegador del usuario.
- Notificaciones al Usuario: Muestra mensajes de éxito o error al usuario, informando si la exportación fue exitosa o si ocurrió algún problema.

**FiltroCatyOrd.jsx** - Componente de Filtrado y Ordenamiento
Este componente proporciona controles de interfaz de usuario para que el usuario pueda filtrar productos por categoría y ordenarlos según diferentes criterios.

Funcionalidades Clave:

- Filtrado por Categoría:
- Muestra un menú desplegable (<select>) con las categorías de productos disponibles (categoriasValidas).
- Permite al usuario seleccionar una categoría para ver solo los productos de esa categoría.
- Actualiza el estado categoria en el componente padre (App.jsx) cuando se selecciona una opción.
- Ordenamiento de Productos:
- Muestra otro menú desplegable (<select>) para elegir el criterio de ordenamiento.
- Ofrece opciones para ordenar por precio (ascendente/descendente) y por calificación (ascendente/descendente).
- Actualiza el estado ordenamiento en el componente padre (App.jsx) cuando se selecciona un criterio.

  **Paginacion.jsx**- Componente de Paginación
Este componente proporciona los controles de navegación para que el usuario pueda avanzar o retroceder entre las diferentes páginas de productos.

Funcionalidades Clave:

- Navegación entre Páginas:
- Muestra un botón para ir a la "Página anterior" y otro para ir a la "Página siguiente".
- Actualiza el estado page en el componente padre (App.jsx) cuando se hace clic en los botones, lo que a su vez dispara una nueva solicitud a la API para cargar los productos de la página correspondiente.
- Habilitación/Deshabilitación Inteligente:
- El botón "Página anterior" se deshabilita automáticamente cuando el usuario está en la primera página (page === 1).
- El botón "Página siguiente" se deshabilita cuando la cantidad de productos (products.length) es menor al limit establecido, indicando que no hay más productos para cargar en la siguiente página.

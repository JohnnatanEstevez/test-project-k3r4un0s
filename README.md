# prueba tecnica Keraunos

El objetivo de esta prueba es evaluar las diferentes habilidades y conocimientos de desarrollo específicamente en React.JS

Además de los puntos mencionados a continuación, se evaluarán diferentes aspectos inherentes a un buen desarrollo, tales como:

- Limpieza del codigo
- Facilidad de lectura
- Buenas prácticas (incluye los commit y manejo de versiones)
- Estructura de las carpetas adecuada

La entrega debe ser realizada en un repositorio de GitHub público.

En caso de no conocer una tecnología específica o un método para realizar una tarea, se valora proponer una solución con las herramientas o recursos que conozcas.

# Tarea 1: Configuración del Proyecto

Configura un nuevo proyecto de React utilizando una herramienta de construcción de tu elección (Create React App o similares).

# Tarea 2: Componente de Tarea

Crea un componente de Tarea reutilizable que muestre los detalles de una tarea. Los detalles de la tarea deben incluir un título, descripción, fecha de vencimiento, estado actual (mostrar el último) y una sección para notas sobre la tarea. Permite al usuario editar y eliminar una tarea.

# Tarea 3: Lista de Tareas

Crea un componente de Lista de Tareas que muestre una lista de tareas. Incluye las siguientes características:
-Utiliza el estado o props para gestionar la lista de tareas.
-Crea un archivo db.json para leer y escribir los datos simulados.
-Muestra las tareas en el componente de Tarea.
-Implementa paginación para la lista de tareas (mostrar 5 tareas por página).
-Permite al usuario marcar una tarea como completada.

# Tarea 4: Formulario de Tarea

Crea un componente de Formulario de Tarea que permita a los usuarios agregar nuevas tareas. El formulario debe incluir campos para el título de la tarea, descripción, fecha de vencimiento, estado actual y una sección para notas (cada nota tiene un campo por nota). Implementa validación de formulario para asegurar que todos los campos estén completos (solo es necesario validar un campo de la sección de notas).

# Tarea Extra:

Crea un componente de Formulario de Tarea para gestionar estados de tarea.

# Tarea 5: Enrutamiento

Implementa enrutamiento utilizando React Router. Crea rutas para mostrar la lista de tareas, detalles de la tarea y agregar una nueva tarea.

# Tarea 6: Acceso a Datos

Implementa gestión de estado en un contexto. Asegúrate de que el estado se gestione eficientemente y que los componentes se actualicen adecuadamente cuando llames a tus servicios para acceder a los datos simulados del archivo db.json.

# Tarea 7: Pruebas

Escribir pruebas unitarias para al menos un componente (por ejemplo, Lista de Tareas, Formulario de Tareas). Utiliza Jest o Enzyme.

# Tarea 8: Manejo de Errores en una consulta

Selecciona una API publica (puedes buscar en https://publicapis.dev/) y crea un componente que muestre información proveniente de esa API. También crea algunos casos donde resulten errores y manéjalos. Muestra mensajes de error significativos al usuario.

# Tarea 9: Optimización del Rendimiento

Implementa una estrategia de optimización del rendimiento (por ejemplo, carga perezosa, memorización) para mejorar el rendimiento de la aplicación.

# Tarea 10: Diseño Responsivo

Asegúrate de que la aplicación sea receptiva y funcione bien en diferentes tamaños de pantalla. Implementa consultas multimedia u otras técnicas de diseño responsivo.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

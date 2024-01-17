# Aplicación de Lista de Tareas

Esta es una aplicación de lista de tareas desarrollada utilizando MongoDB como base de datos, Node.js y Express para el backend, y React con Vite como empaquetador para el frontend. La aplicación también utiliza bcrypt para encriptar contraseñas, JSON Web Token (JWT) para la autenticación de usuarios, Mongoose para el manejo de la base de datos, Context API de React para el estado global, y dotenv para la gestión de variables de entorno.

## Instalación

### Backend

1. Clona este repositorio: `git clone https://github.com/tu-usuario/tu-repositorio.git`
2. Navega al directorio del backend: `cd backend`
3. Instala las dependencias: `npm install`
4. Crea un archivo `.env` basado en el ejemplo proporcionado en `.env.example` y configura tus variables de entorno.
5. Inicia el servidor: `npm start`

### Frontend

1. Navega al directorio del frontend: `cd frontend`
2. Instala las dependencias: `npm install`
3. Inicia la aplicación: `npm run dev`

## Configuración

Asegúrate de configurar adecuadamente las variables de entorno en el archivo `.env` para el backend. Aquí es donde se deben establecer cosas como la cadena de conexión de MongoDB, el puerto del servidor, etc.

## Funcionalidades

- Registro y autenticación de usuarios.
- Creación, edición y eliminación de tareas.
- Estado global gestionado con Context API de React.
- Contraseñas encriptadas con bcrypt.
- Autenticación de usuarios mediante JSON Web Token (JWT).
- Uso de Mongoose para interactuar con la base de datos MongoDB.

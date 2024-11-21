# 🚀 Socket-Handlebars

Un proyecto simple que utiliza **Express**, **Handlebars** y **Socket.IO** para mostrar y actualizar una lista de productos en tiempo real.

## 📋 Descripción

Este proyecto permite visualizar y gestionar productos mediante dos vistas:
1. **Home:** Una lista estática de productos.
2. **Real-Time Products:** Una lista dinámica que se actualiza automáticamente con WebSockets al agregar o eliminar productos.

---

## 📦 Dependencias necesarias

Asegúrate de instalar las siguientes dependencias para que el proyecto funcione correctamente:

- **[Express](https://expressjs.com/):** Framework para Node.js.
- **[Express-Handlebars](https://www.npmjs.com/package/express-handlebars):** Motor de plantillas para las vistas.
- **[Socket.IO](https://socket.io/):** Comunicación en tiempo real con WebSockets.
- **[Body-Parser](https://www.npmjs.com/package/body-parser):** Middleware para analizar el cuerpo de las solicitudes HTTP.
- **[Nodemon](https://nodemon.io/) (opcional):** Herramienta para desarrollo que reinicia el servidor automáticamente.

---

## 🛠️ Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local:

## 1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd socket-handlebars

---

##2. Instalar dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias:
**[bash](npm install)

---

##▶️ Ejecución

Modo producción:
**[bash](npm start)

Modo desarrollo (con reinicio automático):
**[bash](npm run dev)

---

##💻 Uso del proyecto
1- Visita la vista estática en http://localhost:3000.
2- Visita la vista dinámica en http://localhost:3000/realtimeproducts.
3- Usa el formulario en Real-Time Products para agregar o eliminar productos en tiempo real.

---

##🛡️ Licencia
Este proyecto está bajo la licencia MIT. ¡Siéntete libre de usarlo y modificarlo!
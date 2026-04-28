# Repositorio GitHub

https://github.com/maberbeira/react-alternancia

# React Alternancia

Aplicación web desarrollada con React como parte de un proyecto académico. La aplicación incluye navegación SPA, formulario con validación, galería interactiva, sistema de publicaciones dinámicas y modo oscuro.

---

## Tecnologías utilizadas

- React
- Vite
- JavaScript (ES6+)
- CSS (variables CSS)
- React Router

---

## Estructura del proyecto
src/
├── components/
│ ├── Navbar.jsx
│ ├── Gallery.jsx
│ ├── Blog.jsx
│ ├── PostCard.jsx
│ └── ThemeToggle.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── Services.jsx
│ └── Contact.jsx
│
├── assets/
│ └── images/
│
├── styles/
│ └── global.css
│
├── App.jsx
└── main.jsx


---

## Funcionalidades

### Navegación (React Router)

- Implementación de navegación SPA sin recarga de página.
- Rutas definidas:
  - `/` → Inicio
  - `/services` → Servicios
  - `/contact` → Contacto
- Indicación visual de la sección activa.

---

### Formulario con validación

- Campos:
  - Nombre
  - Email
  - Mensaje
- Validaciones:
  - Campos obligatorios
  - Formato de email válido
  - Longitud mínima del mensaje
- Gestión de eventos:
  - onChange
  - onBlur
  - onSubmit
- Visualización de errores en tiempo real.

---

### Galería interactiva

- Visualización de una imagen principal.
- Lista de miniaturas seleccionables.
- Cambio dinámico de imagen mediante `useState`.
- Resaltado de la imagen seleccionada.

---

### Blog dinámico

- Creación de publicaciones.
- Edición de publicaciones existentes.
- Eliminación de publicaciones.
- Posibilidad de destacar publicaciones.
- Renderizado dinámico mediante estado.

---

### Modo claro / oscuro

- Implementación de cambio de tema mediante variables CSS.
- Uso de `useEffect` para modificar clases globales.
- Cambio de apariencia sin recargar la página.

---

## Instalación en local

1. Clonar el repositorio:

git clone https://github.com/tuusuario/react-alternancia

2. Acceder al proyecto:

cd react-alternancia

3. Instalar dependencias:

npm install

4. Ejecutar la aplicación:

npm run dev

5. Generación de build de producción

npm run build

6. Se generará la carpeta:

dist/

# Despliegue

1. Vercel

Despliegue automático conectado al repositorio de GitHub.

URL: https://vercel.com/maberbeiras-projects/react-alternancia-ejercicios

2. InfinityFree

Despliegue manual mediante FTP:

Generar build con npm run build
Subir el contenido de la carpeta dist a htdocs

URL: https://reactalternancia.infinityfreeapp.com/?i=1
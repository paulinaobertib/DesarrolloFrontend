# Curriculum + Arte · React

Aplicación de curriculum vitae y galería de obras reimplementada en React + Vite.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Scripts disponibles

- `npm install` · instala dependencias.
- `npm run dev` · levanta el servidor de desarrollo (Vite) en `http://localhost:5173/`.
- `npm run build` · genera la build de producción en `dist/`.
- `npm run preview` · sirve la build generada para verificación local.

## Funcionalidades principales

- Página principal con datos personales y grilla de proyectos.
- Formulario de contacto con validaciones accesibles y reinicio tras envío simulado.
- Vista protegida con consumo paginado de la API del Art Institute of Chicago.
- Estado de autenticación global para habilitar / restringir secciones (solo a modo demo).

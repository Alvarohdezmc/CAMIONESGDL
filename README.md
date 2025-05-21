TruckDepot
Descripción
TruckDepot es un marketplace digital especializado en la venta de camiones y
refacciones para el sector de transporte pesado. La plataforma permite a los usuarios
explorar catálogos de camiones nuevos y refacciones, filtrar por diversas características,
ver detalles de productos y solicitar cotizaciones.
Características principales
Catálogo de camiones con filtros por fabricante, características y precio
Catálogo de refacciones con filtros por categoría, marca y compatibilidad
Páginas detalladas de productos con especificaciones completas
Sistema de cotizaciones online
Diseño responsive para acceso desde cualquier dispositivo
•
•
Capturas de pantalla
Página
de inicio con productos destacados
Catálogo de camiones con filtros
Tecnologías utilizadas
Frontend:
Next.js 14 - Framework de React con renderizado del lado del servidor
TypeScript - Superset tipado de JavaScript
Tailwind CSS - Framework CSS utilitario
Shadcn UI - Componentes de UI reutilizables
Backend/Servicios:
•
•
•
Firebase - Plataforma de desarrollo de aplicaciones
Firestore - Base de datos NoSQL
Authentication - Autenticación de usuarios
Storage - Almacenamiento de imágenes
Hosting - Alojamiento web
Requisitos previos
Node.js (v18.0.0 o superior)
npm (v9.0.0 o superior) o yarn (v1.22.0 o superior)
Cuenta de Firebase
Git
Instalación
Clonar el repositorio
git clone https://github.com/tu-usuario/truckdepot.git
cd truckdepot
Instalar dependencias
npm install
# o
yarn install
Configurar variables de entorno
Crea un archivo .env.local en la raíz del proyecto con las siguientes variables:
NEXT_PUBLIC_FIREBASE_API_KEY=tu_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=tu_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=tu_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=tu_app_id
•

Estructura del proyecto
truckdepot/
├── public/ # Archivos estáticos
├── src/
│ ├── ai/ # Funcionalidades de IA
│ ├── app/ # Páginas y rutas de la aplicación
│ │ ├── camiones/ # Páginas de catálogo y detalles de camiones
│ │ ├── refacciones/ # Páginas de catálogo y detalles de refacciones
│ │ ├── cotizaciones/ # Páginas de solicitud de cotizaciones
│ │ └── page.tsx # Página de inicio
│ ├── components/ # Componentes reutilizables
│ │ ├── layout/ # Componentes de layout (header, footer)
│ │ └── ui/ # Componentes de interfaz de usuario
│ ├── hooks/ # Custom hooks de React
│ ├── lib/ # Utilidades y configuraciones
│ └── services/ # Servicios para interactuar con APIs
├── .env.local # Variables de entorno locales
├── next.config.ts # Configuración de Next.js
├── package.json # Dependencias y scripts
├── postcss.config.mjs # Configuración de PostCSS
├── tailwind.config.ts # Configuración de Tailwind CSS
└── tsconfig.json # Configuración de TypeScript

•
•
• 

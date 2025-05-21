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
•
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

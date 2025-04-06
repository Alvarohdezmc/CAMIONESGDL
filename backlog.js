// Definición del objetivo del Sprint
const sprintGoal = "Desarrollar el catálogo de camiones con filtros y la solicitud de cotización en línea.";
console.log("Sprint Goal:", sprintGoal);

// Selección de historias de usuario del Product Backlog
const sprintBacklog = [
  {
    id: 'HU001',
    nombre: 'Catálogo de camiones',
    puntos: 8,
    estado: 'Pendiente'
  },
  {
    id: 'HU002',
    nombre: 'Solicitud de cotización',
    puntos: 5,
    estado: 'Pendiente'
  }
];
console.log("Sprint Backlog:", sprintBacklog);

// Estimación de tiempo para cada historia de usuario
const estimatedTime = sprintBacklog.reduce((total, historia) => total + historia.puntos, 0) * 8; // 8 horas por punto de historia
console.log("Estimated Time:", estimatedTime, "hours");

// Definición de tareas para cada historia de usuario
const tasks = [
  {
    historiaId: 'HU001',
    nombre: 'Desarrollar componente de catálogo',
    responsable: 'Desarrollador front-end',
    estado: 'Pendiente'
  },
  {
    historiaId: 'HU001',
    nombre: 'Diseñar interfaz de filtros',
    responsable: 'Diseñador UI/UX',
    estado: 'Pendiente'
  },
  {
    historiaId: 'HU002',
    nombre: 'Desarrollar componente de formulario',
    responsable: 'Desarrollador front-end',
    estado: 'Pendiente'
  },
  {
    historiaId: 'HU002',
    nombre: 'Implementar envío de correo electrónico',
    responsable: 'Desarrollador back-end',
    estado: 'Pendiente'
  }
   {
    historiaId: 'HU002',
    nombre: 'Implementar envío de correo electrónico',
    responsable: 'Desarrollador back-end',
    estado: 'Pendiente'
  }
  {
    historiaId: 'HU003',
    nombre: 'Implementar envío de correo electrónico',
    responsable: 'Desarrollador back-end',
    estado: 'Pendiente',
    fechaEntrega: '2025-02-25',
    prioridad: 'Alta'
  },
  {
    historiaId: 'HU004',
    nombre: 'Crear pruebas unitarias para el componente de catálogo',
    responsable: 'Desarrollador front-end',
    estado: 'Pendiente',
    fechaEntrega: '2025-02-28',
    prioridad: 'Alta'
  },
  {
    historiaId: 'HU005',
    nombre: 'Optimizar rendimiento del componente de formulario',
    responsable: 'Desarrollador front-end',
    estado: 'Pendiente',
    fechaEntrega: '2025-03-05',
    prioridad: 'Media'
  },
  {
    historiaId: 'HU006',
    nombre: 'Implementar validaciones del formulario en el back-end',
    responsable: 'Desarrollador back-end',
    estado: 'Pendiente',
    fechaEntrega: '2025-03-10',
    prioridad: 'Alta'
  },
  {
    historiaId: 'HU007',
    nombre: 'Realizar pruebas de integración con la base de datos',
    responsable: 'Desarrollador back-end',
    estado: 'Pendiente',
    fechaEntrega: '2025-03-15',
    prioridad: 'Alta'
  },
  {
    historiaId: 'HU008',
    nombre: 'Finalizar integración con base de datos',
    responsable: 'Desarrollador back-end',
    estado: 'Pendiente',
    fechaEntrega: '2025-03-01',
    prioridad: 'Alta'
  }

console.log("Tasks:", tasks);
{ 

    
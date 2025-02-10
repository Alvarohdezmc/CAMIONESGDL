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
];
console.log("Tasks:", tasks);
{ 
  histoiria ID:'HUOO3´

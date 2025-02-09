// Componente de catálogo de camiones
function Catalogo() {
    const [camiones, setCamiones] = useState();
  
    useEffect(() => {
      // Obtener la lista de camiones desde la API
      fetch('/api/camiones')
      .then(res => res.json())
      .then(data => setCamiones(data));
    },);
  
    return (
      <div>
        <h2>Catálogo de camiones</h2>
        <ul>
          {camiones.map(camion => (
            <li key={camion.id}>
              <h3>{camion.nombre}</h3>
              <img src={camion.foto} alt={camion.nombre} />
              <p>{camion.especificaciones}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
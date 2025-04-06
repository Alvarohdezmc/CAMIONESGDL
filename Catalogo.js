import React, { useState, useEffect } from 'react';
import camiones from '../data/camiones';
import './Catalogo.css';

function Catalogo() {
  const [camionesData, setCamionesData] = useState([]);
  const [filteredCamiones, setFilteredCamiones] = useState([]);
  const [filtros, setFiltros] = useState({
    tipo: '',
    precioMin: '',
    precioMax: ''
  });

  useEffect(() => {
    // En un proyecto real, esto sería una llamada a una API
    // Simulamos la carga de datos
    setTimeout(() => {
      setCamionesData(camiones);
      setFilteredCamiones(camiones);
    }, 500);
  }, []);

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros({
      ...filtros,
      [name]: value
    });
  };

  const aplicarFiltros = () => {
    let resultado = [...camionesData];
    
    // Filtrar por tipo
    if (filtros.tipo) {
      resultado = resultado.filter(camion => 
        camion.tipo.toLowerCase() === filtros.tipo.toLowerCase()
      );
    }
    
    // Filtrar por precio mínimo
    if (filtros.precioMin) {
      resultado = resultado.filter(camion => 
        camion.precio >= parseInt(filtros.precioMin)
      );
    }
    
    // Filtrar por precio máximo
    if (filtros.precioMax) {
      resultado = resultado.filter(camion => 
        camion.precio <= parseInt(filtros.precioMax)
      );
    }
    
    setFilteredCamiones(resultado);
  };

  const resetFiltros = () => {
    setFiltros({
      tipo: '',
      precioMin: '',
      precioMax: ''
    });
    setFilteredCamiones(camionesData);
  };

  // Obtener tipos únicos para el selector
  const tiposUnicos = [...new Set(camionesData.map(camion => camion.tipo))];

  return (
    <div className="catalogo-container">
      <h2>Catálogo de Camiones</h2>
      
      <div className="filtros-container">
        <h3>Filtros</h3>
        <div className="filtro-grupo">
          <label>Tipo de Camión:</label>
          <select 
            name="tipo" 
            value={filtros.tipo} 
            onChange={handleFiltroChange}
          >
            <option value="">Todos los tipos</option>
            {tiposUnicos.map(tipo => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>
        
        <div className="filtro-grupo">
          <label>Precio Mínimo:</label>
          <input 
            type="number" 
            name="precioMin" 
            value={filtros.precioMin} 
            onChange={handleFiltroChange} 
            placeholder="Precio mínimo"
          />
        </div>
        
        <div className="filtro-grupo">
          <label>Precio Máximo:</label>
          <input 
            type="number" 
            name="precioMax" 
            value={filtros.precioMax} 
            onChange={handleFiltroChange} 
            placeholder="Precio máximo"
          />
        </div>
        
        <div className="filtro-botones">
          <button onClick={aplicarFiltros} className="btn-aplicar">Aplicar Filtros</button>
          <button onClick={resetFiltros} className="btn-reset">Resetear</button>
        </div>
      </div>
      
      <div className="camiones-grid">
        {filteredCamiones.length > 0 ? (
          filteredCamiones.map(camion => (
            <div key={camion.id} className="camion-card">
              <img src={camion.foto} alt={camion.nombre} />
              <h3>{camion.nombre}</h3>
              <p className="especificaciones">{camion.especificaciones}</p>
              <p className="precio">Precio: ${camion.precio.toLocaleString()}</p>
              <p className="tipo">Tipo: {camion.tipo}</p>
              <button className="btn-cotizar">Solicitar Cotización</button>
            </div>
          ))
        ) : (
          <p className="no-resultados">No se encontraron camiones con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
}

export default Catalogo;

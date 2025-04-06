import React, { useState } from 'react';
import Catalogo from './components/Catalogo';
import FormularioCotizacion from './components/FormularioCotizacion';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('catalogo');

  return (
    <div className="App">
      <header className="App-header">
        <h1>CAMIONES GDL</h1>
        <nav className="main-nav">
          <button 
            className={activeTab === 'catalogo' ? 'active' : ''} 
            onClick={() => setActiveTab('catalogo')}
          >
            Catálogo de Camiones
          </button>
          <button 
            className={activeTab === 'cotizacion' ? 'active' : ''} 
            onClick={() => setActiveTab('cotizacion')}
          >
            Solicitar Cotización
          </button>
        </nav>
      </header>
      
      <main className="App-main">
        {activeTab === 'catalogo' ? (
          <Catalogo />
        ) : (
          <FormularioCotizacion />
        )}
      </main>
      
      <footer className="App-footer">
        <p>&copy; 2025 CAMIONES GDL - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;

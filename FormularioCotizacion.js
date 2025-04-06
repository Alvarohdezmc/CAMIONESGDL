import React, { useState } from 'react';
import './FormularioCotizacion.css';

function FormularioCotizacion() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    modeloCamion: '',
    mensaje: '',
    aceptaTerminos: false
  });
  
  const [errors, setErrors] = useState({});
  const [enviado, setEnviado] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  const validarFormulario = () => {
    const nuevosErrores = {};
    
    // Validar nombre
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio';
    }
    
    // Validar email
    if (!formData.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nuevosErrores.email = 'El email no es válido';
    }
    
    // Validar teléfono
    if (!formData.telefono.trim()) {
      nuevosErrores.telefono = 'El teléfono es obligatorio';
    } else if (!/^\d{10}$/.test(formData.telefono.replace(/\D/g, ''))) {
      nuevosErrores.telefono = 'El teléfono debe tener 10 dígitos';
    }
    
    // Validar modelo de camión
    if (!formData.modeloCamion) {
      nuevosErrores.modeloCamion = 'Debe seleccionar un modelo de camión';
    }
    
    // Validar términos y condiciones
    if (!formData.aceptaTerminos) {
      nuevosErrores.aceptaTerminos = 'Debe aceptar los términos y condiciones';
    }
    
    setErrors(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      // En un proyecto real, aquí enviaríamos los datos a un servidor
      console.log('Datos del formulario:', formData);
      
      // Simular envío exitoso
      setTimeout(() => {
        setEnviado(true);
        // Resetear formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          empresa: '',
          modeloCamion: '',
          mensaje: '',
          aceptaTerminos: false
        });
      }, 1000);
    }
  };
  
  const modelosCamiones = [
    'Camión de Carga Pesada XL-5000',
    'Camión de Reparto Urbano CR-200',
    'Tractocamión T-8000',
    'Camión Refrigerado RF-300',
    'Camión Cisterna CT-500',
    'Camión Volquete VQ-400'
  ];
  
  return (
    <div className="formulario-container">
      <h2>Solicitud de Cotización</h2>
      
      {enviado ? (
        <div className="mensaje-exito">
          <h3>¡Gracias por su solicitud!</h3>
          <p>Hemos recibido su solicitud de cotización. Un representante se pondrá en contacto con usted en las próximas 24 horas.</p>
          <button onClick={() => setEnviado(false)} className="btn-nueva-cotizacion">
            Solicitar otra cotización
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario-cotizacion">
          <div className="form-grupo">
            <label htmlFor="nombre">Nombre completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={errors.nombre ? 'input-error' : ''}
            />
            {errors.nombre && <span className="mensaje-error">{errors.nombre}</span>}
          </div>
          
          <div className="form-grupo">
            <label htmlFor="email">Correo electrónico *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="mensaje-error">{errors.email}</span>}
          </div>
          
          <div className="form-grupo">
            <label htmlFor="telefono">Teléfono *</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className={errors.telefono ? 'input-error' : ''}
            />
            {errors.telefono && <span className="mensaje-error">{errors.telefono}</span>}
          </div>
          
          <div className="form-grupo">
            <label htmlFor="empresa">Empresa</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-grupo">
            <label htmlFor="modeloCamion">Modelo de camión *</label>
            <select
              id="modeloCamion"
              name="modeloCamion"
              value={formData.modeloCamion}
              onChange={handleChange}
              className={errors.modeloCamion ? 'input-error' : ''}
            >
              <option value="">Seleccione un modelo</option>
              {modelosCamiones.map((modelo, index) => (
                <option key={index} value={modelo}>{modelo}</option>
              ))}
            </select>
            {errors.modeloCamion && <span className="mensaje-error">{errors.modeloCamion}</span>}
          </div>
          
          <div className="form-grupo">
            <label htmlFor="mensaje">Mensaje o comentarios adicionales</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          
          <div className="form-grupo checkbox-grupo">
            <input
              type="checkbox"
              id="aceptaTerminos"
              name="aceptaTerminos"
              checked={formData.aceptaTerminos}
              onChange={handleChange}
              className={errors.aceptaTerminos ? 'input-error' : ''}
            />
            <label htmlFor="aceptaTerminos">
              Acepto los términos y condiciones y la política de privacidad *
            </label>
            {errors.aceptaTerminos && <span className="mensaje-error">{errors.aceptaTerminos}</span>}
          </div>
          
          <button type="submit" className="btn-enviar">Enviar Solicitud</button>
          
          <p className="nota-campos">* Campos obligatorios</p>
        </form>
      )}
    </div>
  );
}

export default FormularioCotizacion;

import React, { useState } from 'react';
import { Save, CheckCircle } from 'lucide-react';
import './Forms.css';

const NewRecord = () => {
  const [recordType, setRecordType] = useState('vehiculo');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Nuevo Registro</h1>
        <p className="page-subtitle">Ingrese los datos para registrar un nuevo trámite</p>
      </div>

      <div className="glass-panel form-container">
        <div className="type-selector">
          <button 
            className={`type-btn ${recordType === 'vehiculo' ? 'active' : ''}`}
            onClick={() => setRecordType('vehiculo')}
          >
            Vehículo
          </button>
          <button 
            className={`type-btn ${recordType === 'menor' ? 'active' : ''}`}
            onClick={() => setRecordType('menor')}
          >
            Permiso Menor
          </button>
        </div>

        <form onSubmit={handleSubmit} className="record-form">
          {recordType === 'vehiculo' && (
            <>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="patente">Patente / Matrícula *</label>
                  <input type="text" id="patente" placeholder="Ej. AF 123 CD" required />
                </div>
                <div className="input-group">
                  <label htmlFor="origen">País de Origen *</label>
                  <select id="origen" required>
                    <option value="">Seleccione...</option>
                    <option value="ARG">Argentina</option>
                    <option value="CHI">Chile</option>
                    <option value="OTRO">Otro</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="conductor">Nombre del Conductor *</label>
                  <input type="text" id="conductor" required />
                </div>
                <div className="input-group">
                  <label htmlFor="doc_conductor">Documento Conductor *</label>
                  <input type="text" id="doc_conductor" required />
                </div>
              </div>
            </>
          )}

          {recordType === 'menor' && (
            <>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="nombre_menor">Nombre del Menor *</label>
                  <input type="text" id="nombre_menor" required />
                </div>
                <div className="input-group">
                  <label htmlFor="doc_menor">DNI / Pasaporte del Menor *</label>
                  <input type="text" id="doc_menor" required />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="acompanante">Nombre Acompañante/s *</label>
                  <input type="text" id="acompanante" required />
                </div>
                <div className="input-group">
                  <label htmlFor="permiso">N° Acta Permiso Notarial *</label>
                  <input type="text" id="permiso" required />
                </div>
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              <Save size={20} />
              Guardar Registro
            </button>
            {saved && (
              <div className="success-toast animate-fade-in">
                <CheckCircle size={20} />
                Guardado exitosamente
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewRecord;

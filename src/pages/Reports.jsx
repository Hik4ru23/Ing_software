import React, { useState } from 'react';
import { Download, FileBarChart, FileText, Table } from 'lucide-react';
import './Forms.css';

const Reports = () => {
  const [showExportModal, setShowExportModal] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setShowExportModal(true);
  };

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Reportes y Exportación</h1>
        <p className="page-subtitle">Genere estadísticas y descargue la información</p>
      </div>

      <div className="glass-panel form-container">
        <h3 style={{ marginBottom: '24px', color: 'var(--text-primary)' }}>Configuración del Reporte</h3>
        
        <form onSubmit={handleGenerate} className="record-form">
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="tipo_reporte">Tipo de Reporte</label>
              <select id="tipo_reporte" required>
                <option value="flujo">Flujo de Vehículos</option>
                <option value="menores">Permisos de Menores</option>
                <option value="rechazos">Trámites Rechazados</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="rango_fecha">Rango de Fechas</label>
              <select id="rango_fecha" required>
                <option value="hoy">Hoy</option>
                <option value="semana">Última Semana</option>
                <option value="mes">Mes Actual (Febrero)</option>
                <option value="personalizado">Personalizado...</option>
              </select>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">
              <FileBarChart size={20} />
              Generar y Exportar
            </button>
          </div>
        </form>
      </div>

      {showExportModal && (
        <div className="export-modal-overlay animate-fade-in" onClick={() => setShowExportModal(false)}>
          <div className="export-modal glass-panel" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Exportar Datos</h3>
              <p>Seleccione el formato de descarga para su reporte</p>
            </div>
            <div className="export-options">
              <button className="export-btn" onClick={() => setShowExportModal(false)}>
                <Table size={32} color="#10b981" />
                <span>Excel (.xlsx)</span>
              </button>
              <button className="export-btn" onClick={() => setShowExportModal(false)}>
                <FileText size={32} color="#3b82f6" />
                <span>CSV (.csv)</span>
              </button>
              <button className="export-btn" onClick={() => setShowExportModal(false)}>
                <Download size={32} color="#ef4444" />
                <span>PDF Document</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx="true">{`
        .export-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .export-modal {
          padding: 32px;
          width: 100%;
          max-width: 450px;
          text-align: center;
        }
        .modal-header h3 { font-size: 1.4rem; margin-bottom: 8px; }
        .modal-header p { color: var(--text-secondary); margin-bottom: 24px; font-size: 0.95rem; }
        .export-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .export-btn {
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: var(--text-primary);
          transition: all 0.2s;
        }
        .export-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-2px);
          border-color: var(--accent-blue);
        }
        .export-btn span { font-weight: 500; font-size: 0.9rem; }
      `}</style>
    </div>
  );
};

export default Reports;

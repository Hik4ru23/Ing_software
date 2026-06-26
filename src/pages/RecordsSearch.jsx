import React, { useState } from 'react';
import { Search as SearchIcon, Filter } from 'lucide-react';
import './Forms.css';

const RecordsSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockData = [
    { id: '#1024', type: 'Vehículo ARG', doc: 'AF 123 CD', date: '2026-06-19 14:30', status: 'Aprobado' },
    { id: '#1023', type: 'Permiso Menor', doc: '45.123.456', date: '2026-06-19 14:15', status: 'Aprobado' },
    { id: '#1022', type: 'Vehículo CHI', doc: 'AB-CD-12', date: '2026-06-19 14:00', status: 'En Revisión' },
    { id: '#1021', type: 'Vehículo ARG', doc: 'AC 456 BB', date: '2026-06-19 13:45', status: 'Rechazado' },
  ];

  const filteredData = mockData.filter(item => 
    item.doc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.includes(searchTerm)
  );

  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Búsqueda de Registros</h1>
        <p className="page-subtitle">Consulte el historial de trámites y cruces</p>
      </div>

      <div className="glass-panel p-24">
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <SearchIcon size={20} className="search-icon" />
            <input 
              type="text" 
              placeholder="Buscar por documento, patente o ID..." 
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn-secondary">
            <Filter size={20} /> Filtros
          </button>
        </div>

        <div className="table-container mt-4">
          <table>
            <thead>
              <tr>
                <th>ID Trámite</th>
                <th>Tipo</th>
                <th>Doc / Patente</th>
                <th>Fecha y Hora</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.id}</td>
                  <td>{row.type}</td>
                  <td><strong>{row.doc}</strong></td>
                  <td>{row.date}</td>
                  <td>
                    <span className={`status-badge ${
                      row.status === 'Aprobado' ? 'success' : 
                      row.status === 'En Revisión' ? 'warning' : 'danger'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td>
                    <a href="#" className="action-link">Ver Detalle</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="empty-state">No se encontraron registros que coincidan con la búsqueda.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordsSearch;

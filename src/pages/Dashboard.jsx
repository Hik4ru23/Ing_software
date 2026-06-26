import React from 'react';
import { Users, FileText, AlertCircle, TrendingUp } from 'lucide-react';
import './Dashboard.css';

const StatCard = ({ title, value, icon: Icon, colorClass }) => (
  <div className={`stat-card glass-panel ${colorClass}`}>
    <div className="stat-icon">
      <Icon size={24} />
    </div>
    <div className="stat-info">
      <h3>{title}</h3>
      <p className="stat-value">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="page-container animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Dashboard Principal</h1>
        <p className="page-subtitle">Resumen de actividad en el paso fronterizo</p>
      </div>

      <div className="stats-grid">
        <StatCard title="Trámites Hoy" value="245" icon={FileText} colorClass="blue" />
        <StatCard title="Vehículos" value="180" icon={TrendingUp} colorClass="emerald" />
        <StatCard title="Menores" value="65" icon={Users} colorClass="purple" />
        <StatCard title="Alertas Activas" value="3" icon={AlertCircle} colorClass="amber" />
      </div>

      <div className="dashboard-content">
        <div className="glass-panel dashboard-widget">
          <h3>Últimos Trámites Registrados</h3>
          <div className="table-container mt-4">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tipo</th>
                  <th>Documento / Patente</th>
                  <th>Hora</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1024</td>
                  <td>Vehículo ARG</td>
                  <td>AF 123 CD</td>
                  <td>14:30</td>
                  <td><span className="status-badge success">Aprobado</span></td>
                </tr>
                <tr>
                  <td>#1023</td>
                  <td>Permiso Menor</td>
                  <td>45.123.456</td>
                  <td>14:15</td>
                  <td><span className="status-badge success">Aprobado</span></td>
                </tr>
                <tr>
                  <td>#1022</td>
                  <td>Vehículo CHI</td>
                  <td>AB-CD-12</td>
                  <td>14:00</td>
                  <td><span className="status-badge warning">En Revisión</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

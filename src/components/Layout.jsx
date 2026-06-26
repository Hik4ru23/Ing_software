import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FilePlus, Search, FileBarChart, LogOut, UserCircle } from 'lucide-react';
import './Layout.css';

const Layout = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar glass-panel animate-fade-in">
        <div className="sidebar-brand">
          <div className="brand-logo">A</div>
          <h2>Aduanas UI</h2>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/records/new" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <FilePlus size={20} />
            <span>Nuevo Registro</span>
          </NavLink>
          <NavLink to="/records" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <Search size={20} />
            <span>Búsqueda</span>
          </NavLink>
          <NavLink to="/reports" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <FileBarChart size={20} />
            <span>Reportes</span>
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-wrapper">
        <header className="topbar glass-panel animate-fade-in">
          <div className="topbar-left">
            <h3>Sistema de Control Fronterizo</h3>
          </div>
          <div className="topbar-right">
            <div className="user-profile" onClick={() => setShowMenu(!showMenu)}>
              <UserCircle size={24} color="var(--text-secondary)" />
              <span className="username">Usuario Operador</span>
              {showMenu && (
                <div className="dropdown-menu glass-panel">
                  <button onClick={handleLogout} className="logout-btn">
                    <LogOut size={16} /> Cerrar Sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

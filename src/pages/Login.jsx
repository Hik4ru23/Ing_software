import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    navigate('/dashboard');
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <div className="brand-logo-large">A</div>
          <h2>Iniciar Sesión</h2>
          <p>Sistema de Aduanas Integrado</p>
        </div>
        
        <form onSubmit={handleLogin} className="auth-form">
          <div className="input-group">
            <label htmlFor="username">Usuario Operador / Supervisor</label>
            <input type="text" id="username" placeholder="Ingrese su usuario" required />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>
          
          <div className="auth-actions">
            <Link to="/forgot-password" className="forgot-link">¿Olvidó su contraseña?</Link>
          </div>
          
          <button type="submit" className="btn-primary auth-submit">
            <LogIn size={20} />
            Ingresar al Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

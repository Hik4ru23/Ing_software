import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Send, CheckCircle } from 'lucide-react';
import './Auth.css';

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card glass-panel">
        <div className="auth-header">
          <div className="brand-logo-large">A</div>
          <h2>Recuperar Contraseña</h2>
          <p>Le enviaremos un enlace de recuperación</p>
        </div>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="input-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" placeholder="usuario@aduanas.gob" required />
            </div>
            
            <button type="submit" className="btn-primary auth-submit">
              <Send size={20} />
              Enviar Enlace
            </button>
          </form>
        ) : (
          <div className="auth-form" style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle size={48} color="var(--accent-emerald)" style={{ margin: '0 auto 16px' }} />
            <h3 style={{ marginBottom: '8px' }}>¡Correo Enviado!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Revise su bandeja de entrada y siga las instrucciones para restablecer su contraseña.
            </p>
          </div>
        )}

        <Link to="/login" className="back-link">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;

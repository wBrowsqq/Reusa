import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext';
import '../assets/loginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    const card = document.getElementById('login-card');
    requestAnimationFrame(() => card.classList.add('fade-in'));
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setEmailError('');
    setPasswordError('');

    try {
      const response = await fetch('https://reusa.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        switch (data.field) {
          case 'email':
            setEmailError(data.message);
            break;
          case 'password':
            setPasswordError(data.message);
            break;
          default:
            setEmailError(data.message || 'Erro ao fazer login');
        }
        return;
      }

      localStorage.setItem('token', data.token);

      login({
        id: data.id,
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      });

      document.getElementById('login-card').classList.add('fade-out');
      setTimeout(() => {
        navigate('/');
      }, 500);
    } catch (err) {
      setEmailError('Erro ao conectar ao servidor');
    }
  };

  const navigateToSignup = () => {
    document.getElementById('login-card').classList.add('fade-out');
    setTimeout(() => {
      navigate('/signup');
    }, 500);
  };

  return (
    <div className="login-page-container">
      <div id="login-card" className="login-card">
        <h2 className="login-title">Bem-vindo de volta!</h2>
        <p className="login-subtitle">Entre com seu email e senha para continuar</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={emailError ? 'error' : ''}
              required
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={passwordError ? 'error' : ''}
              required
            />
            {passwordError && <p className="error-text">{passwordError}</p>}
          </div>
          <button type="submit" className="login-button">Entrar</button>
        </form>
        <div className="signup-link">
          <span>Não tem uma conta?</span>
          <button onClick={navigateToSignup}>Cadastre-se</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
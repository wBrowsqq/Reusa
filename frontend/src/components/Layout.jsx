import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      {/* --- Navbar --- */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#hero">
            <img src="/images/Logo.png" alt="Reusa Logo" width="60" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#about">Sobre</a></li>
              <li className="nav-item"><a className="nav-link" href="#courses">Cursos</a></li>
              <li className="nav-item">
                <a className="nav-link" href="#partners">Empresas Parceiras</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* --- Conteúdo da página --- */}
      <main>{children}</main>

      {/* --- Footer --- */}
      <footer className="py-3">
        <div className="container">
          <small>© 2025 Reusa. Todos os direitos reservados.</small>
        </div>
      </footer>
    </>
  );
}

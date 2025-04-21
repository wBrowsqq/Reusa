import React, { useState } from 'react';
     import { Outlet, Link, useLocation } from 'react-router-dom';
     import useOnScrollAnimation from './UseAnimateOnScroll';

     export default function Layout() {
       const location = useLocation();
       const [isLoggedIn, setIsLoggedIn] = useState(false);
       const [username, setUsername] = useState('Usuário');

       useOnScrollAnimation(); // Aplica a animação para todas as páginas

       const getNavLinkClass = (path) => {
         return location.pathname === path
           ? 'nav-link active disabled'
           : 'nav-link';
       };

       return (
         <>
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
               <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav mx-auto">
                   <li className="nav-item">
                     <Link to="/" className={getNavLinkClass('/')}>
                       Home
                     </Link>
                   </li>
                   <li className="nav-item">
                     <Link to="/Courses" className={getNavLinkClass('/Courses')}>
                       Cursos
                     </Link>
                   </li>
                   <li className="nav-item">
                     <Link to="/Prizes" className={getNavLinkClass('/Prizes')}>
                       Prêmios
                     </Link>
                   </li>
                 </ul>
                 <div className="ms-auto">
                   {isLoggedIn ? (
                     <span className="navbar-text text-white">{username}</span>
                   ) : (
                     <Link to="/login" className="btn btn-outline-light">
                       Cadastre-se
                     </Link>
                   )}
                 </div>
               </div>
             </div>
           </nav>

           <Outlet />

           <footer className="py-3">
             <div className="container">
               <small>© 2025 Reusa. Todos os direitos reservados.</small>
             </div>
           </footer>
         </>
       );
     }
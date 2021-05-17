import React from 'react';
import { Link } from 'react-router-dom';

// Importar estilos del Header
import '../styles/components/Header.css';

import '../styles/components/Styles.css';

const Header = () => (
  <div className="header">
    <h1 className="header-title">
      <Link to="/">Sonar 32</Link>
    </h1>
    <nav>
      <ul>
        <li> 
          <Link to="/users">Usuarios</Link>
        </li>
        <li>
          <Link to="/settings">Configuracion</Link>
        </li>
        <li>
          <Link to="/companies">Empresas</Link>
        </li>
        <li>
          <Link to="/login">Entrar</Link>
        </li>
        <li>
          <Link to="/politica-de-privacidad">Politica</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;

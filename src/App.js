import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Listado } from './components/Listado';

const listadoSelf = '/listado';

function App() {

  if (window.location.href.includes(listadoSelf)) return <Listado />

  return (
    <div data-testid="contenedor-app" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Proyecto de prueba para Github Actions</code><br />
          <code data-testid="legajo-alumnos">
            Legajo: 42988 - Tisera, Agustín<br />
            Legajo: XXXXX - Kler, Nicolás<br />
            Legajo: XXXXX - Leones, Marcos<br />
          </code>
        </p>
        <a
          data-testid="boton-listado"
          className="App-link"
          href={listadoSelf}
          target="_self"
          rel="noopener noreferrer"
        >
          {`Ver lista componentes >`}
        </a>
      </header>
    </div>
  );
}

export default App;

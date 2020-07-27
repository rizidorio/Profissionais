import React from 'react';

import './App.css';

import Routes from './routes';

import logo from './assets/logo1.png';

function App() {
  return (
    <div>
    <header id="cabecalho">
      <a href="/">
          <img src={logo} alt="Logo" id="logo"/>
      </a>
    </header>

    <Routes />
    </div>
  );
}

export default App;

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Routes from './router/index.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {renderRoutes(Routes)}
      </HashRouter>
    </div>
  );
}
export default App;

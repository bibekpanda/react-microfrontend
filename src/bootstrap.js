import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* Container styles will be always imported before App component */
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import App from './App';

ReactDOM.render(
  <div
    id="page-body"
    className="p-d-flex p-flex-column"
    style={{ position: 'relative', minHeight: '100vh' }}
    // style={{ height: 'calc(100vh)' }}
  >
    <Router>
      <App />
    </Router>
  </div>,
  document.querySelector('#root')
);

import React from 'react';
import { Router } from 'react-router-dom';
import history from './Routes/history';
import 'antd/dist/antd.css';

import Routes from './Routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;

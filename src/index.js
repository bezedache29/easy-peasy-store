import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import AppRouter from './router/AppRouter';
import GlobalStore from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider store={GlobalStore}>
    <React.StrictMode>
      <Router>
        <AppRouter />
      </Router>
    </React.StrictMode>
  </StoreProvider>
);
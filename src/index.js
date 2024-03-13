import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './Context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <App />
  </DataProvider>
);

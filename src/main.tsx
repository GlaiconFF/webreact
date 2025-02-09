import React from 'react';
import ReactDOM from 'react-dom/client';
// Em vez de importar App, importe AppRoutes:
import { AppRoutes } from './routes/AppRoutes';
import './styles/global.css'; // Certifique-se de importar seu CSS (Tailwind, etc.)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);

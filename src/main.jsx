import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from "../src/Router/Router"; 
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);


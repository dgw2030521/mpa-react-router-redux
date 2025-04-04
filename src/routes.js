import React from 'react';
import Home from './pages/Home';
import About from './pages/About';

const routeConfig = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> }
];

export default routeConfig;
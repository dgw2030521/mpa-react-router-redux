import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import routeConfig from './routes';
import Home from './pages/Home';

const router = createBrowserRouter(routeConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

      {/*<PersistGate loading={null} persistor={persistor}>*/}
      {/*  <Router>*/}
      {/*  <Routes>*/}
      {/*    <Route path="/" element={<Home />} />*/}
      {/*  </Routes>*/}
      {/*  </Router>*/}
      {/*</PersistGate>*/}


      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
  </Provider>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import routeConfig from './routes';
import About from './pages/About';


const root = ReactDOM.createRoot(document.getElementById('about'));
root.render(
  <Provider store={store}>
    <Router>
    <PersistGate loading={null} persistor={persistor}>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </PersistGate></Router>
  </Provider>,
  document.getElementById('root')
);
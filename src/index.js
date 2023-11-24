import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
        <Router>
          <Routes>
              <Route path="*" element={<HomePage />}/>
          </Routes>     
        </Router>
    </StoreProvider>
  </React.StrictMode>
);



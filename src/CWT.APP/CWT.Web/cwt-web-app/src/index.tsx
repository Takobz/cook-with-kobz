import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router, createBrowserRouter } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home';
import LoginModal from './components/landingpage/LoginModal';

const router  = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginModal />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

reportWebVitals();

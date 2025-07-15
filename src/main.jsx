import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

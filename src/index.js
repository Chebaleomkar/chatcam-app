import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from "react-dom/client" instead of "react-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from './SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();

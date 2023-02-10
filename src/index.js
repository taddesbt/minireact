import React from 'react';
import ReactDOM from 'react-dom/client';



import { createContext } from 'react';
const Context = createContext();


import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


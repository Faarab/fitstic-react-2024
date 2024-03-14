import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "./lezione1";
//in input createroot chiede un html element in questo caso un div con id root
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//renderizza il componente App. React.StrictMode serve per il componente perché 
//venga eseguito in modalità di debug
root.render(
  // <React.StrictMode>
     <App />
  // </React.StrictMode>
  
 
);


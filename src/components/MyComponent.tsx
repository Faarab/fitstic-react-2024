import React, { useContext } from 'react';
import ProvaContext from '../stores/ProvaContext';

//Dentro ProvaContext, usiamo useContext passando ProvaContext per accedere al valore del contesto.
const MyComponent: React.FC = () => {
  const context = useContext(ProvaContext);

  // Controlliamo se context è undefined, il che significherebbe che questo componente è usato fuori da un MyProvider. In tal caso, lanciamo un errore.
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  const { sharedState, setSharedState } = context;
//Renderizziamo l'interfaccia utente del componente, mostrando lo stato condiviso e fornendo un pulsante per aggiornarlo.
  return (
    <div>
      <p>Stato condiviso: {sharedState}</p>
      <button onClick={() => setSharedState("Nuovo valore")}>Cambia Stato</button>
    </div>
  );
};

export default MyComponent;
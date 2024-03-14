import React, { useState, ReactNode, FC } from 'react';
import ProvaContext from '../stores/ProvaContext';


//Definiamo un'interfaccia MyProviderProps che descrive le props accettate dal nostro Provider. 
//children è di tipo ReactNode, il che significa che può accettare qualsiasi elemento React come figlio.
interface MyProviderProps {
  children: ReactNode;
}
//Definiamo il componente MyProvider, che accetta le props conformi all'interfaccia MyProviderProps.
const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [sharedState, setSharedState] = useState<string>("Valore iniziale");

//Renderizziamo il componente PRovaContext.Provider, passando un oggetto che contiene il nostro stato condiviso
// e la funzione di aggiornamento come valore. children viene passato dentro al Provider, 
//permettendo a qualsiasi componente discendente di accedere al contesto.
  return (
    <ProvaContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </ProvaContext.Provider>
  );
};

export default MyProvider;


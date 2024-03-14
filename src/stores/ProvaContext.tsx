import React, { createContext } from 'react';
//Qui definiamo un'interfaccia MyContextType che descrive la forma del nostro contesto.
// Questo contesto avrà uno stato condiviso (sharedState) di tipo string 
//e una funzione (setSharedState) per aggiornare questo stato. 
//React.Dispatch<React.SetStateAction<string>> è il tipo che React usa per descrivere una funzione di aggiornamento dello stato restituita dall'hook useState.
//
interface MyContextType {
  sharedState: string;
  setSharedState: React.Dispatch<React.SetStateAction<string>>;
}

//Creiamo il contesto usando React.createContext. Il tipo del contesto può essere MyContextType o undefined. Inizialmente, impostiamo il valore predefinito su undefined perché il vero valore sarà fornito dal nostro Provider.
const ProvaContext = createContext<MyContextType | undefined>(undefined);

export default ProvaContext;
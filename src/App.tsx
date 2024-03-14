import styles from './App.module.scss';
import Contatore from './components/Contatore';
// import logo from "./assets/logo512.png";

import Display from './components/Display';
import MyProvider from './components/MyProvider';
import MyComponent from './components/MyComponent';
import TextComponent from './components/TextComponent';
import CounterAsObj from './components/CounterAsObj';
import InputComponent from './components/InputComponent';
import { useEffect, useState } from 'react';
import PersonInput from './components/PersonInput';
import ComponenteMezzo from './components/ComponenteMezzo';
import { PersonInfo } from './Interfacce';



//tsx è un superset di jsx, un superset è un linguaggio che estende il linguaggio base
//quindi tsx serve per renderizzare i componenti attraverso l'uso di variabili e funzioni
export default function App() {
  const [state, setState] = useState({ name: "" , surname: ""});
  const [value, setInitialValue] = useState(0);

  const handleClick = (person: PersonInfo) => {
    console.log(person);
    setState(person);
  };
  return (
    <>
      <div className={styles.title}>
        {/* <PersonInput onClick={handleClick} /> */}
        <ComponenteMezzo  onClick={handleClick} />

        <div>name: {state.name}, surname: {state.surname}</div>
        
        <Contatore key={value}/>
        <button onClick={() => setInitialValue(15)}>imposta a 15</button>
        
      </div>

      <MyProvider>
        <div>
          <MyComponent />
        </div>
      </MyProvider>

    </>
  );
}



// export function MyComponent() {
//   let num: number = 5;
//   let str: string = "ciao";
//   let bool: boolean = true;

//   return (
//     <>
//       <h1>{num}</h1>
//       <h2>{str}</h2>
//       {/* per visualizzare il booleano devo convertirlo in stringa */}
//       <h3>{bool === true && "ciao"}</h3>
//       <h4>{null}</h4>
      
//     </>
//   );
// }


export function CyclingRenderingComponent() {
  let array = [1,2,null,4,'ciao'];

  return(
  <div >
    {array.map((e, index)=> 
        
    <div key={index}>valore {index+1} : {e}</div>
)}
  </div>
  )
  
}




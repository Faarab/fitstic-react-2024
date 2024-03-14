import styles from './App.module.scss';
import Contatore from './components/Contatore';
// import logo from "./assets/logo512.png";

import Display from './components/Display';
import MyProvider from './components/MyProvider';
import MyComponent from './components/MyComponent';
import TextComponent from './components/TextComponent';
import CounterAsObj from './components/CounterAsObj';
import InputComponent from './components/InputComponent';
import { useEffect, useMemo, useState } from 'react';
import PersonInput from './components/PersonInput';
import ComponenteMezzo from './components/ComponenteMezzo';
import { PersonInfo } from './Interfacce';
import ComponentInterval from './components/ComponentInterval';
import TodoList from './components/TodoList';



//tsx è un superset di jsx, un superset è un linguaggio che estende il linguaggio base
//quindi tsx serve per renderizzare i componenti attraverso l'uso di variabili e funzioni
export default function App() {
  // const [state, setState] = useState({ name: "" , surname: ""});
  const [value, setInitialValue] = useState(10);

  function calcolo(n:number){
    return n*2;
  }
  const risultato = useMemo(() => {
   
    return calcolo(value);
  }, [value]);



  // const handleClick = (person: PersonInfo) => {
  //   console.log(person);
  //   setState(person);
  // };
  return (
    <>


    <TodoList />
      {/* <div className={styles.title}> */}
        {/* <PersonInput onClick={handleClick} /> */}
        {/* <ComponenteMezzo  onClick={handleClick} /> */}

        {/* <div>name: {state.name}, surname: {state.surname}</div> */}
        
        {/* <Contatore initialValue={value}/> */}
        
       
        {/* <button onClick={() => setInitialValue(20)}>imposta a 15</button> */}
        {/* { value !== 20 && <ComponentInterval/>} */}
        {/* <div>{risultato}</div>
      </div> */}

      {/* <MyProvider>
        <div>
          <MyComponent />
        </div>
      </MyProvider> */}

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



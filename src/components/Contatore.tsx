import { useEffect, useState } from "react";
import Display from "./Display";
import styles from "./Display.module.scss";

export default function Contatore(prop: {
    readonly initialValue?: number}) {

    const { initialValue = 0 } = prop;
    let [count, Setcount] = useState(initialValue);

    let handleButtonClick = () => {
        //senza arrow function setta l'ultimo valore passato (va in sovrascrittura)
        //con arrow function setta il valore della variabile count
      Setcount((count) => count + 1);
    };

    useEffect(() => {
      console.log("useeffect", initialValue);
        Setcount(initialValue);
        
    }, [initialValue]);

    let handleButtonClickMinus = () => {
      Setcount((count) => count - 1);
    };

    return (
    <>
        <div>
            <Display n={count} mycolor={"black"} />

            <div className={styles.box}>
        <button className={styles.button} onClick={handleButtonClick}>
          +
        </button>
        <button className={styles.button} onClick={handleButtonClickMinus}>
          -
        </button>
        
      </div>
      
        </div>

        <div>{(count>5) && "sono più di 5"}</div>
        </>
    )



}
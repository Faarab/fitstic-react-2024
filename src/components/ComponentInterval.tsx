//setInterval
//componente che quando si monta fa partire un interval che mostra un intero invrementato 
import { useEffect, useState } from "react";

export default function ComponentInterval(){
    const [value, setInitialValue] = useState(0);
    
    
    


    // setInterval(() => {
    //     setInitialValue(value => value + 1);
    // }, 1000);

    useEffect(() => {
        console.log("useEffect", value);
        const interval = setInterval(() => {
            setInitialValue(value=>value+1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("ciao")
        };
    }, []);

    // setInterval(() => {
    //     setInitialValue(value + 1);
    // }, 1000);

    return(
        <div>
            <h1>Interval value: {value}</h1>
        </div>
    )
}
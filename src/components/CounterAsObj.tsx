import { useState } from "react";

interface StateCounter {
   readonly counter: number;
}


export default function CounterAsObj() {

    
    const [state, setState] = useState<StateCounter>({
        counter: 0
    });

    const handleButtonClick = () => {
//quando si lavora per riferimento quello che deve cambiare è il riferimento e non un aproprietà interna 
//di quel riferimento. se si deve fare una modifica a quell'oggetto dovrebbe essere creato un nuovo oggetto
//state.value = state.value + 1;
//const newState2 = state;
//funzione in line sa che in input c'è un oggetto di tipo state

        const newState : StateCounter= {
            //Viene creato un nuovo oggetto newState che rappresenterà il nuovo stato dopo l'aggiornamento, 
            //utilizzando l'operatore spread ... per copiare tutte le proprietà correnti di state
            ...state,
            counter: state.counter + 1
        };
        setState(newState);
    };

    const handleButtonClickMinus = () => {
        setState({
            counter: state.counter - 1
        });
    };

    return (
        <div>
            <div>{state.counter}</div>
            <button onClick={handleButtonClick}>+</button>
            <button onClick={handleButtonClickMinus}>-</button>
        </div>
    )
}

//nuovo oggetto in altra parte di memoria
//const newState = {value: state.value + 1};

//state.value = state.value +1;
//non crea un altro oggetto ma un nuovo puntatore allo stesso oggetto
//const newState2 = state;


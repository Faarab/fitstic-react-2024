import { useState } from "react";

import { PersonInfo } from "../Interfacce";

export default function PersonInput(props: {
    //modo per definire il tipo di una funzione + tipo di ritorno
    readonly onClick:(value:PersonInfo)=>void
}){

    const {onClick} = props;

    // const [state, setState] = useState<PersonInfo>({name:"",surname:""});
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleClick = () => {
        // setState({name:name,surname:surname});
        onClick({name:name,surname:surname});
    }
    return(
        <>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                {/* <input type="text" value={name} onChange={ e => setState({...state, name: e.target.value})} /> */}
                <label htmlFor="surname">Surname</label>
                <input type="text" value={surname} onChange={(event) => setSurname(event.target.value)} />
                {/* <input type="text" value={surname} onChange={ e => setState({...state, surname: e.target.value})} /> */}
                <button onClick={handleClick}>Salva</button>
                
            </div>
        
        </>
    )
}
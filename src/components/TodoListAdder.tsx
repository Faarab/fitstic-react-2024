import { useState } from "react";

export default function TodoListAdder(prop: {
    readonly addItem: (item: string) => void
}){

    const {addItem} = prop;

    const [value, setValue] = useState<string>("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleClick = () => {
        addItem(value);
        setValue("");
    }

    return(
        <div>
            <input type="text" onChange={handleChange} value={value} />
            <button onClick={handleClick}>Aggiungi</button>
        </div>
    )
}
import { useState } from "react";

export default function InputComponent(props:
    {
        readonly label:string,
        readonly required:boolean,
        //non ha senso che ritorni nulla perché il contenuto informativo è nel parametro
        readonly onChange:(value:string)=>void
        } )
        {
            const {required, label, onChange} = props;
            const [value, setValue] = useState<string>("");

            const handleChange = (event: any) => {
                setValue(event.target.value);
                onChange(event.target.value);
            }
    
  return (
    <> 
        <label>{label}{required === true && <span>*</span>}</label>
        <input type="text" value={value} onChange={handleChange} />
        {value.length === 0 && required === true && <div>Campo obbligatorio</div>}
  
    </>
  );
  }
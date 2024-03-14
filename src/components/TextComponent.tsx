import { useState } from "react";
//fare un textcomponent che sia un imput di testo si può dire che il testo è obbligatorio e compare asterisco se non valorizzato
export default function TextComponent() {
    //<string> -> generic type
    const [inputValue, setInputValue] = useState<string>("");
    const [passwordValue, setPasswordValue] = useState<string>("");

    const handleInputChange = (event:any) => {
        setInputValue(event.target.value);
    }
    const handlePasswordChange = (event:any) => {
        setPasswordValue(event.target.value);
    }
    const handleReset = () => {
        setInputValue("");
        setPasswordValue("");       
    }
  return (
    <>
        <form>
        <label htmlFor="input">Input</label>
        <input type="text"  onChange={handleInputChange} value={inputValue} />
        <div>{inputValue}</div>

        <label htmlFor="password">Password</label>
        <input type="password" onChange={handlePasswordChange} value={passwordValue} />
        <div>{passwordValue}</div>

        <button onClick={handleReset}>Reset</button>
        </form>
       
    </>
  );
}   
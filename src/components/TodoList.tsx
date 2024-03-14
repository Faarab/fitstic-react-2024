import { useState } from "react";

import TodoListAdder from "./TodoListAdder";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const [list, setList] = useState<string[]>(["prova1", "prova2"]);

  const handleDelete = (index: number) => {
      let newList = [...list];
      newList.splice(index, 1);
      setList(newList);
  }
   
  return (
    <>
    <h1>TODO LIST</h1>
    <TodoListAdder addItem={(item) => setList((list) => [...list, item])} />
    <button onClick={() => setList([])}>Cancella tutto</button>
    <div>
      {list.map((item, index) => (
        <TodoListItem item={item} onDelete={handleDelete} index={index} />     
      ))}
    </div>
      
    </>
  );
}


//es Todo list 
//Compo genitore -> t0d0List
//Compo figlio -> todolistitem che renderizza in modo ciclico il componente. + bottone per eliminare il singolo componenente
//compo figlio ListItemAdder -> aggiungere elemento alla lista 
import React, {Fragment,useState} from "react";
import { TodoList } from "./components/TodoList"; 

export function App(){
    const [todo,setTodos] = useState([ {
        id: 1, task: "hacer entrega", complete: false
    }])
    return(
        <Fragment>
            <TodoList todo={todo}/>
            <input type="text" placeholder="Ingrese una tarea"/>
            <button>Add</button>
            <button>Rest</button>
         </Fragment>
    )
   
     
}
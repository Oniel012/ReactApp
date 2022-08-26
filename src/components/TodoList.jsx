
import React from 'react'
import { TodoItem } from './TodoItems'

export  function TodoList({todo}) {
  return (
    <ul>
     {
       todo.map((todo)=>(
       <TodoItem todo={todo}/>
       ))
     }   
    </ul>
  )
}

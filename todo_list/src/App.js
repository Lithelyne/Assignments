import React, { useState } from "react";
import './App.css';

import Todo from "./components/Todo";

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([])

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length === 0){
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false
    }
    setTodos([...todos, todoItem]);
    setNewTodo("");
  }

  const handleToDoDelete = (delIdx) =>{
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  }
  const handleToggleComplete = (idx) =>{
    const updatedTodos = todos.map((todo, i) =>{
      if (idx === i){
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div style={{textAlign: "center"}}>
      <form onSubmit={(e)=>{handleNewTodoSubmit(e)}}>
        <input onChange = {(e)=>{setNewTodo(e.target.value);}} text="text" value={newTodo}/>
        <div>
          <button>Add</button>
        </div>
      </form>

      {todos.map((todo, i)=> {          
          return (
          <Todo 
            key={i} 
            todo={todo} 
            handleToggleComplete={handleToggleComplete} 
            i={i}
            handleToDoDelete={handleToDoDelete}
          />
          );
      })}
    </div>
  );
}

export default App;

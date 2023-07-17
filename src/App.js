import './App.css';

import React from 'react';
import { useState } from 'react';

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ]
    })
    setNewItem("")
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type='text' />
          <button>Add</button>
        </form>
        <h1>Todo List</h1>
        <ul>
          {todos.map(todo => {
            return <li>
              <label>
                <input type='checkbox' checked={todo.completed} 
                onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
                <button onClick={() => deleteTodo(todo.id)} >Delete</button>
              </label>
            </li>
          })}
        </ul>
      </div>
    </>
  );
}

export default App;


import React from 'react'

export default function Todo({ todo, toggleTodo, className }) {
  function handleTodoCLick() {
    toggleTodo(todo.id)
  }
  return (
    <div className={className}>
        <label>
            <input type='checkbox' checked={todo.complete} onChange={handleTodoCLick}/>
            {todo.name}
        </label>
    </div>
  )
}

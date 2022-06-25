import React from 'react'

export default function Todo({ todo, toggleTodo, className }) {
  const handleTodoCLick = () => {
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

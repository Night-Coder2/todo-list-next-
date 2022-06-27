import React from 'react'

export default function Todo({ todo, toggleTodo, className }) {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }
  return (
    <div className={className}>
        <label>
            <input type='checkbox' checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
        </label>
    </div>
  )
}

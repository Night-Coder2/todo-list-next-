import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from '../../react-scripts/TodoList/TodoList'

const localStorageKey = 'todos'

var executed = false

function App() {
  const [ todos, setTodos ] = useState([])
  const todoNameRef = useRef()
  
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if(storedTodos) {
      if(!executed){
        setTodos(storedTodos)
        executed = true
      }
    }
    
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
 
  function handleAddTodo(e){
    e.preventDefault()
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos(e){
    e.preventDefault()
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (<>
      <div className="bg-gray-900 text-gray-100 mx-auto text-center w-full h-full">
        <h3 className="font-medium">Your TodoList</h3>
        <br/>
        <form>
        <input className="bg-gray-100 text-gray-900" ref={todoNameRef} type='text' />
        <button className="bg-red-500 border-todo-4 border-gray-900" type='submit' onClick={handleAddTodo}>Add Todo</button>
        <button className="bg-blue-400 border-todo-4 border-gray-900" onClick={handleClearTodos}>Clear Complete</button>
        </form>
        <div >{todos.filter(todo => !todo.complete).length} left to do</div>
        <br/>
        <div>
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
          <div className="text-cyan-500 underline"><a href='/'>return to home</a></div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useEffect, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from '../../styles/Todolist.module.css'
import TodoList from '../../react-scripts/TodoList/TodoList'

const localStorageKey = 'todos'

var executed = false

const App = () => {
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

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
 
  const handleAddTodo = (e) => {
    e.preventDefault()
    const name = todoNameRef.current.value
    if (name === '') return 
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  const handleClearTodos = (e) => {
    e.preventDefault()
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (<>
      <div className={styles.div1}>
        <h2>Your TodoList</h2>
        <br/>
        <form>
        <input className={styles.input} ref={todoNameRef} type='text' />
        <button className={styles.addTodo} type='submit' onClick={handleAddTodo}>Add Todo</button>
        <button className={styles.clearComplete} onClick={handleClearTodos}>Clear Complete</button>
        </form>
        <div >{todos.filter(todo => !todo.complete).length} left to do</div>
        <br/>
        <div>
          <TodoList todos={todos} toggleTodo={toggleTodo}/>
          <div className={styles.aTag}><a href='/'>return to home</a></div>
        </div>
      </div>
    </>
  );
}

export default App;

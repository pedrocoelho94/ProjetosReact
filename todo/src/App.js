import { useEffect, useState } from 'react'
import './App.scss'
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
   const [inputText, setInputText] = useState('')
   const [todos, setTodos] = useState([])
   const [status, setStatus] = useState('all')
   const [filteredTodos, setFilteredTodos] = useState([])

   useEffect(() => {
      let items = window.localStorage.getItem('todoItem')
      if (items) {
         items = JSON.parse(items)
         setTodos(items)
      }
   }, [])

   useEffect(() => {
      console.log('APP', todos)
      window.localStorage.setItem('todoItem', JSON.stringify(todos))
   }, [todos])

   useEffect(() => {
      switch (status) {
         case 'completed':
            setFilteredTodos(todos.filter(todo => todo.completed === true))
            break

         case 'uncompleted':
            setFilteredTodos(todos.filter(todo => todo.completed === false))
            break

         default:
            setFilteredTodos(todos)
            break
      }
   }, [todos, status])

   return (
      <div className="app">
         <header>
            <h1>Todo List</h1>
         </header>

         <main>
            <Form
               inputText={inputText}
               setInputText={setInputText}
               todos={todos}
               setTodos={setTodos}
               setStatus={setStatus}
               
            />
            <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
         </main>
      </div>
   )
}

export default App

import { useState } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])

  const createTodo = (todo) => {
    const createdTodos = [...todos,
    {
      id: todos.length,
      todo
    }]
    setTodos(createdTodos)
  }

  const deleteTodoById = (id) => {
    const afterProcessTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(afterProcessTodos)
  }

  return (
    <div className="container-fluid">
      <TodoCreate onCreate={createTodo}/>
      <TodoList todos={todos} onDelete={deleteTodoById}/>
    </div>
  )
}

export default App

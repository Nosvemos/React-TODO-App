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

  const editTodoById = (id, newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id){
        return {
          id,
          todo:newTodo
        }
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="container-fluid">
      <TodoCreate onCreate={createTodo}/>
      <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById}/>
    </div>
  )
}

export default App

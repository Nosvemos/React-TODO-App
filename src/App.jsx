import { useState, useEffect } from 'react'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])
  const link = 'http://localhost:3000/todos/'

  const fetchData = async () => {
    const response = await axios.get(link)
    setTodos(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const createTodo = async (todo) => {
    const response = await axios.post(link, {
      todo,
      isCompleted: false
    })
    const createdTodos = [...todos, response.data]
    setTodos(createdTodos)
  }

  const deleteTodoById = async (id) => {
    await axios.delete(`${link}${id}`)
    fetchData()
  }

  const editTodoById = async (id, newTodo) => {
    await axios.patch(`${link}${id}`, {
      id,
      todo: newTodo
    })
    fetchData()
  }

  const completeTodoById = async (id) => {
    await axios.patch(`${link}${id}`, {
      isCompleted: true
    })
    fetchData()
  }

  return (
    <div className="container-fluid flex flex-col h-screen justify-between">
      <main className="mb-auto h-10">
        <TodoCreate onCreate={createTodo} />
        <TodoList todos={todos} onDelete={deleteTodoById} onEdit={editTodoById} onComplete={completeTodoById} />
      </main>
      <footer className="rounded-lg shadowm-4 text-center bottom-0">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-400">Designed by Nosvemos - All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  )
}

export default App

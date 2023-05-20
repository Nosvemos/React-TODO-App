import TodoShow from './TodoShow'

function TodoList({todos, onDelete}) {
  return (
    <div className="columns is-multiline">
    {todos.map((todo,index) => {
      return (
        <TodoShow key={index} todo={todo} onDelete={onDelete} />
      )
    })}
  </div>
  )
}

export default TodoList
import TodoShow from './TodoShow'

function TodoList({todos, onDelete, onEdit}) {
  return (
    <div className="columns is-multiline">
    {todos.map((todo,index) => {
      return (
        <TodoShow key={index} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
      )
    })}
  </div>
  )
}

export default TodoList
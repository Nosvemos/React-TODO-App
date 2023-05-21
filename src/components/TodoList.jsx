import TodoShow from './TodoShow'

function TodoList({todos, onDelete, onEdit, onComplete}) {
  return (
    <div className="columns is-multiline">
    {todos.map((todo,index) => {
      return (
        <TodoShow key={index} todo={todo} onDelete={onDelete} onEdit={onEdit} onComplete={onComplete}/>
      )
    })}
  </div>
  )
}

export default TodoList
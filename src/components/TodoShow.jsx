import { useState } from "react"

function TodoShow({todo, onDelete}) {
    const [completed, setCompleted] = useState(false)

    const handleDeleteClick = () => {
        onDelete(todo.id)
    }

    const handleCompleteClick = () => {
        setCompleted(!completed)
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-2 col-end-12 md:col-start-3 md:col-end-11 xl:col-start-4 xl:col-end-10">
                <div className="Todo-Show py-5 px-3">
                {completed ? (<p className="float-left text-lg md:text-xl lg:text-xl font-medium text-gray-400 line-through">{todo.todo}</p>) : (<p className="float-left text-lg md:text-xl lg:text-xl font-medium text-gray-300">{todo.todo}</p>)}
                    <button onClick={handleDeleteClick} className="float-right px-2 text-sm font-medium">
                        <svg fill="#ffffff" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z"></path></g></svg>
                        <span className="sr-only">Delete</span>
                    </button>
                    {completed ? (<></>) : (                    <button onClick={handleCompleteClick} className="float-right px-2 text-sm font-medium">
                        <svg fill="#ffffff" className="w-5 h-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 335.765 335.765" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 "></polygon> </g> </g> </g></svg>
                        <span className="sr-only">Okay</span>
                    </button>)}
                </div>
            </div>
        </div>
    )
}

export default TodoShow
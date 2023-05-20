import { useState } from "react"

function TodoShow({ todo, onDelete, onEdit }) {
    const [completed, setCompleted] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [newTodo, setTodo] = useState(todo.todo)

    const handleDeleteClick = () => {
        onDelete(todo.id)
    }

    const handleEditClick = () => {
        setEditMode(!editMode)
    }

    const handleEditTodoChange = (event) => {
        setTodo(event.target.value)
    }

    const handleEditSubmit = (event) => {
        event.preventDefault()
        onEdit(todo.id,newTodo)
        setEditMode(false)
    }

    const handleCompleteClick = () => {
        setCompleted(!completed)
    }

    return (
        <div className="grid grid-cols-12">
            <div className="col-start-2 col-end-12 md:col-start-3 md:col-end-11 xl:col-start-4 xl:col-end-10">
                <div className="Todo-Show py-5 px-3">
                    {editMode ? (
                        <form onSubmit={handleEditSubmit} className="flex items-center">
                            <label htmlFor="editTodo" className="sr-only">Search</label>
                            <div className="relative w-full pr-3">
                                <input type="text" onChange={handleEditTodoChange} value={newTodo} id="editTodo" className="bg-transparent text-m rounded-lg border border-slate-800 font-medium text-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" required />
                            </div>
                            <button type="submit" className="float-right px-2 text-sm font-medium">
                                <svg fill="#ffffff" className="w-5 h-5" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-419.000000, -640.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M370.21875,484 C370.21875,483.448 370.68915,483 371.26875,483 C371.84835,483 372.31875,483.448 372.31875,484 C372.31875,484.552 371.84835,485 371.26875,485 C370.68915,485 370.21875,484.552 370.21875,484 L370.21875,484 Z M381.9,497 C381.9,497.552 381.4296,498 380.85,498 L379.8,498 L379.8,494 C379.8,492.895 378.86025,492 377.7,492 L369.3,492 C368.13975,492 367.2,492.895 367.2,494 L367.2,498 L366.15,498 C365.5704,498 365.1,497.552 365.1,497 L365.1,487.044 C365.1,486.911 365.15565,486.784 365.2533,486.691 L367.2,484.837 L367.2,486 C367.2,487.105 368.13975,488 369.3,488 L377.7,488 C378.86025,488 379.8,487.105 379.8,486 L379.8,482 L380.85,482 C381.4296,482 381.9,482.448 381.9,483 L381.9,497 Z M377.7,498 L369.3,498 L369.3,495 C369.3,494.448 369.7704,494 370.35,494 L376.65,494 C377.2296,494 377.7,494.448 377.7,495 L377.7,498 Z M369.3,482.837 L370.17885,482 L377.7,482 L377.7,485 C377.7,485.552 377.2296,486 376.65,486 L370.35,486 C369.7704,486 369.3,485.552 369.3,485 L369.3,482.837 Z M381.9,480 L369.7347,480 C369.45645,480 369.18975,480.105 368.99235,480.293 L363.30765,485.707 C363.11025,485.895 363,486.149 363,486.414 L363,498 C363,499.105 363.93975,500 365.1,500 L381.9,500 C383.06025,500 384,499.105 384,498 L384,482 C384,480.895 383.06025,480 381.9,480 L381.9,480 Z" id="save_item-[#1411]"> </path> </g> </g> </g> </g></svg>
                                <span className="sr-only">Save</span>
                            </button>
                        </form>) : (<></>)}
                    {!editMode && !completed ? (
                        <div className="alt">
                            <p className="float-left text-lg md:text-xl lg:text-xl font-medium text-gray-300">{todo.todo}</p>
                            <button onClick={handleDeleteClick} className="float-right px-2 text-sm font-medium">
                                <svg fill="#ffffff" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z"></path></g></svg>
                                <span className="sr-only">Delete</span>
                            </button>
                            <button onClick={handleEditClick} className="float-right px-2 text-sm font-medium">
                                <svg fill="#ffffff" className="w-5 h-5" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 32l12-4 20-20-8-8-20 20zM4 28l2.016-5.984 4 4zM8 20l12-12 4 4-12 12z"></path> </g></svg>
                                <span className="sr-only">Edit</span>
                            </button>
                            <button onClick={handleCompleteClick} className="float-right px-2 text-sm font-medium">
                                <svg fill="#ffffff" className="w-5 h-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 335.765 335.765" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 "></polygon> </g> </g> </g></svg>
                                <span className="sr-only">Okay</span>
                            </button>
                        </div>
                    ) : (<></>)}
                    {!editMode && completed ? (
                        <div className="alt">
                            <p className="float-left text-lg md:text-xl lg:text-xl font-medium text-gray-400 line-through">{todo.todo}</p>
                            <button onClick={handleDeleteClick} className="float-right px-2 text-sm font-medium">
                                <svg fill="#ffffff" className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z"></path></g></svg>
                                <span className="sr-only">Delete</span>
                            </button>
                        </div>
                    ) : (<></>)}
                </div>
            </div>
        </div>
    )
}

export default TodoShow
import { useState } from "react"

function TodoCreate({onCreate}) {
    const [todo, setTodo] = useState('')

    const handleTodoChange = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(todo)
        setTodo('')
    }

    return (
        <div className="Todo-Create">
            <h1 className="p-6 text-4xl text-center font-extrabold text-gray-900 md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-200 from-sky-400">TODO App</span></h1>
            <div className="grid grid-cols-12">
                <div className="col-start-2 col-end-12 md:col-start-3 md:col-end-11 xl:col-start-4 xl:col-end-10">
                    <form onSubmit={handleSubmit} className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <input type="text" value={todo} onChange={handleTodoChange} id="simple-search" className="text-m rounded-lg block w-full pl-7 p-2.5 bg-slate-800 border border-slate-800 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Would you like to do something ?" required />
                        </div>
                        <button type="submit" className="p-3 ml-2 text-sm font-medium bg-slate-800 rounded-lg border border-slate-800 hover:bg-blue-800 text-white focus:ring-blue-500 focus:border-blue-500">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="#FFFFFF" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="#FFFFFF" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
                            <span className="sr-only">Add</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoCreate
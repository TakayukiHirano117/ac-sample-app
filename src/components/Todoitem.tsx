import React from 'react'

interface Todos {
    id: string
    title: string
}

const API_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL
// const API_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL


const handleTodoDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    await fetch(`${API_URL}/api/todos/${id}`, {
        method: 'DELETE'
    });
}

const Todoitem = ({ todos }: { todos: Todos[] }) => {
    return (
        <div className=''>
            {
                todos.map((todo) => (
                    <ul key={todo.id} className='flex flex-col gap-2 mt-2 justify-between mx-auto'>
                        <div className='flex bg-stone-100 p-2 text-xl items-center justify-between'>
                            <li className='font-medium mr-2'>✅ {todo.title}</li>
                            <form method='post'>
                                <button type='submit' onClick={(e) => handleTodoDelete(e, todo.id)} className='cursor-pointer text-4xl font-bold hover:text-slate-500 duration-300'>×</button>
                            </form>
                        </div>
                    </ul>
                ))
            }
        </div>
    )
}

export default Todoitem
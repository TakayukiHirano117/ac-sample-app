import React from 'react'

// props受け取ってそれでmapで表示

interface Todos {
    id: string
    title: string
}

const handleTodoDelete = async (id: string) => {
    await fetch(`http://localhost:3000/api/todos/${id}`, {
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
                            <form>
                                <button type='submit' onClick={() => handleTodoDelete(todo.id)} className='cursor-pointer text-4xl font-bold hover:text-slate-500 duration-300'>×</button>
                            </form>
                        </div>
                    </ul>
                ))
            }
        </div>
    )
}

export default Todoitem
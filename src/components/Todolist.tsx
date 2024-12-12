import React from 'react'

const Todolist = () => {
    

    return (
        <div className=" flex flex-col items-center">
            <h1 className='font-bold text-4xl'>Supabase Todo App</h1>
            <form className='flex items-center'>
                <input type="text" className='shadow-lg mt-2 p-3 outline-none mr-2 border' placeholder='Add todo...' />
                <button className='text-white bg-blue-400 p-2 hover:bg-blue-600 duration-300 rounded-sm'>Add</button>
            </form>
            <div className='flex flex-col'>
                
            {/* TodoItemを１つずつ置く */}
            </div>
        </div>
    )
}

export default Todolist
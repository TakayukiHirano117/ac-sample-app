'use client'

import React, { useEffect, useState } from 'react'
import Todoitem from './Todoitem'

export interface Todos {
    id: number
    title: string
}

const Todolist = () => {
    // const API_URL = process.env.NEXT_PUBLIC_PRODUCTION_URL
    const API_URL = process.env.NEXT_PUBLIC_DEVELOPMENT_URL
    const [title, setTitle] = useState<string>('')
    const [todos, setTodos] = useState([]);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleTitleSubmit = async () => {
        await fetch(`${API_URL}/api/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })

        setTitle('')
    }

    const getTodos = async () => {
        const res = await fetch(`${API_URL}/api/todos`)
        const todos = await res.json();
        return todos
    }

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await getTodos()
            setTodos(todos);
        };

        fetchTodos();
    }, [])

    
    return (
        <div className=" flex flex-col items-center">
            <h1 className='font-bold text-4xl'>Supabase Todo App</h1>
            <form className='flex items-center' method='POST'>
                <input type="text" value={title} onChange={(e) => handleTitleChange(e)} className='shadow-lg mt-2 p-3 outline-none mr-2 border' placeholder='Add todo...' />
                <button onClick={handleTitleSubmit} className='text-white bg-blue-400 p-2 hover:bg-blue-600 duration-300 rounded-sm'>Add</button>
            </form>
            <div className='flex flex-col'>
                <Todoitem todos={todos} />
            </div>
        </div>
    )
}

export default Todolist
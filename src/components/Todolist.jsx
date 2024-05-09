import React from 'react'
import Todo from './Todo'
const Todolist = ({ todos, onToggle }) => {
    return (
        <>
            <div className='flex flex-shrink justify-center gap-3 flex-wrap w-full p-5'>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onToggle={onToggle} />
                ))}
            </div>
        </>
    )
}

export default Todolist

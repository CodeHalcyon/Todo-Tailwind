import React from 'react'

const Todo = ({ todo, onToggle }) => {
  return (

    <div className={todo.status === "pending" ? ' bg-red-200 w-1/4 min-w-80 max-w-96 rounded-lg p-4 ' : ""}>
      <div className='text-2xl font-bold'>{todo.text}</div>



      <div>
        <button onClick={() => onToggle(todo.id)} checked={todo.completed} className='bg-green-400 text-green-800 w-1/2 text-center font-bold p-2 rounded-3xl m-3 hover:cursor-progress'>Mark as done</button>
      </div>




      <div className='bg-red-400 w-1/2 text-center font-bold text-red-800 capitalize p-2 m-3 rounded-3xl hover:cursor-wait'>{(todo.status).toUpperCase()}</div>
    </div>
  )
}

export default Todo

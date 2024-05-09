import { useState } from 'react'
import Todolist from './components/Todolist'
function App() {
  const [todos, setTodos] = useState([])    //handling the todos
  const [newTodoText, setNewTodoText] = useState("")    //handling the input text for todo


  //---- todos=> it is an array of objects 


  const handleAddTodo = () => {
    //accepting the todo only if it is not empty
    if (newTodoText !== '') {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText,
        status: "pending",
        completed: false
      }
      setTodos([...todos, newTodo])   //inserting the newly created object into the array using the spread operator (...)
      setNewTodoText('')      //initializing the input to empty after adding item into the list
    }
    else{
      alert("Enter a task!")
      return;
    }
  }


  const handleToggle = (id) => {    //deleting the item with reference to it's ID
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };   //not adding the item where todo is completed
      }
      return todo;      //returning todo
    }).filter(todo => !todo.completed)); // Filter out completed todos
  };


  return (
    <>
      <div className='p-5'>
        <span className="block text-2xl font-medium text-slate-700">Enter a task</span>
        <input
          onChange={(e) => {
            setNewTodoText(e.target.value)
          }}
          value={newTodoText}
          type='text'
          placeholder='enter todo'
          className='mt-1 block w-1/2 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500' />
        <button onClick={handleAddTodo} type='button' className='bg-blue-500 p-3 w-1/3 hover:bg-blue-700 text-xl my-5 text-white rounded-full'>Add task</button>
      </div>


      <Todolist todos={todos} onToggle={handleToggle} />
    </>
  )
}

export default App

import React, { useState } from 'react'

const Todo = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const disabledButton = input === ''

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = todos.length
    let inputTodo = { id: id, todo: input }
    setTodos([...todos, inputTodo])
    setInput('')
  }

  const handleDelete = (id) => {

  }

  const listTodo = todos.map((item) => {
    const { id, todo } = item
    return (
      <li key={id} onClick={() => handleDelete(id)}>{todo}</li>
    )
  })


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>My Todo List</div>
        <input type="text" value={input} onChange={(e) => {
          e.preventDefault()
          setInput(e.target.value)
        }} />
        <button disabled={disabledButton}>Submit</button>
      </form>
      <p>
        <ul>
          {listTodo}
        </ul>
      </p>
    </div>
  )

}

export default Todo


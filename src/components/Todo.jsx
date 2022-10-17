import React, { useState } from 'react'

const Todo = () => {
    
    const[data, setData] = useState("")
    const[todo, setTodo] = useState([
        { id:1, name:"sleep"},
        { id:2, name:"work"}
])

    const handleSubmit = (e) => {        
        e.preventDefault()
        
        if(!data){
            alert("please enter a todo!")
            return
        }
        const newId = Date.now()
        const newTodo = {id:newId, name:data}
        setTodo([...todo, newTodo])
        setData("")
    }

    const handleDelete = (id) => {
        setTodo(todo.filter((i) => i.id !== id))
    }

  return (
    <div className='todo'>
    <h1>Todo</h1>
    <div className='content'>
        <form onSubmit={handleSubmit} className="myForm">
        <input type="text" value={data} onChange={e => setData(e.target.value)} placeholder="Enter Todo..." className='myInput' />
        <button type="submit">Submit</button> 
        </form>
        <div className=''>
            {todo.map(t => {
                return (
                    <div key={t.id} className="inner">
                        <p>{t.name}</p>
                        <button onClick={() => handleDelete(t.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Todo
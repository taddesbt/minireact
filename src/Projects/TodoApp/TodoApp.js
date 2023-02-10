import React, { useState } from 'react'
import './todoApp.css'
import { v4 as uuidv4 } from 'uuid';



const initialState = { id: uuidv4(), text: 'dd' }

export default function TodoApp() {

    const [input, setInput] = useState(initialState)
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
        setTodos([...todos, input])
    }

    const handleDelete = (id) => {
        console.log('delete it')
        const newTodo = todos.filter((todo) => {

            return (todo.id !== id)
        })
        setTodos(newTodo)

    }

    const ListItem = ({ id, text, handleDelete }) => {

        return (<li>
            <span>{text} </span>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>)
    }

    const handleClear=() => {
        setTodos([])
    }
    return (
        <section>
            <div className="container">
                <div className="add-item">
                    <form action="" onSubmit={handleSubmit}>
                        <input value={input.text} onChange={(e) => setInput({ id: uuidv4(), text: e.target.value })} type="text" placeholder="Add a Task" />
                        <button>Add</button>
                    </form>
                </div>

                <h2>List of Tasks To Do</h2>
                <hr />

                <ol className="todo-list">
                    {todos.map((todo, index) => {
                        return <ListItem key={index} id={todo.id} text={todo.text} handleDelete={handleDelete} />
                    })}
                </ol>
                <hr />
                <button className="clear" onClick={handleClear}>Clear Tasks</button>
            </div>
        </section>
    )
}

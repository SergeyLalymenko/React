import React from 'react'
import './TodoForm.css'

function TodoForm(props){

    return (
        <div className="form">
            <input type="text" className="input" value={props.form.value} onChange={(e) => props.onHandleChange(e.target.value)}/>
            <button
            className="button"
            onClick={props.onAddTodo}
            >
                Add
            </button>
        </div>
    )
}

export default TodoForm;

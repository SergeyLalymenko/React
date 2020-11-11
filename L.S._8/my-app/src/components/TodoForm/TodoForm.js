import React, { useState } from 'react'
import './TodoForm.css'

function TodoForm(props){

    const [form, setForm] = useState(getEmptyForm());

    function onHandleChange(value){
        const newForm = {
            value: value,
        }
        setForm(newForm);
    }

    function onAddTodo(value){
        setForm(getEmptyForm())
        props.onAddTodo(value);
    }

    function getEmptyForm(){
        return {
            value: '',
        }
    }

    return (
        <div className="form">
            <input type="text" className="input" value={form.value} onChange={(e) => onHandleChange(e.target.value)}/>
            <button
            className="button"
            onClick={() => onAddTodo(form.value)}
            >
                Add
            </button>
        </div>
    )
}

export default TodoForm;

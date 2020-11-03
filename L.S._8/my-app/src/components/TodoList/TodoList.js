import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'


function TodoList(props){

    return (
        <ul className="container">
                {!props.list ? 'Loading...' : props.list.map((item) => {
                    return <TodoItem key={item.id} item={item} onToggle={props.onToggle} onDelete={props.onDelete}/>
                })
                }
        </ul>
    )
}

export default TodoList;
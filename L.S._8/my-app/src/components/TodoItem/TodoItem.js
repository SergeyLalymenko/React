import React from 'react'
import './TodoItem.css'

function TodoItem(props){
    return (
        <li
            className={"todo-item" + (props.item.completed ? " done" : "")}
            onClick={() => props.onToggle(props.item)}
            >
            {props.item.title}
            <span
                className="delete-btn"
                onClick={(e) => props.onDelete(e, props.item.id)}
                >
                    X
                </span>
        </li>
    )
}

export default TodoItem;

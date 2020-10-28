import React from 'react'
import './TodoItem.css'

function TodoItem({item, onToggle}){
    return (
        <li
            className={"todo-item" + (item.completed ? " done" : "")}
            onClick={() => onToggle(item)}
            >
            {item.title}
            {/* <span
                className="delete-btn"
                onClick={(e) => this.props.onDelete(e, this.props.item.id)}
                >
                    X
                </span> */}
        </li>
    )
}

export default TodoItem;

import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {
    render() {
        return (
            <div
                className={"todo-item" + (this.props.item.isDone ? " done" : "")}
                onClick={() => this.props.onToggle(this.props.item.id)}
                >
                {this.props.item.title}
                <span
                    className="delete-btn"
                    onClick={(e) => this.props.onDelete(e, this.props.item.id)}
                    >
                        X
                    </span>
            </div>
        )
    }
}

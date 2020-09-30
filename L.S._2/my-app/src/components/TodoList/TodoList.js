import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './TodoList.css'


export default class TodoList extends Component {
    render() {
        return (
            <div className="container">
                {this.props.todos.map((item) => {
                    return <TodoItem key={item.id} item={item} onToggle={this.props.onToggle} onDelete={this.props.onDelete}/>
                })
                }
            </div>
        )
    }
}
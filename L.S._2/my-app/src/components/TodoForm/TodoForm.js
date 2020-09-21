import React, { Component } from 'react'
import './TodoForm.css'

export default class TodoForm extends Component {
    render() {
        return (
            <div className="form">
                <input type="text" className="input"/>
                <button
                className="button"
                onClick={(e) => this.props.onAdd(e.target.previousElementSibling)}
                >
                    Add
                </button>
            </div>
        )
    }
}

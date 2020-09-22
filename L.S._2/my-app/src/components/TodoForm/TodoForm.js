import React, { Component } from 'react'
import './TodoForm.css'

export default class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div className="form">
                <input type="text" className="input" value={this.state.value} onChange={this.handleChange}/>
                <button
                className="button"
                onClick={() => this.props.addTodo(this.state.value)}
                >
                    Add
                </button>
            </div>
        )
    }
}

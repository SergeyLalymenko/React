import React, { Component } from 'react'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

export default class App extends Component {

  state = {
    todoListItems: [
      {
        id: 1,
        title: 'Task 1',
        isDone: true,
      },
      {
        id: 2,
        title: 'Task 2',
        isDone: true,
      },
      {
        id: 3,
        title: 'Task 3',
        isDone: false,
      },
      {
        id: 4,
        title: 'Task 4',
        isDone: true,
      },
    ],
  };

  toggleTodo = ((id) => {
    this.setState({
      todoListItems: this.state.todoListItems.map((item) => {
        if(item.id !== id){
          return item;
        }
        return {...item, isDone: !item.isDone};
      })
    })
  });

  deleteTodo = ((e, id) => {
    e.stopPropagation();
    this.setState({
      todoListItems: this.state.todoListItems.filter((item) => item.id !== id)
    })
  })

  addTodo = ((element) => {
    if(element.value !== ''){
      this.setState({
        todoListItems: [...this.state.todoListItems, {id: Date.now(),title: element.value,isDone: false}]
      })
      element.value = '';
    }
  })

  render() {
    return (
      <div className="app-container">
        <TodoList todos={this.state.todoListItems} onToggle={this.toggleTodo} onDelete={this.deleteTodo}/>
        <TodoForm todos={this.state.todoListItems} onAdd={this.addTodo}/>
      </div>
    )
  }
}

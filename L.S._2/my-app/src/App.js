import React from 'react'
// import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

export default function App(){

  // deleteTodo = ((e, id) => {
  //   e.stopPropagation();
  //   this.setState({
  //     todoListItems: this.state.todoListItems.filter((item) => item.id !== id)
  //   })
  // })

  // addTodo = ((title) => {
  //   if(title !== ''){
  //       this.setState({
  //         todoListItems: [...this.state.todoListItems, {id: Date.now(),title: title,isDone: false}]
  //       })
  //   }
  // })

  return (
    <div className="app-container">
      <TodoList/>
    </div>
  )
}
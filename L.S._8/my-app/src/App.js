import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { toggleTodo, getTodos, deleteTodo, addTodo } from './store/actions/actions'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App({list, form, toggleTodo, getTodos, deleteTodo, addTodo}){

  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className="app-container">
      <TodoList list={list} onToggle={toggleTodo} onDelete={deleteTodo}/>
      <TodoForm form={form} onAddTodo={addTodo}/>
    </div>
  )
}


function mapStateToProps(state){
  return {
      list: state.list,
      form: state.form,
  }
}

const mapDispatchToProps = {
  toggleTodo,
  getTodos,
  deleteTodo,
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
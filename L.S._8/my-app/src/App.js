import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setTodo, setTodos, deleteTodo, setForm, addTodo } from './store/actions/actions'
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList'
import './App.css'

function App({list, form, setTodo, setTodos, deleteTodo, setForm, addTodo}){

  useEffect(() => {
    setTodos();
  }, [])

  return (
    <div className="app-container">
      <TodoList list={list} onToggle={setTodo} onDelete={deleteTodo}/>
      <TodoForm form={form} onHandleChange={setForm} onAddTodo={addTodo}/>
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
  setTodo,
  setTodos,
  deleteTodo,
  setForm,
  addTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
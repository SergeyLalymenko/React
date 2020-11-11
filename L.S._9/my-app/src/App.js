import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import { setNewUser, changeUser, fetchUsers, deleteUser } from './store/actions/users'
import Albums from './components/albums/Albums'
import UsersList from './components/users/UsersList'
import Form from './components/form/Form'
import Header from './components/header/Header'
import './App.css'

function App({setNewUser, changeUser, fetchUsers, deleteUser, list}) {

  const [form, setForm] = useState(getEmptyForm())

  useEffect(fetchUsers, [])

  function onSaveBtnClick(id){
    id ? changeUser(form, id) : setNewUser(form);
  }

  function onHandleChange(target){
    const newForm = {...form, [target.name]: target.value}
    setForm(newForm);
  }

  function fillUserForm(id){
    const selectedUser = list.find((item) => item.id == id);
    const newForm = {
      name: selectedUser.name,
      username: selectedUser.username,
    }
    setForm(newForm);
  }

  function onAddBtnClick(){
    setForm(getEmptyForm());
  }

  function getEmptyForm(){
    return ({name: '', username: ''});
  }

  return (
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/form">
              <Form onSaveBtnClick={onSaveBtnClick} onHandleChange={onHandleChange} onDeleteBtnClick={deleteUser} form={form}/>
            </Route>
            <Route path="/albums">
              <Albums/>
            </Route>
            <Route path="/users">
              <UsersList onChangeUserClick={fillUserForm} onAddBtnClick={onAddBtnClick} list={list}/>
            </Route>
            <Route path="*">
              <Redirect to="/users"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

const mapStateToProps = ({users: {list}}) => ({list})

const mapDispatchToProps = {
  setNewUser,
  changeUser,
  fetchUsers,
  deleteUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
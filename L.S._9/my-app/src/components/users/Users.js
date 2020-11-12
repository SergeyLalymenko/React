import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { changeUser, deleteUser, fetchUsers, setNewUser } from '../../store/actions/users'
import Form from './Form'
import UsersList from './UsersList'


function Users({list, changeUser, fetchUsers, setNewUser, deleteUser}) {

    const {path} = useRouteMatch();
    const [form, setForm] = useState(getEmptyForm());

    useEffect(fetchUsers, []);

    function onAddBtnClick(){
        setForm(getEmptyForm());
    }

    function getEmptyForm(){
        return ({name: '', username: ''});
    }

    function onHandleChange(target){
        const newForm = {...form, [target.name]: target.value}
        setForm(newForm);
    }

    function onSaveBtnClick(id){
        id ? changeUser(form, id) : setNewUser(form);
    }

    function fillUserForm(id){
        const selectedUser = list.find((item) => item.id == id);
        const newForm = {
            name: selectedUser.name,
            username: selectedUser.username,
        }
        setForm(newForm);
    }

    return (
        <Switch>
            <Route path = {`${path}/form/:id`}>
                <Form onHandleChange={onHandleChange} onSaveBtnClick={onSaveBtnClick} onDeleteBtnClick={deleteUser} form={form}/>
            </Route>
            <Route path = {`${path}/form`}>
                <Form onHandleChange={onHandleChange} onSaveBtnClick={onSaveBtnClick} form={form}/>
            </Route>
            <Route path={path}>
                <UsersList list={list} onAddBtnClick={onAddBtnClick} onChangeUserClick={fillUserForm}/>
            </Route>
        </Switch>
    )
}

const mapStateToProps = ({users: {list}}) => ({list})

const mapDispatchToProps = {
    fetchUsers,
    changeUser,
    setNewUser,
    deleteUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)

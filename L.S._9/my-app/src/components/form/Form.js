import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import AddForm from './AddForm'

function Form({onSaveBtnClick, onHandleChange, onDeleteBtnClick, form}) {

    const {path} = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/:id`}>
                <AddForm onSaveBtnClick={onSaveBtnClick} onHandleChange={onHandleChange} onDeleteBtnClick={onDeleteBtnClick} form={form}/>
            </Route>
            <Route path={path}>
                <AddForm onSaveBtnClick={onSaveBtnClick} onHandleChange={onHandleChange} form={form}/>
            </Route>
        </Switch>
    )
}

export default Form

import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import './Form.css'


function AddForm({onHandleChange, onSaveBtnClick, onDeleteBtnClick, form}) {

    const history = useHistory();
    const {id} = useParams();

    function onSaveClick(id){
        onSaveBtnClick(id);
        goBack();
    }

    function onDeleteClick(id){
        onDeleteBtnClick(id);
        goBack();
    }

    function goBack(){
        history.goBack();
    }

    return (
        <div className="add-form-container">
            <input name="name" type="text" className="add-form-input" placeholder="Имя" value={form.name} onChange={(e) => onHandleChange(e.target)}/>
            <input name="username" type="text" className="add-form-input" placeholder="Фамилия" value={form.username} onChange={(e) => onHandleChange(e.target)}/>
            <button className="add-form-button" onClick={() => onSaveClick(id)}>Save</button>
            <button className={id ? 'form-delete-btn' : 'none'} onClick={() => onDeleteClick(id)}>Delete</button>
        </div>
    )
}

export default AddForm
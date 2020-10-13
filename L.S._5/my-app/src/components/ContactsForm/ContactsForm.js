import React from 'react'
import FormButtons from '../FormButtons/FormButtons'
import './ContactsForm.css'


function ContactsForm(props){
    return (
        <div className="contacts-form-container">
            <form>
                <input type="text" className="contacts-form-input" name="name" placeholder="Введите имя" value={props.form.name} onChange={props.onHandleFormChange}/>
                <input type="text" className="contacts-form-input" name="surname" placeholder="Введите фамилию" value={props.form.surname} onChange={props.onHandleFormChange}/>
                <input type="text" className="contacts-form-input" name="phone" placeholder="Введите телефон" value={props.form.phone} onChange={props.onHandleFormChange}/>
            </form>
            <FormButtons onSaveBtnClick={props.onSaveBtnClick} onDeleteBtnClick={props.onDeleteBtnClick} form={props.form}/>
        </div>
    )
}

export default ContactsForm;

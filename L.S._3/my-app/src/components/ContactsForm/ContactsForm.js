import React, { Component } from 'react'
import FormButtons from '../FormButtons/FormButtons'
import './ContactsForm.css'


export default class ContactsForm extends Component {
    render() {
        return (
            <div className="contacts-form-container">
                <input type="text" className="contacts-form-input" placeholder="Введите имя" value={this.props.form.name} onChange={this.props.onHandleNameChange}/>
                <input type="text" className="contacts-form-input" placeholder="Введите фамилию" value={this.props.form.surname} onChange={this.props.onHandleSurnameChange}/>
                <input type="text" className="contacts-form-input" placeholder="Введите телефон" value={this.props.form.phone} onChange={this.props.onHandlePhoneChange}/>
                <input type="text" className="contacts-form-input" placeholder="Введите почту" value={this.props.form.email} onChange={this.props.onHandleEmailChange}/>
                <FormButtons onSaveBtnClick={this.props.onSaveBtnClick} onDeleteBtnClick={this.props.onDeleteBtnClick} form={this.props.form}/>
            </div>
        )
    }
}

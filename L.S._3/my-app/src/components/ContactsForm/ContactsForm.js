import React, { Component } from 'react'
import FormButtons from '../FormButtons/FormButtons'
import './ContactsForm.css'


export default class ContactsForm extends Component {
    render() {
        return (
            <div className="contacts-form-container">
                <form>
                    <input type="text" className="contacts-form-input" name = "name" placeholder="Введите имя" value={this.props.form.name} onChange={this.props.onHandleFormChange}/>
                    <input type="text" className="contacts-form-input" name = "surname" placeholder="Введите фамилию" value={this.props.form.surname} onChange={this.props.onHandleFormChange}/>
                    <input type="text" className="contacts-form-input" name = "phone" placeholder="Введите телефон" value={this.props.form.phone} onChange={this.props.onHandleFormChange}/>
                    <input type="text" className="contacts-form-input" name = "email" placeholder="Введите почту" value={this.props.form.email} onChange={this.props.onHandleFormChange}/>
                </form>
                <FormButtons onSaveBtnClick={this.props.onSaveBtnClick} onDeleteBtnClick={this.props.onDeleteBtnClick} form={this.props.form}/>
            </div>
        )
    }
}

import React, { Component } from 'react'
import ContactsForm from './components/ContactsForm/ContactsForm'
import ContactsList from './components/ContactsList/ContactsList'
import './App.css'


export default class App extends Component {

  state = {
    contacts: [],
    form: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        operation: '',
    },
  };

  contacts = [];

  componentDidMount(){
    let data = localStorage.getItem('contacts');
    if(data){
      this.contacts = JSON.parse(data);
      this.setState({
        contacts: this.contacts
      })
    } else{
      this.contacts = [{
        name: 'Bob',
        surname: 'Smith',
        phone: '0505050',
        email: '@kat.com',
        id: 1,
      }]
      this.setState({
        contacts: this.contacts
      })
    }
  }

  fillContactForm = (id) => {
    let element = this.state.contacts.find((item) => item.id === id);
    this.setState({
      form: {
        name: element.name,
        surname: element.surname,
        phone: element.phone,
        email: element.email,
        operation: id,
      }
    })
  }

  handleNameChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        name: e.target.value,
      }
    });
  }

  handleSurnameChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        surname: e.target.value,
      }
    });
  }

  handlePhoneChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        phone: e.target.value,
      }
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        email: e.target.value,
      }
    });
  }

  onSaveBtnClick = () => {
    if(this.state.form.operation){
      this.changeContact();
    } else{
      this.addContact();
    }
    localStorage.setItem('contacts',JSON.stringify(this.contacts));
  }

  changeContact(){
    this.contacts = this.state.contacts.map((item) => {
      if(item.id !== this.state.form.operation){
        return item;
      } else{
        return {
          name: this.state.form.name,
          surname: this.state.form.surname,
          phone: this.state.form.phone,
          email: this.state.form.email,
          id: item.id,
        }
      }
    });
    this.setState({
      contacts: this.contacts
    })
  }

  addContact(){
    this.contacts = [
      ...this.state.contacts,
      {
        name: this.state.form.name,
        surname: this.state.form.surname,
        phone: this.state.form.phone,
        email: this.state.form.email,
        id: Date.now(),
      }
    ]
    this.setState({
      contacts: this.contacts,
      form: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        operation: '',
      }
    })
  }

  onAddBtnClick = () => {
    this.setState({
      form: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        operation: '',
      }
    })
  }

  onDeleteBtnClick = () => {
    this.contacts = this.state.contacts.filter((item) => item.id !== this.state.form.operation);
    this.setState({
      contacts: this.contacts,
      form: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        operation: this.state.form.operation,
      }
    })
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }


  render() {
    return (
      <div className="app-container">
        <ContactsList contacts={this.state.contacts}
          onContactClick={this.fillContactForm}
          onAddBtnClick={this.onAddBtnClick}
        />
        <ContactsForm contacts={this.state.contacts}
          form={this.state.form}
          onHandleNameChange={this.handleNameChange}
          onHandleSurnameChange={this.handleSurnameChange}
          onHandlePhoneChange={this.handlePhoneChange}
          onHandleEmailChange={this.handleEmailChange}
          onSaveBtnClick={this.onSaveBtnClick}
          onDeleteBtnClick={this.onDeleteBtnClick}
        />
      </div>
    )
  }
}

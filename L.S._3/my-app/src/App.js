import React, { Component } from 'react'
import ContactsForm from './components/ContactsForm/ContactsForm'
import ContactsList from './components/ContactsList/ContactsList'
import './App.css'


export default class App extends Component {
  constructor(){
    super();
    this.contacts = [];
  }

  state = {
    contacts: [],
    form: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        targetElementId: '',
    },
  };



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
        targetElementId: id,
      }
    })
  }

  handleFormChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  onSaveBtnClick = () => {
    if(this.state.form.targetElementId){
      this.changeContact();
    } else{
      this.addContact();
    }
    localStorage.setItem('contacts',JSON.stringify(this.contacts));
  }

  changeContact(){
    this.contacts = this.state.contacts.map((item) => {
      if(item.id !== this.state.form.targetElementId){
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
        targetElementId: '',
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
        targetElementId: '',
      }
    })
  }

  onDeleteBtnClick = () => {
    this.contacts = this.state.contacts.filter((item) => item.id !== this.state.form.targetElementId);
    this.setState({
      contacts: this.contacts,
      form: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        targetElementId: this.state.form.targetElementId,
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
          onHandleFormChange={this.handleFormChange}
          onSaveBtnClick={this.onSaveBtnClick}
          onDeleteBtnClick={this.onDeleteBtnClick}
        />
      </div>
    )
  }
}

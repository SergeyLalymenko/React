import React, { Component } from 'react'
import ContactsForm from './components/ContactsForm/ContactsForm'
import ContactsList from './components/ContactsList/ContactsList'
import contactsService from './contactsService'
import './App.css'


export default class App extends Component {

  state = {
    contacts: [],
    form: {
        name: '',
        surname: '',
        phone: '',
        targetElementId: '',
    },
  };



  componentDidMount(){
    contactsService.get('/')
      .then(({data}) => {
        this.setState({
        contacts: data
        });
    });
  }

  fillContactForm = (id) => {
    let element = this.state.contacts.find((item) => item.id === id);
    this.setState({
      form: {
        name: element.name,
        surname: element.surname,
        phone: element.phone,
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
  }

  changeContact(){
    const contacts = this.state.contacts.map((item) => {
      if(item.id !== this.state.form.targetElementId){
        return item;
      } else{
        return {
          name: this.state.form.name,
          surname: this.state.form.surname,
          phone: this.state.form.phone,
          id: item.id,
        }
      }
    });
    this.setState({
      contacts: contacts
    })
    this.sendChangeContactRequest(contacts);
  }

  addContact(){
    const newContact = {
      name: this.state.form.name,
      surname: this.state.form.surname,
      phone: this.state.form.phone,
    };
    contactsService.post('/', newContact)
      .then(({data}) => this.setState({
        contacts: [...this.state.contacts, data],
        form: {
          name: '',
          surname: '',
          phone: '',
          targetElementId: '',
        }
      }))
  }

  onAddBtnClick = () => {
    this.setState({
      form: {
        name: '',
        surname: '',
        phone: '',
        targetElementId: '',
      }
    })
  }

  onDeleteBtnClick = () => {
    const contacts = this.state.contacts.filter((item) => item.id !== this.state.form.targetElementId);
    this.setState({
      contacts: contacts,
      form: {
        name: '',
        surname: '',
        phone: '',
        targetElementId: this.state.form.targetElementId,
      }
    })
    this.sendDeleteContactRequest();
  }

  sendDeleteContactRequest(){
    contactsService.delete('/' + this.state.form.targetElementId);
  }

  sendChangeContactRequest(element){
    const selectedContact = element.find((item) => item.id === this.state.form.targetElementId);
    contactsService.put('/' + this.state.form.targetElementId, selectedContact);
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
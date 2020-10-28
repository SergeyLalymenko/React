import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setContacts, setContact, setForm, setNewContact, deleteContact } from './store/actions'
import ContactsForm from './components/ContactsForm/ContactsForm'
import ContactsList from './components/ContactsList/ContactsList'
import contactsService from './contactsService'
import './App.css'


function App({contacts, form, setContacts, setForm, setContact, setNewContact, deleteContact}){



  useEffect(() => {
    contactsService.get('/')
      .then(({data}) => {
        setContacts(data);
      });
    }, [])

  function fillContactForm(id){
    const targetElement = contacts.find((item) => item.id === id);
    const newForm = {
      name: targetElement.name,
      surname: targetElement.surname,
      phone: targetElement.phone,
      targetElementId: id,
    };
    setForm(newForm);
  }

  function handleFormChange(e){
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(newForm);
  }

  function onSaveBtnClick(){
    if(form.targetElementId){
      changeContact();
    } else{
      addContact();
    }
  }

  function changeContact(){
    const newContact = {
      name: form.name,
      surname: form.surname,
      phone: form.phone,
      id: form.targetElementId,
    };
    setContact(newContact);
    sendChangeContactRequest(newContact);
  }

  function addContact(){
    const newContact = {
      name: form.name,
      surname: form.surname,
      phone: form.phone,
    };
    contactsService.post('/', newContact)
      .then(({data}) => {
        setNewContact(data);
        setForm(getEmptyForm());
      })
  }

  function getEmptyForm(){
    return (
      {
        name: '',
        surname: '',
        phone: '',
        targetElementId: '',
      }
    )
  }

  function onAddBtnClick(){
    setForm(getEmptyForm());
  }

  function onDeleteBtnClick(){
    deleteContact();
    setForm(getEmptyForm());
    sendDeleteContactRequest();
  }

  function sendDeleteContactRequest(){
    contactsService.delete('/' + form.targetElementId);
  }

  function sendChangeContactRequest(newContact){
    contactsService.put('/' + form.targetElementId, newContact);
  }
  
    return (
      <div className="app-container">
        <ContactsList contacts={contacts}
          onContactClick={fillContactForm}
          onAddBtnClick={onAddBtnClick}
        />
        <ContactsForm contacts={contacts}
          form={form}
          onHandleFormChange={handleFormChange}
          onSaveBtnClick={onSaveBtnClick}
          onDeleteBtnClick={onDeleteBtnClick}
        />
      </div>
    )
}

function mapStateToProps(state){
  return {
      contacts: state.contacts,
      form: state.form
  }
}

const mapDispatchToProps = {
  setContacts,
  setForm,
  setContact,
  setNewContact,
  deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React, { useState, useEffect } from 'react'
import ContactsForm from './components/ContactsForm/ContactsForm'
import ContactsList from './components/ContactsList/ContactsList'
import contactsService from './contactsService'
import './App.css'


function App(){

  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState(getEmptyForm());



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
    const newContacts = contacts.map((item) => {
      if(item.id !== form.targetElementId){
        return item;
      } else{
        return {
          name: form.name,
          surname: form.surname,
          phone: form.phone,
          id: item.id,
        }
      }
    });
    setContacts(newContacts);
    sendChangeContactRequest(newContacts);
  }

  function addContact(){
    const newContact = {
      name: form.name,
      surname: form.surname,
      phone: form.phone,
    };
    contactsService.post('/', newContact)
      .then(({data}) => {
        setContacts([...contacts, data]);
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
    const newContacts = contacts.filter((item) => item.id !== form.targetElementId);
    const newForm = {
      name: '',
      surname: '',
      phone: '',
      targetElementId: form.targetElementId,
    }
    setContacts(newContacts);
    setForm(newForm);
    sendDeleteContactRequest();
  }

  function sendDeleteContactRequest(){
    contactsService.delete('/' + form.targetElementId);
  }

  function sendChangeContactRequest(element){
    const selectedContact = element.find((item) => item.id === form.targetElementId);
    contactsService.put('/' + form.targetElementId, selectedContact);
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

export default App;
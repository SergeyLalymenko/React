import React, { useEffect } from 'react'
import theme from './theme'
import { ThemeProvider } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchContacts, addContact, changeContact, deleteContact } from './store/actions/actions'
import ContactsForm from './components/ContactsForm/ContactsForm'
import ContactsList from './components/ContactsList/ContactsList'



function App({contacts, fetchContacts, addContact, changeContact, deleteContact}){

  useEffect(() => fetchContacts(), [])

  function onSaveBtnClick(values, id){
    id ? changeContact(values, contacts, id) : addContact(values);
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container style={mainGridStyles}>
        <Grid item xs={1} md={1}></Grid>
        <Router>
          <ContactsList contacts={contacts}/>
          <Grid item xs={2} md={2}></Grid>
          <Switch>
            <Route path="/form/:id">
              <ContactsForm contacts={contacts} onSaveBtnClick={onSaveBtnClick} onDeleteBtnClick={deleteContact}/>
            </Route>
            <Route path="/form">
                <ContactsForm contacts={contacts} onSaveBtnClick={onSaveBtnClick}/>
            </Route>
            <Route path="*">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </Router>
      </Grid>
    </ThemeProvider>
  )
}

const mainGridStyles = {
  marginTop: '10px',
}

const mapStateToProps = ({contacts}) => ({contacts})

const mapDispatchToProps = {
  fetchContacts,
  addContact,
  changeContact,
  deleteContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
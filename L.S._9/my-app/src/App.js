import React from 'react'
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'
import Albums from './components/albums/Albums'
import Users from './components/users/Users'
import Header from './components/header/Header'
import './App.css'


function App() {

  return (
      <Router>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/albums">
              <Albums/>
            </Route>
            <Route path="/users">
              <Users/>
            </Route>
            <Route path="*">
              <Redirect to="/users"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App
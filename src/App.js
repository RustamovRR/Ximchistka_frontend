import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom'

import './App.css'
import { HeaderAdmin } from './admin/header'
import { Client } from './components/Client';
import { Login } from './admin/login';


export default function App() {
  const [login, setLogin] = useState(false)
  let history = useHistory()

  const handleClick = () => {
    setLogin(true)
  }

  return (
    <BrowserRouter >
      <div class='App'>
        <Switch>
          <Route path='/' exact component={Client} />
          <Route path='/admin5f98f6612e07524d23e9323e' exact component={HeaderAdmin} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </div>

    </BrowserRouter>
  )
}

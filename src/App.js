import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import { HeaderAdmin } from './admin/header'
import { Client } from './components/Client';
import { Login } from './admin/login';


export default function App() {
  const [login, setLogin] = useState(false)

  const handleClick = () => {
    setLogin(true)
  }

  return (
    <BrowserRouter >
      <div class='App'>
        <Switch>
          <Route path='/' exact component={Client} />
          <Route path='/admin' component={HeaderAdmin}>
            {/* {
              login
                ? <HeaderAdmin />
                : <Redirect to='/login' />
            } */}
          </Route>
          {/* <Route path='/admin' component={HeaderAdmin} /> */}
          <Route path='/login' component={Login}  />
        </Switch>
      </div>

    </BrowserRouter>
  )
}

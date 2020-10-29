import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom'

import './App.css'
import { HeaderAdmin } from './admin/header'
import { Client } from './components/Client';
import { Login } from './admin/login';
import 'dotenv/config'


export default function App() {
  const admin_url = process.env.admin_url
  const [logged, setLogged] = useState(false)

  return (
    <BrowserRouter >
      <div class='App'>
        <Switch>
          <Route path='/' exact component={Client} />
          <Route path='/login' exact component={Login} />
          <Route path='/admin' exact render={() => (
            <Redirect to='/login' />
          )} />
          <Route path={`/${admin_url}`} exact component={HeaderAdmin} />
          <Route path='*'>404 Bad Request</Route>
        </Switch>
      </div>

    </BrowserRouter>
  )
}

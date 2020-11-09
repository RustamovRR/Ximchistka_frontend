import React, { useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom'

import './App.css'
import { HeaderAdmin } from './admin/header'
import { Client } from './components/Client';
import { Login } from './admin/login';
import { GLOBAL } from './GLOBAL'


export default function App() {
  const admin_url = GLOBAL.admin_url
  const frontend = GLOBAL.frontend

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

import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import { HeaderAdmin } from './admin/header'
import { Client } from './components/Client';


export default function App() {

  return (
    <BrowserRouter>
      <div class='App'>
        <Switch>
          <Route path='/' exact component={Client} />
          {/* <Route path='/' component={HeaderAdmin} /> */}
        </Switch>
      </div>

    </BrowserRouter>
  )
}

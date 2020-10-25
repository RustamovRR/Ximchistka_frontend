import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { AdminABout } from './about';
import { AdminGallery } from './gallery';
import { AdminService } from './service';
import axios from 'axios';

import logo from '../img/logo.jpg'

export function HeaderAdmin() {

    const [uzLang, setUzLang] = useState([])
    const [ruLang, setRuLang] = useState([])
    const [phone, setPhone] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let result = await axios('http://localhost:4000/about')
            setUzLang(result.data.uz)
            setRuLang(result.data.ru)
            setPhone(result.data.phone)
        }
        fetchData()
    }, [])


    return (
        <div class="d-flex" id="wrapper">

            <div class="bg-light border-right pt-5" id="sidebar-wrapper" style={{ height: '100vh' }} >
                <div class="list-group list-group-flush ">
                    <Link to='/about' class="list-group-item list-group-item-action bg-light">About</Link>
                    <Link to='/service' class="list-group-item list-group-item-action bg-light">Service</Link>
                    <Link to='/gallery' class="list-group-item list-group-item-action bg-light">Galereya</Link>
                </div>

            </div>
            <div id="page-content-wrapper" style={{ width: '100vw' }}>

                <nav class="navbar navbar-expand-lg navbar-light w-100 bg-light" >
                    <a href="#" class="logo"><img src={logo} width='85px' alt="" class="img-fluid" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <a class="nav-link" href="#home">home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#about">about</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#services">services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#gallery">gallery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="container-fluid mt-5">
                    <Switch>
                        <Route exact path='/about'><AdminABout item={uzLang} /></Route>
                        <Route exact path='/gallery'><AdminGallery /></Route>
                        <Route exact path='/service'><AdminService /></Route>
                    </Switch>
                </div>
            </div>

        </div>
    )
}
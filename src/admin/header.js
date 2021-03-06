import React, { useEffect, useState } from 'react'
import { BrowserRouter, Link, Route, Switch, } from 'react-router-dom'
import { AdminABout } from './about';
import { AdminGallery } from './gallery';
import { AdminService } from './service';
import axios from 'axios';
import logo from '../img/logo.jpg'
import { GLOBAL } from './../GLOBAL';
import { AdminWelcome } from './welcome';

export function HeaderAdmin() {

    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend

    const [service, setService] = useState([])

    const handleChange = (e) => {
        setService(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/service`)
            setService(result.data)
        }
        fetchData()
    }, [])

    return (
        <BrowserRouter>
            <div class="d-flex" id="wrapper">

                <div class="bg-light border-right pt-5" id="sidebar-wrapper" style={{ height: '100vh', width: 200 }} >
                    <div class="list-group list-group-flush ">
                        <Link to={`/${admin_url}/welcome`} class="list-group-item list-group-item-action bg-light">Хуш келибсиз</Link>
                        <Link to={`/${admin_url}/about`} class="list-group-item list-group-item-action bg-light">Биз ҳақимизда</Link>
                        <Link to={`/${admin_url}/service`} class="list-group-item list-group-item-action bg-light">Хизматлар</Link>
                        <Link to={`/${admin_url}/gallery`} class="list-group-item list-group-item-action bg-light">Галерея</Link>
                    </div>

                </div>
                <div id="page-content-wrapper" style={{ width: '100vw' }}>

                    <nav class="navbar navbar-expand-lg navbar-light w-100 bg-light" >

                        <a href={`${frontend}/${admin_url}`} class="logo"><img src={logo} width='85px' alt="" class="img-fluid" /></a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item ">
                                    <a class="nav-link" >home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >about</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" >services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >gallery</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" >contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div class="container-fluid mt-5">
                        <Switch>
                            <Route exact path={`/${admin_url}/welcome`}><AdminWelcome /></Route>
                            <Route exact path={`/${admin_url}/about`}><AdminABout /></Route>
                            <Route exact path={`/${admin_url}/service`}><AdminService /></Route>
                            <Route exact path={`/${admin_url}/gallery`}><AdminGallery /></Route>
                        </Switch>
                    </div>
                </div>
            </div >
        </BrowserRouter>
    )
}
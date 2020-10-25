import React from 'react'
import { useTranslation } from "react-i18next";

import './style.css'
import logo from '../img/logo.jpg'

export function Header() {
    const { t, i18n } = useTranslation()

    const changeLanguage = lng => {
        i18n.changeLanguage(lng)
    }

    return (
        <div>
            <header id="header" class="fixed-top p-2 ">
                <div class="container d-flex align-items-center ">
                    <nav class="navbar navbar-expand-lg navbar-light w-100">
                        <a href="#" class="logo"><img src={logo} width='85px' alt="" class="img-fluid" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item ">
                                    <a class="nav-link" href="#home">{t('home')}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about">{t('about')}</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="#services">{t('services')}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#gallery">{t('gallery')}</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">{t('contact')}</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                <a href="tel:+998998032314" class="navbar_link ml-auto text-primary">+998 99 803 23 14</a>
                            </span>
                            <span class="navbar-text">
                                <a href="tel:+998903719371" class="navbar_link ml-5 text-primary">+998 90 371 93 71</a>
                            </span>
                            <span class='ml-5'>
                                <span class='button' onClick={() => changeLanguage('uzb')}>
                                    <img src="https://ralphhoweministries.com/wp-content/uploads/2010/09/ub1.png" alt="" width='20' height='10' />
                                    <button class='button btn' id='button1' >Узб</button>
                                </span>

                                <span class='button ml-2' onClick={() => changeLanguage('rus')}>
                                    <img src="https://im0-tub-com.yandex.net/i?id=b442fb02ebfb242b41b8e3ae27e356bc&n=13" alt="" width='20' height='10' />
                                    <button class='button btn' >Рус</button>
                                </span>
                            </span>
                        </div>
                    </nav>
                </div>
            </header>
        </div >

    )
}

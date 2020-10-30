import React, { useEffect, useState } from 'react'
import { Header } from './Header';
import { Carousel } from './Carousel';
import { About } from './About';
import { Services } from './Services';
import { Gallery } from './Gallery';
import { Contact } from './Contact';
import { BrowserRouter, Link, Route } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import { GLOBAL } from './../GLOBAL';

export function Client() {

    const [value, setValue] = useState([])
    const [uzLang, setUzLang] = useState([])
    const [ruLang, setRuLang] = useState([])
    const [phone, setPhone] = useState([])

    const localhost = GLOBAL.backend


    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/about`)
            setValue(result.data)
            setUzLang(result.data.uz)
            setRuLang(result.data.ru)
            setPhone(result.data.phone)
        }
        fetchData()
    }, [])


    return (
        <BrowserRouter>
            <div>
                <Header />
                <Carousel />
                <About items={value} uzItem={uzLang} ruItem={ruLang} />
                <Services />
                <Gallery />
                <Contact />
            </div>
        </BrowserRouter>
    )
}

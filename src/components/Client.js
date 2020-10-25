import React, { useEffect, useState } from 'react'
import { Header } from './Header';
import { Carousel } from './Carousel';
import { About } from './About';
import { Services } from './Services';
import { Gallery } from './Gallery';
import { Contact } from './Contact';
import { BrowserRouter, Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

export function Client() {

    const [value, setValue] = useState([])
    const [uzLang, setUzLang] = useState([])
    const [ruLang, setRuLang] = useState([])
    const [phone, setPhone] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let result = await axios('http://localhost:4000/about')
            setValue(result.data)
            setUzLang(result.data.uz)
            setRuLang(result.data.ru)
            setPhone(result.data.phone)
        }
        fetchData()
    }, [])


    return (
        <div>
            <Header />
            <Carousel />
            <About items={value} uzItem={uzLang} ruItem={ruLang} />
            <Services />
            <Gallery />
            <Contact />
        </div>
    )
}

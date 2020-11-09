import React, { useEffect, useState } from 'react'
import { GLOBAL } from './../GLOBAL';
import axios from 'axios'
import { BrowserRouter, Link } from 'react-router-dom';

export function AdminService() {
    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend

    let [service0, setService0] = useState([])
    let [service1, setService1] = useState([])
    let [service2, setService2] = useState([])
    let [service3, setService3] = useState([])
    let [service4, setService4] = useState([])
    let [service5, setService5] = useState([])
    let [service6, setService6] = useState([])
    let [service7, setService7] = useState([])
    let [service8, setService8] = useState([])

    function handleChange(e) {
        setService0(e.target.value); setService1(e.target.value); setService2(e.target.value); setService3(e.target.value); setService4(e.target.value); setService5(e.target.value); setService6(e.target.value); setService7(e.target.value); setService8(e.target.value);
    }

    const array = [
        {
            name: 'abror',
            age: 234
        },
        {
            name: 'sodiq',
            age: 99
        }
    ]

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/service`)
            setService0(result.data[0])
            setService1(result.data[1])
            setService2(result.data[2])
            setService3(result.data[3])
            setService4(result.data[4])
            setService5(result.data[5])
            setService6(result.data[6])
            setService7(result.data[7])
            setService8(result.data[8])
        }
        fetchData()
    }, [])

    return (
        <BrowserRouter>
            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa847669bdc8a24b0704a18`} method='POST' >
                <h2>{service0.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service0.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service0.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service0.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa8475d9bdc8a24b0704a17`} method='POST' >
                <h2>{service1.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service1.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service1.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service1.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa8471c7064d822980d30e1`} method='POST' >
                <h2>{service2.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service2.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service2.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service2.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa847177064d822980d30e0`} method='POST' >
                <h2>{service3.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service3.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service3.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service3.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa847107064d822980d30df`} method='POST' >
                <h2>{service4.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service4.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service4.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service4.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa8470c7064d822980d30de`} method='POST' >
                <h2>{service5.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service5.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service5.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service5.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa847027064d822980d30dd`} method='POST' >
                <h2>{service6.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service6.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service6.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service6.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa837658b7d6d3108511ed4`} method='POST' >
                <h2>{service7.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service7.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service7.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service7.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/service/5fa835088b7d6d3108511ed3`} method='POST' >
                <h2>{service8.title}</h2>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='title' rows="3" value={service8.title} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="type" >Ўлчов</label>
                    <input class="form-control" id="type" name='type' rows="3" value={service8.type} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3" value={service8.price} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>
        </BrowserRouter >
    )
}

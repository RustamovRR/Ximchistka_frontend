import React, { useEffect, useState } from 'react'
import { GLOBAL } from './../GLOBAL';
import axios from 'axios'

export function AdminWelcome() {
    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend

    let [welcome0, setWelcome0] = useState([])
    let [welcome1, setWelcome1] = useState([])
    let [welcome2, setWelcome2] = useState([])

    const handleChange = (e) => {
        setWelcome0(e.target.value); setWelcome1(e.target.value); setWelcome2(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/welcome`)
            setWelcome0(result.data[0])
            setWelcome1(result.data[1])
            setWelcome2(result.data[2])
        }
        fetchData()
    }, [])

    return (
        <div>
            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/welcome/5fa8d346f02b3c3f082890cb`} method='POST' >
                <h1>1</h1>
                <div class="form-group mb-3">
                    <label for="title" >Биз ҳақимизда сарлавҳа</label>
                    <input class="form-control" id="title" name='title1' rows="3" value={welcome0.title1} onChange={handleChange}></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Матн қисми</label>
                    <input class="form-control" id="body" name='body1' rows="3" value={welcome0.body1} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/welcome/5fa8d36436479f31f8d6b5ec`} method='POST' >
                <h1>2</h1>
                <div class="form-group mb-3">
                    <label for="title" >Биз ҳақимизда сарлавҳа</label>
                    <input class="form-control" id="title" name='title1' rows="3" value={welcome1.title1} onChange={handleChange}></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Матн қисми</label>
                    <input class="form-control" id="body" name='body1' rows="3" value={welcome1.body1} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/welcome/5fa8d36c36479f31f8d6b5ed`} method='POST' >
                <h1>3</h1>
                <div class="form-group mb-3">
                    <label for="title" >Биз ҳақимизда сарлавҳа</label>
                    <input class="form-control" id="title" name='title1' rows="3" value={welcome2.title1} onChange={handleChange}></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Матн қисми</label>
                    <input class="form-control" id="body" name='body1' rows="3" value={welcome2.body1} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button><div style={{ borderBottom: '2px solid green', marginBottom: 50 }} />
            </form>


        </div>
    )
}

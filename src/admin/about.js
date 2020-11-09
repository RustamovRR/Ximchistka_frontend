import React, { useEffect, useState } from 'react'
import { GLOBAL } from './../GLOBAL';
import axios from 'axios'

export function AdminABout() {
    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend

    const [about, setAbout] = useState([])

    const handleChange = (e) => {
        setAbout(e.target.value)
    }

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/about`)
            setAbout(result.data)
        }
        fetchData()
    }, [])

    return (
        <div>
            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/api/about/5fa81e341f39c03a2c756fc5`} method='POST' >

                <h1>Биз ҳақимизда</h1>
                <div class="form-group mb-3">
                    <label for="title" >Биз ҳақимизда сарлавҳа</label>
                    <input class="form-control" id="title" name='title' rows="3" value={about.title} onChange={handleChange}></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Биз ҳақимизда матни</label>
                    <textarea class="form-control" id="body" name='body' rows="10" value={about.body} onChange={handleChange}></textarea>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Манзил</label>
                    <input class="form-control" id="body" name='address' rows="3" value={about.address} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Телефон 1</label>
                    <input class="form-control" id="body" name='phone1' rows="3" value={about.phone1} onChange={handleChange}></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Телефон 2</label>
                    <input class="form-control" id="body" name='phone2' rows="3" value={about.phone2} onChange={handleChange}></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Электрон почта</label>
                    <input class="form-control" id="body" name='email' rows="3" value={about.email} onChange={handleChange}></input>
                </div>

                <button type="submit" class="btn btn-primary mb-2">Ўзгаришларни сақлаш</button>
            </form>

        </div>
    )
}

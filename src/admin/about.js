import React from 'react'
import { GLOBAL } from './../GLOBAL';

export function AdminABout() {
    const localhost = GLOBAL.backend

    return (
        <div>
            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/about`} method='POST' >

                <div class="form-group mb-3">
                    <label for="title" >Матн сарлавҳаси</label>
                    <input class="form-control" id="title" name='uz[title]' rows="3"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Матн</label>
                    <input class="form-control" id="body" name='uz[body]' rows="3"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Матн</label>
                    <input class="form-control" id="body" name='uz[address]' rows="3"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="title" >Ru сарлавҳаси</label>
                    <input class="form-control" id="title" name='ru[title]' rows="3"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Ru body</label>
                    <input class="form-control" id="body" name='ru[body]' rows="3"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Ru address</label>
                    <input class="form-control" id="body" name='ru[address]' rows="3"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Phone</label>
                    <input class="form-control" id="body" name='phone' rows="3"></input>
                </div>
                <div class="form-group mb-3">
                    <label for="body" >Email</label>
                    <input class="form-control" id="body" name='email' rows="3"></input>
                </div>

                <div class="form-group">
                    <label for="image">Расм юклаш</label>
                    <input type="file" class="form-control-file" id="image" name='image' />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Пост қилиш</button>
            </form>
        </div>
    )
}

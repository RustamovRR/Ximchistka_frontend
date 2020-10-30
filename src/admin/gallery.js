import React from 'react'
import { GLOBAL } from './../GLOBAL';

export function AdminGallery() {
    const localhost = GLOBAL.backend

    return (
        <div>
            <h1>Галерея</h1>
            <form style={{ width: '80%', margin: '0 auto' }} action={`${localhost}/gallery`} method='POST' enctype="multipart/form-data">
                <div class="form-group m-5">
                    <label for="image">Галереяга расм қўшиш учун расм юкланг</label>
                    <input type="file" class="form-control-file" id="image" name='image' />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Расм юклаш</button>
            </form>
        </div>
    )
}

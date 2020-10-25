import React from 'react'

export function AdminGallery() {
    return (
        <div>
            <h1>Галерея</h1>
            <form style={{ width: '80%', margin: '0 auto' }} >
                <div class="form-group m-5">
                    <label for="image">Галереяга расм қўшиш учун расм юкланг</label>
                    <input type="file" class="form-control-file" id="image" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Расм юклаш</button>
            </form>
        </div>
    )
}

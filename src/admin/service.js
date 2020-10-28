import React from 'react'

export function AdminService() {
    return (
        <div>
            <h1>Хизматлар</h1>
            <form style={{ width: '80%', margin: '0 auto' }} action='http://localhost:4000/service' method='POST' enctype="multipart/form-data" class='form_service'>
                <div class="form-group">
                    <label for="image">Расм юклаш</label>
                    <input type="file" class="form-control-file" id="image" name='image' />
                </div>

                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <input class="form-control" id="title" name='uz[title]' rows="3"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="title" >Тип обслуживания</label>
                    <input class="form-control" id="title" name='ru[title]' rows="3"></input>
                </div>

                <div class="form-group mb-3">
                    <label for="body" >Нархи</label>
                    <input class="form-control" id="body" name='price' rows="3"></input>
                </div>

                <button type="submit" class="btn btn-primary mb-2">Пост қилиш</button>
            </form>
        </div>
    )
}

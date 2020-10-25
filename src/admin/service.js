import React from 'react'

export function AdminService() {
    return (
        <div>
            <h1>Хизматлар</h1>
            <form style={{ width: '80%', margin: '0 auto' }} >
                <div class="form-group">
                    <label for="image">Расм юклаш</label>
                    <input type="file" class="form-control-file" id="image" />
                </div>
                <div class="form-group mb-3">
                    <label for="title" >Хизмат тури</label>
                    <textarea class="form-control" id="title" rows="3"></textarea>
                </div>
                <div class="form-group mb-3">
                    <label for="price" >Хизмат нархи</label>
                    <textarea class="form-control" id="price" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary mb-2">Пост қилиш</button>
            </form>
        </div>
    )
}

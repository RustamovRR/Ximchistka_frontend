import React from 'react'

export function AdminABout({ item }) {
    return (
        <div>
            {
                // item.map((e) => (
                //     <p>{e.uz}</p>
                // ))
            }
            <form style={{ width: '80%', margin: '0 auto' }} >
                <div class="form-group mb-3">
                    <label for="title" >Матн сарлавҳаси</label>
                    <textarea class="form-control" id="title" rows="3"></textarea>
                    <input type="text" />
                </div>
                <div class="form-group mb-3">
                    <label for="text" >Матн</label>
                    <textarea class="form-control" id="text" rows="3"></textarea>
                </div>
                <div class="form-group">
                    <label for="image">Расм юклаш</label>
                    <input type="file" class="form-control-file" id="image" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Пост қилиш</button>
            </form>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import { GLOBAL } from './../GLOBAL';
import axios from 'axios'

export function AdminGallery() {
    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend
    
    const [image, setImage] = useState([])

    const handleSubmit = (index) => {
        index.preventDefault()

        fetch(`${localhost}/api/gallery`, {
            method: 'POST',
            body: new FormData(index.target)
        })
            .then((res) => {
                if (res.status === 200) {
                    alert('Rasm muvaffaqiyatli yuklandi')
                    res.redirected = window.location.href = `${frontend}/${admin_url}`
                } else {
                    return alert('Rasm yuklanmadi')
                    res.redirected = window.location.href = `${frontend}/${admin_url}`
                }
                console.log(res)
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/gallery`)
            setImage(result.data)
        }
        fetchData()
    }, [])


    return (
        <div>
            <h1>Галерея</h1>
            <form style={{ width: '80%', margin: '0 auto' }} onSubmit={handleSubmit} method='POST' enctype="multipart/form-data">
                <div class="form-group m-5">
                    <label for="image">Галереяга расм қўшиш учун расм юкланг</label>
                    <input type="file" class="form-control-file" id="image" name='image' />
                </div>
                <button type="submit" class="btn btn-primary mb-2" >Расм юклаш</button>
            </form>

            <div class="row no-gutters mt-5" >
                {
                    image.map((img) => (
                        <div class="col-lg-3 col-md-4">
                            <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                                <form method='POST' action={`${localhost}/api/gallery/${img._id}`}>
                                    <a href={`${localhost}/api/${img.image}`} target='_blank' class="venobox" data-gall="gallery-item">
                                        <img src={`${localhost}/api/${img.image}`} alt='ximchistka ximchistka24 uz' class="img-fluid" key={img._id} />
                                    </a>
                                    <button type='submit' class='btn btn-danger' > O'chirish </button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
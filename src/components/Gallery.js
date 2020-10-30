import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import './style.css'
import axios from 'axios'
import 'dotenv/config'
import { GLOBAL } from '../GLOBAL'


export function Gallery() {
    const { t } = useTranslation()
    const [image, setImage] = useState([])

    const localhost = GLOBAL.backend


    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/gallery`)
            setImage(result.data)
        }
        fetchData()
    }, [])


    return (
        <div id='gallery'>
            <section id="gallery" class="gallery">
                <div class="container">

                    <div class="section-title" data-aos="fade-up">
                        <h2>Галерея</h2>
                        <p> {t('galleries')} </p>
                    </div>

                    <div class="row no-gutters" data-aos="fade-left">
                        {
                            image.map((img) => (
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                                        <a href={`${localhost}/api/${img.image}`} target='_blank' class="venobox" data-gall="gallery-item">
                                            <img src={`${localhost}/api/${img.image}`} alt='galereya' class="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </section>
        </div>
    )
}

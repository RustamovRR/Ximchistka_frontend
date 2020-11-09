import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { GLOBAL } from '../GLOBAL'

import './style.css'
// import img from '../uploads/1603535756154.png'

export function About({ items, uzItem, ruItem }) {
    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend

    const { t } = useTranslation()
    const [about, setAbout] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/about`)
            setAbout(result.data)
        }
        fetchData()
    }, [])

    return (
        <div id='about'>
            <section id="about-video" class="about-video">
                <div class="container" data-aos="fade-up">

                    <div class="section-title" data-aos="fade-up">
                        <h2> {t("about_top")} </h2>
                        <p> {t("about_title")}  </p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
                            <img src='https://im0-tub-com.yandex.net/i?id=3b3da2f953b16f9344e9152e995736fb&n=13' class='img-fluid' alt="" style={{ minHeight: '50vh' }} />
                        </div>

                        <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3 class='mb-3'> {about.title}  </h3>
                            <p class="text-justify">
                                {about.body}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

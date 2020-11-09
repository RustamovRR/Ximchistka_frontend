import React, { useState, useEffect } from 'react'
import { useTranslation } from "react-i18next";
import axios from 'axios'
import { GLOBAL } from '../GLOBAL'

export function Contact() {
    const { t } = useTranslation()
    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend


    const [about, setAbout] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/about`)
            setAbout(result.data)
        }
        fetchData()
    }, [])

    return (
        <div id='contact'>
            <main id="main" >

                <div class="section-title contact" data-aos="fade-up">
                    <h2> {t('contact_top')} </h2>
                    <p> {t('contact_title')}  </p>
                </div>

            </main>

            <footer id="footer">

                <section id="contact" class="contact">
                    <div class="container">
                        <div class="row mt-5 mapbox">

                            <div class="col-lg-4">
                                <div class="info">
                                    <div class="address">
                                        <i class="icofont-google-map"></i>
                                        <h4> {t('address')} : </h4>
                                        <p>{about.address}</p>
                                    </div>

                                    <div class="email">
                                        <i class="icofont-envelope"></i>
                                        <h4>Электрон почта:</h4>
                                        <p>{about.email}</p>
                                    </div>

                                    <div class="phone">
                                        <i class="icofont-phone"></i>
                                        <h4>Телефон номер:</h4>
                                        <a href={`tel:${about.phone1}`}>{about.phone1}</a><br />
                                        <a href={`tel:${about.phone2}`} class='ml-5 mt-5'> {about.phone2}</a>
                                    </div>
                                    <div class='social_media'>
                                        <a href=""><i class="icofont-telegram"></i></a>
                                        <a href=""><i class="icofont-instagram"></i></a>
                                        <a href=""><i class="icofont-facebook"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div class="mapouter">
                                <div >
                                    <iframe class="gmap_canvas" id="gmap_canvas" src="https://maps.google.com/maps?q=toshkent%20shahar%20yunusobod%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </footer>

            <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
            <div id="preloader"></div>
        </div >
    )
}

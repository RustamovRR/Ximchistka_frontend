import React from 'react'
import { useTranslation } from 'react-i18next'

import './style.css'
// import img from '../uploads/1603535756154.png'

export function About({ items, uzItem, ruItem }) {
    const { t } = useTranslation()

    return (
        <div id='about'>
            <h1>{uzItem.address}</h1>
            <section id="about-video" class="about-video">
                <div class="container" data-aos="fade-up">

                    <div class="section-title" data-aos="fade-up">
                        <h2> {t("about_top")} </h2>
                        <p> {t("about_title")}  </p>
                    </div>

                    <div class="row">

                        <div class="col-lg-6 video-box align-self-baseline" data-aos="fade-right" data-aos-delay="100">
                            <img src={`../uploads/${items.image}`} class='img-fluid' alt="" style={{ minHeight: '50vh' }} />
                        </div>

                        <div class="col-lg-6 pt-3 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3 class='mb-3'> {t("about_theme")}  </h3>
                            <p class="text-justify">
                                {t("about_body1")}
                            </p>
                            <p class="text-justify">
                                {t("about_body2")}
                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

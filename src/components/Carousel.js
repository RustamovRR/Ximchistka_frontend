import React from 'react'
import { useTranslation } from 'react-i18next'

import slide1 from '../img/slide1.jpeg'
import slide2 from '../img/slide2.jpg'
import slide3 from '../img/slide3.jpg'
import './style.css'

export function Carousel() {
    const { t } = useTranslation()

    return (
        <div id='home'>
            <section id="hero">
                <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

                    <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

                    <div class="carousel-inner" role="listbox">


                        <div class="carousel-item active" style={{ backgroundImage: `url(${slide1})` }}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown"> {t("carousel_title")} </h2>
                                    <p class="animate__animated animate__fadeInUp slide_text">{t("carousel_body1")}</p>
                                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">{t("carousel_button")}</a>
                                </div>
                            </div>
                        </div>


                        <div class="carousel-item" style={{ backgroundImage: `url(${slide3})` }}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown"> {t("carousel_title")} </h2>
                                    <p class="animate__animated animate__fadeInUp slide_text"> {t("carousel_body2")} </p>
                                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">{t("carousel_button")}</a>
                                </div>
                            </div>
                        </div>


                        <div class="carousel-item" style={{ backgroundImage: `url(${slide2})` }}>
                            <div class="carousel-container">
                                <div class="container">
                                    <h2 class="animate__animated animate__fadeInDown"> {t("carousel_title")} </h2>
                                    <p class="animate__animated animate__fadeInUp slide_text"> {t("carousel_body3")} </p>
                                    <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">{t("carousel_button")}</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>

                    <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>

                </div>
            </section>
        </div>
    )
}

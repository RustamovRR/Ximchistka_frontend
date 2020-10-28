import React from 'react'
import { useTranslation } from 'react-i18next'

export function Contact() {
    const { t } = useTranslation()

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
                                        <p>Тошкент шаҳар Юнусобод тумани</p>
                                    </div>

                                    <div class="email">
                                        <i class="icofont-envelope"></i>
                                        <h4>Электрон почта:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                    <div class="phone">
                                        <i class="icofont-phone"></i>
                                        <h4>Телефон номер:</h4>
                                        <a href='tel:+998998032314'> +998 99 803 23 14</a><br />
                                        <a href='tel:+998903719371' class='ml-5 mt-5'> +998 90 371 93 71</a>
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
                                    <iframe class="gmap_canvas" id="gmap_canvas" src="https://maps.google.com/maps?q=yunusobod%20district&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                    </iframe><a href="https://2torrentz.net"></a></div>
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

import React from 'react'
import { useTranslation } from 'react-i18next'

import './style.css'
import img1 from '../img/gallery1.jpg'
import img2 from '../img/gallery2.jpg'
import img3 from '../img/gallery3.jpg'
import img4 from '../img/gallery4.jpg'
import img5 from '../img/gallery5.jpg'
import img6 from '../img/gallery6.jpg'
import img7 from '../img/gallery7.jpg'
import img8 from '../img/gallery8.jpg'
import img9 from '../img/gallery9.jpg'
import img10 from '../img/gallery10.jpg'
import img11 from '../img/gallery11.jpg'
import img12 from '../img/gallery12.jpg'
import img13 from '../img/gallery13.jpg'
import img14 from '../img/gallery14.jpg'
import img15 from '../img/gallery15.jpg'
import img16 from '../img/gallery16.jpg'

const imgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16]

export function Gallery() {
    const { t } = useTranslation()

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
                            imgArray.map((img) => (
                                <div class="col-lg-3 col-md-4">
                                    <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                                        <a href={img} target='_blank' class="venobox" data-gall="gallery-item">
                                            <img src={img} alt="" class="img-fluid" />
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

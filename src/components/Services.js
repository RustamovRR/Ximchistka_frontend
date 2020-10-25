import React from 'react'
import { useTranslation } from 'react-i18next'

import './style.css'
import service1 from '../img/service1.jpg'
import service2 from '../img/service2.jpg'
import service3 from '../img/service3.jpg'
import service4 from '../img/service4.jpg'
import service5 from '../img/service5.jpg'
import service6 from '../img/service6.jpg'
import service7 from '../img/service7.jpg'
import service8 from '../img/service8.jpg'
import service9 from '../img/service9.jpg'

export function Services() {
    const { t } = useTranslation()

    return (
        <div id='services'>
            <section id="team" class="team">
                <div class="container">

                    <div class="section-title" data-aos="fade-up">
                        <h2> {t('services_top')} </h2>
                        <p> {t('services_title')}  </p>
                    </div>


                    <div class="row" data-aos="fade-left">
                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={service1} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4> {t('card1')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  {t('area')}: 1 м<sup>2</sup>
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 8000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={service2} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>  {t('card2')}  <br /> {t('pickup')}  </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('area')}: 1 м<sup>2</sup>
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 7000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={service3} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{t('card3')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('amount')}: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 35 000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="row" data-aos="fade-left">
                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={service6} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{t('card4')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('area')}: 1 п/м
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 15 000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={service4} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{t('card5')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('amount')}: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 100 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={service7} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{t('card6')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('amount')}: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 10 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row" data-aos="fade-left">
                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="100">
                                <div class="pic"><img src={service8} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{t('card7')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('amount')}: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 25 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src={service5} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{t('card8')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('amount')}: 1
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 45 000 сумдан
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={service9} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{t('card9')} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {t('area')}: 1 м<sup>2</sup>
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {t('price')}: 8000 сум
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

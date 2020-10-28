import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

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

    const [service, setService] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let result = await axios('http://localhost:4000/service')
            setService(result.data[0])
        }
        fetchData()
    }, [])

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
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=9a7ee58fde0bed59c6f29a9b10dd754c&n=13' class="img-fluid" alt="" /></div>
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
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=30d86ec2d62cd600836149a4f7a8db8c&n=13' class="img-fluid" alt="" /></div>
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
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=d3df55c658b26948c8f7dc0ccf177479&n=13' class="img-fluid" alt="" /></div>
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
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=7bc31d3fdfe72be5e885be489d550a3f&n=13' class="img-fluid" alt="" /></div>
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
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=fc030999588e8830c05a4936f4ef7dc2&n=13' class="img-fluid" alt="" /></div>
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
                                <div class="pic"><img src='https://avatars.mds.yandex.net/get-altay/1881820/2a0000016af8fd97f553626031e80019dc28/XXL' class="img-fluid" alt="" /></div>
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
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=927a043d405eabca5842b3f28694f9a9&n=13' class="img-fluid" alt="" /></div>
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
                                <div class="pic"><img src='https://sta.hogsportstalk.com/wp-content/uploads/2017/05/Soft-Down-Blankets.jpg' class="img-fluid" alt="" /></div>
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

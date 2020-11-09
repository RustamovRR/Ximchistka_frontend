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
import 'dotenv/config'
import { GLOBAL } from '../GLOBAL'

export function Services() {
    const admin_url = GLOBAL.admin_url
    const localhost = GLOBAL.backend
    const frontend = GLOBAL.frontend

    const { t } = useTranslation()
    let [service0, setService0] = useState([])
    let [service1, setService1] = useState([])
    let [service2, setService2] = useState([])
    let [service3, setService3] = useState([])
    let [service4, setService4] = useState([])
    let [service5, setService5] = useState([])
    let [service6, setService6] = useState([])
    let [service7, setService7] = useState([])
    let [service8, setService8] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            let result = await axios(`${localhost}/api/service`)
            setService0(result.data[0])
            setService1(result.data[1])
            setService2(result.data[2])
            setService3(result.data[3])
            setService4(result.data[4])
            setService5(result.data[5])
            setService6(result.data[6])
            setService7(result.data[7])
            setService8(result.data[8])
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
                                    <h4> {service0.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i> {service0.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i> {service0.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=30d86ec2d62cd600836149a4f7a8db8c&n=13' class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>  {service1.title}</h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {service1.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {service1.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=d3df55c658b26948c8f7dc0ccf177479&n=13' class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{service2.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {service2.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {service2.price} сум
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
                                    <h4>{service3.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {service3.type}
                                            <i class="icofont-dollar"></i>  {service3.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src='https://im0-tub-com.yandex.net/i?id=fc030999588e8830c05a4936f4ef7dc2&n=13' class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{service4.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i> {service4.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {service4.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src='https://avatars.mds.yandex.net/get-altay/1881820/2a0000016af8fd97f553626031e80019dc28/XXL' class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{service5.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  {service5.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {service5.price}
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
                                    <h4>{service6.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  {service6.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {service6.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="200">
                                <div class="pic"><img src='https://sta.hogsportstalk.com/wp-content/uploads/2017/05/Soft-Down-Blankets.jpg' class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{service7.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>   {service7.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {service7.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 mt-4">
                            <div class="member" data-aos="zoom-in" data-aos-delay="300">
                                <div class="pic"><img src={service9} class="img-fluid" alt="" /></div>
                                <div class="member-info">
                                    <h4>{service8.title} </h4>
                                    <div class="social text-left ml-3">
                                        <span>
                                            <i class="icofont-expand mr-2"></i>  {service8.type}
                                        </span>
                                        <span>
                                            <i class="icofont-dollar"></i>  {service8.price}
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

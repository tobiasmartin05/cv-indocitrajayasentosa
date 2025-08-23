import React from "react";
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import heroslider1 from '../../images/slider/slider-1.png';
import heroslider2 from '../../images/slider/slider-2.png';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero4 = () => {

    return (
        <section className="wpo-hero-slider wpo-hero-style-2">
            <Swiper

                modules={[Navigation, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${heroslider1})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>Trusted <span>Partner </span>in Industrial Automation Solutions.</h2>
                                </div>
                                <div className="slide-title-sub">
                                    <p>Providing reliable automation, electrical, and control system solutions to optimize industrial performance.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${heroslider2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>Providing <span>Innovative</span> Industrial Automation Solutions.</h2>
                                </div>
                                <div className="slide-title-sub">
                                    <p>Delivering efficient, reliable, and sustainable automation systems to support the growth and success of your business.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div className="slide-btns">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn">Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}
export default Hero4;
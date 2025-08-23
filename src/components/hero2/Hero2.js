import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/slide-12.jpg'
import hero2 from '../../images/slider/slide-11.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const Hero = () => {
    return (

        <section className="wpo-hero-slider wpo-hero-style-1">
            <Swiper
               
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero1})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div  className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div  className="slide-title-sub">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, justo,
                                        habitant.</p>
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
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero2})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div  className="slide-title">
                                    <h2>To <span>industry</span>, nothing is impossible.</h2>
                                </div>
                                <div className="slide-title-sub">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum, justo,
                                        habitant.</p>
                                </div>
                                <div className="clearfix"></div>
                                <div  className="slide-btns">
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

export default Hero;



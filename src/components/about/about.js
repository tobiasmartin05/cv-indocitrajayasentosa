import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../SectionTitle/SectionTitle'
import abImg1 from '../../images/about/1.jpg'
import abImg2 from '../../images/about/2.jpg'
import abImg3 from '../../images/about/3.jpg'
import Signeture from '../../images/signeture.png'
import Shape1 from '../../images/about/about-shape-1.png'
import Shape2 from '../../images/about/about-shape-2.png'



const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 order-lg-1 order-2">
                        <div className="wpo-about-left">
                            <div className="wpo-about-img-1">
                                <img src={abImg1} alt="" />
                            </div>
                            <div className="wpo-about-img-2">
                                <img src={abImg2} alt="" />
                            </div>
                            <div className="wpo-about-img-3">
                                <img src={abImg3} alt="" />
                            </div>
                            <div className="wpo-about-left-text">
                                <span>“Lorem Ipsum has been the industry's and standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled.”</span>
                                <div className="text-item">
                                    <img src={Signeture} alt="" />
                                    <i className="fi flaticon-quotation"></i>
                                </div>
                            </div>
                            <div className="shape-1">
                                <img src={Shape1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-lg-2 order-1">
                        <div className="wpo-about-right">
                            <SectionTitle subtitle='ABOUT BUNSO' title='We are industrial solution providing company.' paragarap='It has survived not only five centuries, but also the leap into electronic
                                    typesetting,
                                    remaining essentially unchanged. It was popularised the release containing.'/>
                            <div className="text">
                                <span className="text-1">It has survived only five centuries but also leap into
                                    electronic.</span>
                                <span className="text-1">It has survived only five centuries but also leap into
                                    electronic.</span>
                            </div>
                            <Link onClick={ClickHandler} to="/about" className="theme-btn">About Us<i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-2">
                <img src={Shape2} alt="" />
            </div>
        </section>
    )
}

export default About;




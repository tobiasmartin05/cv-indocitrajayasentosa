import React from "react";
import { Link } from 'react-router-dom'
import titleShape from '../../images/slider/title-shape.svg'
import shape3 from '../../images/slider/shape-3.png'
import hero1 from '../../images/slider/1.jpg'
import Teams from "../../api/teams";



const Hero = () => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="static-hero">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="static-inner-shape">
                                        <i className="fi flaticon-right-arrow-1"></i>
                                    </div>
                                    <h2 className="title">Get
                                        Industrial
                                        S<span>o</span>luti<span>o</span>n.</h2>
                                    <div className="title-shape">
                                        <img src={titleShape} alt="" />
                                    </div>
                                    <p className="sub-title">Lorem Ipsum has been the industry's standard text since the
                                        printer took galley
                                        make.</p>
                                    <Link to="about" onClick={ClickHandler} className="theme-btn">Get Started <i
                                        className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="wpo-hero-right">
                                    <div className="static-hero-img-inner">
                                        <img src={hero1} alt="" />
                                    </div>
                                    <div className="wpo-right-text">
                                        <div className="p-text">
                                            <h3><span>28</span>+</h3>
                                            <div className="line"></div>
                                            <p>Years of
                                                experience
                                                on industry
                                                solution.</p>
                                        </div>
                                    </div>
                                    <div className="wpo-hero-team">
                                        <div className="wpo-team-text">
                                            <h2>Team
                                                Member</h2>
                                        </div>
                                        <div className="wpo-team-content">
                                            {Teams.slice(0, 4).map((member, index) => (
                                                <div className="wpo-team-item" key={index}>
                                                    <div className="image">
                                                        <img src={member.himg} alt="" />
                                                        <div className="team-link">
                                                            <Link to={`/team-single/${member.slug}`}><i className="ti-plus"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-3">
                <img src={shape3} alt="" />
            </div>
        </section>
    )
}

export default Hero;
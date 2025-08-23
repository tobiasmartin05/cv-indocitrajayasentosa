import React, { Fragment } from 'react';
import Slider from 'react-slick';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { Link, useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Projects from '../../api/projects';
import Contact from '../ServiceSinglePage/contact';

import Simg1 from "../../images/project-single/2.jpg"
import Simg2 from "../../images/project-single/3.jpg"

import Ssilde1 from "../..//images/project-single/1.jpg"
import Ssilde2 from "../..//images/project-single/4.jpg"
import Logo from '../../images/logo-2_NoBg.svg'


const ProjectSinglePage = (props) => {
    const { slug } = useParams()

    const ProjectSingle = Projects.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: false,
                    dots: true,
                },
            }

        ],
    };
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={ProjectSingle.title} pagesub={'Project'} />
            <section className="wpo-project-single-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="wpo-project-single-wrap">
                                <div className="wpo-project-single-item">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7">
                                            <div className="wpo-project-single-title">
                                                <h3>{ProjectSingle.title}</h3>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere
                                                amet
                                                tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum
                                                cursus
                                                velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit
                                                dictum
                                                quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id
                                                aliquet duis.</p>
                                            <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat
                                                odio
                                                facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra
                                                est, at
                                                rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit
                                                sit Et nisi in libero facilisis sed est.</p>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="wpo-project-single-content-des-right">
                                                <ul>
                                                    <li>Location :<span>{ProjectSingle.location}</span></li>
                                                    <li>Client :<span>wpOceans</span></li>
                                                    <li>Architect :<span>{ProjectSingle.architect}</span></li>
                                                    <li>Project Type :<span>{ProjectSingle.type}</span></li>
                                                    <li>Duration :<span>{ProjectSingle.duration}</span></li>
                                                    <li>Completion :<span>15 Dec 2024</span></li>
                                                    <li>Share :<span>Industrial, Business</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-main-img">
                                        <Slider {...settings}>
                                            <img src={Ssilde1} alt="img" />
                                            <img src={Ssilde2} alt="img" />
                                            <img src={Ssilde1} alt="img" />
                                        </Slider>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-title">
                                                <h3>Our Strategies</h3>
                                            </div>
                                            <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum
                                                quam. Id
                                                risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                                sollicitudin diam.</p>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                                <li>Elit curabitur amet risus bibendum.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-item-quote">
                                                <p>"Amazing looking theme and instantly turns your application into a great
                                                    looking one. Really shows that pro_ fessionals built this theme up. Very
                                                    happy with the way the theme looks ."</p>
                                                <span>Robert - <span>Yellow Theme</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p>
                                </div>
                                <div className="wpo-project-single-gallery">
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={Simg1} alt="img" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={Simg2} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item list-widget">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="wpo-project-single-title">
                                                <h3>Resieved goals</h3>
                                            </div>
                                            <ul>
                                                <li>Non saed velit dictum quam risus pharetra esta.</li>
                                                <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                                <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                                <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 list-widget-s">
                                            <div className="wpo-project-single-title">
                                                <h3>Results</h3>
                                            </div>
                                            <ul>
                                                <li>Mauris dignissim blandit cursus imperdiet accumsan lorem.</li>
                                                <li>Nam id in non sed cras purus nunc et.</li>
                                                <li>Mauris orci, cursus nisl odio est adipiscing gravida magna eget.</li>
                                                <li>Quis mauris vel felis convallis nulla dignissim.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-project-single-item">
                                    <div className="wpo-project-single-title">
                                        <h3>Related Projects</h3>
                                    </div>
                                    <div className="wpo-project-area-s2 single">
                                        <div className="row align-items-center">
                                            <div className="wpo-project-wrap">
                                                <div className="row">
                                                    {Projects.slice(0, 3).map((project, i) => (
                                                        <div className="col-lg-4 col-md-6 col-12" key={i}>
                                                            <div className="grid">
                                                                <div className="images">
                                                                    <img src={project.pimg1} alt="img" />
                                                                </div>
                                                                <div className="text">
                                                                    <span>{project.subtitle}</span>
                                                                    <h2>{project.title}</h2>
                                                                    <Link onClick={ClickHandler} to={`/project-single/${project.slug}`} className="theme-btn"><i
                                                                        className="ti-arrow-right"></i></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wpo-project-single-item">
                                        <div className="wpo-project-contact-area">
                                            <div className="wpo-contact-title">
                                                <h2>Have project in mind? Let's discuss</h2>
                                                <p>Get in touch with us to see how we can help you with your project</p>
                                            </div>
                                            <div className="wpo-contact-form-area">
                                                <Contact />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectSinglePage;



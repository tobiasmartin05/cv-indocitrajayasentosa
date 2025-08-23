import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/testi-1.png'
import ts2 from '../../images/testimonial/testi-2.png'
import ts3 from '../../images/testimonial/testi-3.png'
import quote from '../../images/testimonial/quote.svg'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Title: 'John Doe',
        Sub: "President Of Anonymous",
    },
    {
        id: '02',
        tImg: ts2,
        Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Title: 'Alex Poor',
        Sub: "President Of Anonymous",
    },
    {
        id: '03',
        tImg: ts3,
        Des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        Title: 'Johny Fritz',
        Sub: "President Of Anonymous",
    }
]

const Testimonial = (props) => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: true,

            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false,
            }
        },
    ]
    };


    return (
        <section className="testimonial-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-12">
                        <div className="section-title">
                            <h2>Testimonial</h2>
                            <h3>What Our Donor Says</h3>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider">
                    <Slider {...settings}>
                        {
                            testimonial.map((tesmnl, tsm) => (
                                <div className="testimonial-card" key={tsm}>
                                    <div className="top-content">
                                        <div className="image">
                                            <img src={tesmnl.tImg} alt="" />
                                        </div>
                                        <div className="title">
                                            <h2>{tesmnl.Title}</h2>
                                            <span>{tesmnl.Sub}</span>
                                        </div>
                                    </div>
                                    <p className="text">
                                        “{tesmnl.Des}”
                                    </p>

                                    <div className="icon">
                                        <img src={quote} alt="icon" />
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../../api/Services";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
    const settings = {
        dots: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            {
                breakpoint: 991,
                settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false, dots: true }
            },
            {
                breakpoint: 767,
                settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
            }
        ]
    };

    return (
        < section className="wpo-service-section pt-4 pt-md-5 pb-5" >
            <div className="container">
                <div className="row justify-content-center">
                    {/* kecilkan jarak judul -> slider tanpa ubah CSS global */}
                    <div className="col col-lg-8 col-12" style={{ marginBottom: 12 }}>
                        <SectionTitle
                            title="Our Services for Industrial Excellence"
                            subtitle="Our Services"
                        />
                    </div>
                </div>

                <div className="wpo-service-wrap" style={{ marginTop: -8 }}>
                    <div className="wpo-service-slider">
                        <Slider {...settings}>
                            {Services.map((item, i) => (
                                <ServiceCard
                                    key={i}
                                    title={item.title}
                                    img={item.sImg}
                                    slug={item.slug}
                                    sdescription={item.description}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default ServiceSection;

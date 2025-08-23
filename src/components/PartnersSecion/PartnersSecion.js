import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import patn1 from '../../images/partners/partner-1.png'
import patn2 from '../../images/partners/partner-2.png'
import patn3 from '../../images/partners/partner-3.png'
import patn4 from '../../images/partners/partner-4.png'
import patn5 from '../../images/partners/partner-5.png'
import patn6 from '../../images/partners/partner-6.png'
import patn7 from '../../images/partners/partner-7.png'
import patn8 from '../../images/partners/partner-8.png'
import patn9 from '../../images/partners/partner-9.png'
import patn10 from '../../images/partners/partner-10.png'
import patn11 from '../../images/partners/partner-11.png'
import patn12 from '../../images/partners/partner-12.png'
import patn13 from '../../images/partners/partner-13.png'
import patn14 from '../../images/partners/partner-14.png'

const partnerData = [
    { id: 1, img: patn1 }, { id: 2, img: patn2 }, { id: 3, img: patn3 },
    { id: 4, img: patn4 }, { id: 5, img: patn5 }, { id: 6, img: patn6 },
    { id: 7, img: patn7 }, { id: 8, img: patn8 }, { id: 9, img: patn9 },
    { id: 10, img: patn10 }, { id: 11, img: patn11 }, { id: 12, img: patn12 },
    { id: 13, img: patn13 }, { id: 14, img: patn14 },
];

const PartnersSection = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 5000,           // durasi geser (semakin besar semakin lambat)
        autoplaySpeed: 0,      // 0 = langsung geser tanpa delay
        cssEase: "linear",     // supaya jalan konstan (bukan geser-geser putus)
        slidesToShow: 6,       // jumlah logo ditampilkan sekaligus (desktop)
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ],
    };

    return (
        <section className="wpo-partners-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-12">
                        <SectionTitle title='Our Supported Brand' subtitle='Our Supported Brand' />
                    </div>
                </div>
                {/* <h2 className="partners-title text-center">Our Supported Brand</h2> */}
                <Slider {...settings}>
                    {partnerData.map(p => (
                        <div className="partner-logo" key={p.id}>
                            <img src={p.img} alt={`partner-${p.id}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PartnersSection;

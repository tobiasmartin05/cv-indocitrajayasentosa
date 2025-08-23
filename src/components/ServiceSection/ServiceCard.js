import React from "react";
import { Link } from 'react-router-dom';

const ServiceCard = ({ img, title, sdescription, slug }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <div className="grid">
            <div className="wpo-service-item">
                {/* Bagian gambar */}
                <div className="wpo-service-image">
                    <img src={img} alt={title} />
                </div>

                {/* Bagian konten biru */}
                <div className="wpo-service-content service-blue">
                    <div className="service-content-single">
                        <h2>{title}</h2>
                        <span>{sdescription}</span>
                    </div>

                    <Link 
                        onClick={ClickHandler} 
                        to={`/service-single/${slug}`} 
                        className="theme-btn-s2"
                    >
                        Details <i className="ti-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;

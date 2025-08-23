import React from "react";
import { Link } from "react-router-dom";

const CtaSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return(
        <section className="wpo-cta-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-12 col-12">
                        <div className="wpo-cta-text">
                            <h2>Your    
                                <span className="cta-text-bg"> partner</span>
                                for
                                <span className="cta-text-bg"> trusted</span>
                                Industrial Services.
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-12">
                        <div className="wpo-cta-btn">
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Get Started<i className="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection;
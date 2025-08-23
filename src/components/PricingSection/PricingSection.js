import { Link } from "react-router-dom";

import Pricin from "../../api/Pricing"

const PricingSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0)
    }
    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="wpo-section-title">
                        <span>Pricing Plan</span>
                        <h2>Choose Your Optimal Plan</h2>
                        <div className="invisible-text">
                            <h2>Pricing Plan</h2>
                        </div>
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        {Pricin.map((pris, pitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={pitem}>
                                <div className="wpo-pricing-item">
                                    <div className="wpo-pricing-top">
                                        <div className="pricing-thumb">
                                            <span>{pris.type}</span>
                                        </div>
                                        <div className="wpo-pricing-text">
                                            <h2>{pris.price}<span>/per m²</span></h2>
                                            <p>{pris.description}</p>
                                        </div>
                                    </div>
                                    <div className="wpo-pricing-bottom">
                                        <div className="wpo-pricing-bottom-text">
                                            <ul>
                                                <li>General living space advices</li>
                                                <li>Interior design advices</li>
                                                <li>Complete home redesign</li>
                                                <li>Modern interior planning</li>
                                                <li>Kitchen design</li>
                                            </ul>
                                            <Link onClick={ClickHandler} to="/" className="theme-btn">CHOOSE PLAN</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
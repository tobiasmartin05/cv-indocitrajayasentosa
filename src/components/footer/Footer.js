import React from 'react';
import { Link } from 'react-router-dom';

import Services from '../../api/Services';
import footerBg from '../../images/footer.png';
import Shape1 from '../../images/sappot-shape.svg';

const ClickHandler = () => window.scrollTo(10, 0);

// WA harus MSISDN (tanpa 0/+)
const WA_MSISDN = '6281909338354';
const WA_URL = `https://wa.me/${WA_MSISDN}`;

const Footer = () => {
    return (
        <footer className="wpo-site-footer">
            <div className="footer-bg">
                <img src={footerBg} alt="footer-bg" />
            </div>

            {/* ===== Support strip ===== */}
            <div className="wpo-support-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center gy-3">
                        <div className="col-lg-4 text-center text-lg-start">
                            <div className="wpo-support-title">
                                <h2>Ready to industrial support.</h2>
                            </div>
                        </div>

                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="wpo-support-icon">
                                <a
                                    href={WA_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="support"
                                    aria-label="Chat WhatsApp"
                                >
                                    <div className="shape">
                                        <i className="fi flaticon-phone-call-1" />
                                    </div>
                                </a>
                                <div className="shape-1">
                                    <img src={Shape1} alt="Shape1" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 text-center text-lg-end">
                            <div className="wpo-support-number">
                                <span>Call Us Today:</span>
                                <p className="mb-0 fw-bold" style={{ fontSize: 28, color: '#fff' }}>
                                    +62 819 0945 8464
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-upper-footer pb-4 pb-lg-5">
                <div className="container">
                    <div className="row gy-4">
                        {/* Services */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>All Services:</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 6).map((service, sitem) => (
                                        <li key={sitem}>
                                            <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>
                                                <i className="ti-angle-right"></i>
                                                {service.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col-12 col-md-6 col-lg-5">
                            <div className="widget contact-widget">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                                <div className="widget-title">
                                    <h3>Contact Us:</h3>
                                </div>
                                <ul className="mb-0">
                                    <li>Call: +62 812 3546 4274</li>
                                    <li>E-mail: Indocitra.tech@gmail.com</li>
                                    <li>Website: www.indocitrajayasentosa.com</li>
                                </ul>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="col-12 col-lg-4">
                            <div className="widget map-widget">
                                <div className="widget-title">
                                    <h3>Find Us:</h3>
                                </div>
                                <div className="wpo-map-embed">
                                    <iframe
                                        title="Indo Citra Jaya Sentosa map"
                                        src="https://www.google.com/maps?q=Indo%20Citra%20Jaya%20Sentosa,%20Wonokoyo,%20Beji,%20Pasuruan,%20Jawa%20Timur&z=16&output=embed"
                                        width="100%"
                                        height="300"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer pt-3 pb-4 mt-0">
                <div className="container">
                    <div className="row align-items-center gy-3">
                        <div className="col-12 col-lg-6 text-center text-lg-start">
                            <p className="copyright mb-0">
                                Copyright &copy; 2025 <span className="fw-bold">CV INDO CITRA JAYA SENTOSA</span> by{' '}
                                <Link onClick={ClickHandler} to="/" className="text-decoration-underline">
                                    tobicode
                                </Link>. All Rights Reserved.
                            </p>
                        </div>

                        <div className="col-12 col-lg-6">
                            <div className="d-flex justify-content-center justify-content-lg-end gap-3">
                                <Link to="/" onClick={ClickHandler} className="d-inline-block">
                                    <i className="ti-facebook"></i>
                                </Link>
                                <Link to="/" onClick={ClickHandler} className="d-inline-block">
                                    <i className="ti-twitter-alt"></i>
                                </Link>
                                <Link to="/" onClick={ClickHandler} className="d-inline-block">
                                    <i className="ti-instagram"></i>
                                </Link>
                                <Link to="/" onClick={ClickHandler} className="d-inline-block">
                                    <i className="ti-google"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

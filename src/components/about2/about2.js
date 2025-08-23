// About2.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import About from "../../images/about/about.png"

const About2 = () => {
    const ClickHandler = () => window.scrollTo(10, 0);

    return (
        // kurangi padding bawah: pb-4 (atau pb-3), padding atas tetap enak: pt-5
        <section className="wpo-about-section-s2 pt-5 pb-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={About} alt="" />
                            <div className="images-text">
                                <h3>11 Years Of Experience</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="wpo-section-title">
                                {/* kecilkan “About Our Company” */}
                                <span style={{ fontSize: 14, padding: '8px 16px', letterSpacing: '0.12em' }}>
                                    ABOUT OUR COMPANY
                                </span>
                                {/* kalau ingin judul utama juga sedikit lebih kecil, aktifkan clamp ini */}
                                <h2 style={{ fontSize: 'clamp(22px, 3.2vw, 38px)', lineHeight: 1.25, marginTop: 14 }}>
                                    Experts in Industrial Automation & Services
                                </h2>
                            </div>

                            <div className="wpo-about-text">
                                <p>
                                    We deliver reliable automation, machinery, and maintenance solutions to enhance efficiency,
                                    safety, and productivity across your operations.
                                </p>
                                <ul>
                                    <li>Precise automation & control for process optimization</li>
                                    <li>Quality supply of machinery, racking, and forklifts</li>
                                    <li>Fast maintenance services to minimize downtime</li>
                                </ul>
                                <Link onClick={ClickHandler} className="theme-btn color-9" to="/about">
                                    Discover More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2

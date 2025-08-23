import React from 'react'
import Services from '../../api/Services';
import { Link } from 'react-router-dom'
import ins1 from '../../images/instragram/7.jpg'
import ins2 from '../../images/instragram/8.jpg'
import ins3 from '../../images/instragram/9.jpg'
import ins4 from '../../images/instragram/10.jpg'
import ins5 from '../../images/instragram/11.jpg'
import ins6 from '../../images/instragram/12.jpg'

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Services</h3>
                    <ul>
                        {Services.slice(0, 6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="wpo-newsletter-widget widget">
                    <h3>Newsletter</h3>
                    <p>Join 20,000 Sabscribers!</p>
                    <form className="form" onSubmit={SubmitHandler}>
                        <input type="text" placeholder="Email Address" />
                        <button type="submit">Sign Up</button>
                    </form>
                    <span>By signing up you agree to our <Link to="/contact">Privecy Policy</Link></span>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Instagram</h3>
                    </div>
                    <ul className="d-flex">
                        <li><img src={ins1} alt="instragram" /></li>
                        <li><img src={ins2} alt="instragram" /></li>
                        <li><img src={ins3} alt="instragram" /></li>
                        <li><img src={ins4} alt="instragram" /></li>
                        <li><img src={ins5} alt="instragram" /></li>
                        <li><img src={ins6} alt="instragram" /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;


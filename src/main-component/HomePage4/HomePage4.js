import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero4 from '../../components/Hero4/Hero4';
import About2 from '../../components/about2/about2';
import Partner from '../../components/PartnersSecion/PartnersSecion'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import TestimonialSection from '../../components/TestimonialSection/TestimonialSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo2 from '../../images/logo-3_NoBg.svg'

const HomePage4 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo2}  />
            <Hero4 />
            <About2 />
            <ServiceSection/>
            <CtaSection />
            <ProjectSection />
            <Partner />
            <TestimonialSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage4;
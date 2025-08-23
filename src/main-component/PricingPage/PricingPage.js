import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import PricingSection from '../../components/PricingSection/PricingSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo_NoBg.svg'
const PricingPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'} />
            <PricingSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PricingPage;

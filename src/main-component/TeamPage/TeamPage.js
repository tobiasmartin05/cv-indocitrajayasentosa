import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSection from '../../components/TeamSection/TeamSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo_NoBg.svg'
const TeamPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Team'} pagesub={'Team'} />
            <TeamSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;

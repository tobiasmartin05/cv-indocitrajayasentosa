import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo_NoBg.svg'
const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Project'} pagesub={'Project'} />
            <ProjectSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;

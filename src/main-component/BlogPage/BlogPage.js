import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from "../../images/logo_NoBg.svg"

const BlogPage =() => {
    return(
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList/>
            <Footer />
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPage;


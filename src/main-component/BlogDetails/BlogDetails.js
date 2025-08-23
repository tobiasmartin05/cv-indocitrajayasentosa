import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo-2_NoBg.svg'

const BlogDetails = () => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <BlogSingle />
            <Footer ftClass={'s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;

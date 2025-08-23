import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Teams from '../../api/teams';
import TeamContactForm from './TeamContact';

import Logo from '../../images/logo-2_NoBg.svg'

const TeamSinglePage = (props) => {

    const { slug } = useParams()

    const TeamDetails = Teams.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={TeamDetails.title} pagesub={'Team'} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="team-info-img">
                                    <img src={TeamDetails.img} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-info-text">
                                    <h2>{TeamDetails.title}</h2>
                                    <ul>
                                        <li>Position: <span>{TeamDetails.subtitle}</span></li>
                                        <li>Planner Service:<span>{TeamDetails.service}</span></li>
                                        <li>Experience:<span>{TeamDetails.exp}</span></li>
                                        <li>Address:<span>{TeamDetails.add}</span></li>
                                        <li>Phone:<span>{TeamDetails.phone}</span></li>
                                        <li>Email:<span>{TeamDetails.email}</span></li>
                                        <li>Fax:<span>{TeamDetails.fax}</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Personal Experience</h2>
                                    <p>The purpose of lorem ipsum is to create a natural looking block oftext (sentence, paragraph, page, etc.) that doesn't distract from thelayout. A practice not without controversy, laying out pages withmeaningless filler text can be very useful when the focus is meantto be on design, not content.There are many variations of passages of Lorem Ipsum available.</p>
                                    <p>But the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text generators on the Internet tend to repeat.</p>
                                </div>
                                <div className="education-area ex-wiget">
                                    <h2>Education</h2>
                                    <ul>
                                        <li>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</li>
                                        <li>If you are going to use a passage of Lorem Ipsum.</li>
                                        <li>Very popular during the Renaissance. </li>
                                        <li>Many desktop publishing packages and web page editors now.</li>
                                    </ul>
                                </div>
                                <div className="language-area ex-wiget">
                                    <h2>Language</h2>
                                    <ul>
                                        <li>French(fluent), English (fluent), Greek , chinese.</li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-area ex-wiget">
                                    <h2>Contact Me</h2>
                                    <div className="quote-form">
                                        <TeamContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamSinglePage;

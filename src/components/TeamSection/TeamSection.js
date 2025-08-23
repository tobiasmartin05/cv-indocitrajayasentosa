import React from "react";
import Team from '../../api/teams'
import SectionTitle from "../SectionTitle/SectionTitle";
import Shape1 from '../../images/team/shape.png'
import TeamCard from "./TeamCard";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const TeamSection = (props) => {
    return (
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-8 col-12">
                        <SectionTitle subtitle='TEAM MEMBER' title='Exploring Team Members' />
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.slice(0, 4).map((team, Titem) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={Titem}>
                                <TeamCard Ttitle={team.title} Tsubtitle={team.subtitle} Tslug={team.slug} Timg={team.img}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="shape-1">
                <img src={Shape1} alt="" />
            </div>
            <ul className="boll-shape">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </section>
    );
}

export default TeamSection;


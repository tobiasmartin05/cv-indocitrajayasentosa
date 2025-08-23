import React from "react";
import { Link } from "react-router-dom"



const TeamCard = ({ Timg, Ttitle, Tsubtitle, Tslug }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return(
        <div className="wpo-team-grid">
            <div className="images">
                <img src={Timg} alt="team" />
                <div className="team-grid-content">
                    <div className="team-text">
                        <h2><Link onClick={ClickHandler} to={`/team-single/${Tslug}`}>{Ttitle}</Link></h2>
                        <span>{Tsubtitle}</span>
                    </div>
                    <ul className="team-social-media">
                        <li><Link to="/"><i className="fi flaticon-facebook-app-symbol"></i></Link></li>
                        <li><Link to="/" className="active"><i className="fi flaticon-linkedin"></i></Link></li>
                        <li><Link to="/"><i className="fi flaticon-twitter"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default TeamCard
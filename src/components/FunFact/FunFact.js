import React from 'react'
import CountUp from 'react-countup';

const FunFact = (props) => {
    return (
        <section className="wpo-fun-fact-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="wpo-fun-fact-grids clearfix">
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={200} enableScrollSpy /></span>+</h3>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={35} enableScrollSpy /></span></h3>
                                    <p>Team Member</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={321} enableScrollSpy /></span>+</h3>
                                    <p>Successful Project</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="info">
                                    <h3><span><CountUp end={210} enableScrollSpy /></span>+</h3>
                                    <p>5 Star Rating</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FunFact;





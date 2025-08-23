import { useState, useMemo } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Projects from "../../api/projects";


const ProjectSection = () => {
    const ClickHandlar = () => window.scrollTo(10, 0);

    // base settings (akan dipakai sebagai template)
    const baseSettings = {
        dots: false,
        arrows: true,
        infinite: true,         // akan dioverride jadi dinamis
        speed: 500,
        slidesToShow: 3,        // akan dioverride jadi dinamis
        slidesToScroll: 1,
    };

    const [openTab, setOpenTab] = useState("storage");

    // kelompokkan data
    const storageList = useMemo(() => Projects.filter(p => p.category === "storage"), []);
    const automationList = useMemo(() => Projects.filter(p => p.category === "automation"), []);
    const machineryList = useMemo(() => Projects.filter(p => p.category === "machinery"), []);

    // batasi jumlah jika diinginkan
    const storage = storageList.slice(0, 3);
    const automation = automationList.slice(0, 5);
    const machinery = machineryList.slice(0, 3);

    // bikin settings dinamis berdasar panjang list
    const makeSettings = (len) => {
        const showLg = Math.min(3, len); // desktop
        const showMd = Math.min(2, len); // <= 991px
        const showSm = Math.min(1, len); // <= 767px / 575px

        return {
            ...baseSettings,
            slidesToShow: showLg,
            infinite: len > showLg,
            arrows: len > 1,
            responsive: [
                { breakpoint: 991, settings: { slidesToShow: showMd, slidesToScroll: 1, arrows: len > 1, dots: len > showMd } },
                { breakpoint: 767, settings: { slidesToShow: showSm, slidesToScroll: 1, arrows: false, dots: len > showSm } },
                { breakpoint: 575, settings: { slidesToShow: showSm, slidesToScroll: 1, arrows: false, dots: len > showSm } },
            ],
        };
    };

    const renderSlider = (list) => {
        if (!list.length) {
            return (
                <div className="wpo-engeneer-slider">
                    <div className="text-center py-5">No projects yet.</div>
                </div>
            );
        }

        return (
            <div className="wpo-engeneer-slider">
                <Slider {...makeSettings(list.length)}>
                    {list.map((project) => (
                        <div className="grid" key={project.id}>
                            <div className="images">
                                <img src={project.pimg1} alt={project.title} />
                            </div>
                            <div className="text">
                                <span>{project.subtitle}</span>
                                <h2>{project.title}</h2>
                                <Link onClick={ClickHandlar} to={`/project-single/${project.slug}`} className="theme-btn">
                                    <i className="ti-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    };

    return (
        <section className="wpo-project-section section-padding">
            <div className="container">
                <div className="row justify-content-start">
                    <div className="col col-lg-6 col-12">
                        <SectionTitle subtitle="WHAT WE DO" title="Complete Projects" />
                    </div>
                </div>

                <div className="wpo-project-wrap">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="wpo-project-item">
                                <ul className="nav">
                                    <li className="nav-item">
                                        <button
                                            onClick={() => setOpenTab("storage")}
                                            className={`nav-links ${openTab === "storage" ? "active" : ""}`}
                                        >
                                            Storage & Handling
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => setOpenTab("automation")}
                                            className={`nav-links ${openTab === "automation" ? "active" : ""}`}
                                        >
                                            Electrical & Automation
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            onClick={() => setOpenTab("machinery")}
                                            className={`nav-links ${openTab === "machinery" ? "active" : ""}`}
                                        >
                                            Production Machinery
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wpo-project-content">
                <div className="container-fluid">
                    {openTab === "storage" && renderSlider(storage)}
                    {openTab === "automation" && renderSlider(automation)}
                    {openTab === "machinery" && renderSlider(machinery)}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;

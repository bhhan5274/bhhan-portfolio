import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import removeDayFromDate from "../../utils/removeDayFromDate";

const CustomSlide = ({id, images, member, timeRange, title, mode}) => {
    return (
        <Link className={"projects-info__item " + (mode === true ? "" : "dark")} to={`/projects/${id}`}>
            <div className="projects-info__image-box">
                <img className="projects-info__image" src={images[0].path} alt="image"/>
            </div>
            <div className="projects-info__content">
                <div className={"projects-info__title " + (mode === true ? "" : "dark")}>
                    <p>{title}</p>
                </div>
                <div className="projects-info__detail">
                    <span className={"projects-info__period " + (mode === true ? "" : "dark")}>
                        <i className="fas fa-calendar" />
                        &nbsp;&nbsp;{removeDayFromDate(timeRange.startDate)} ~ {removeDayFromDate(timeRange.endDate)}
                    </span>
                    <span className={"projects-info__member " + (mode === true ? "" : "dark")}>
                        <i className="fas fa-user-friends" />
                        &nbsp;<span>{member}</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}

const SampleNextArrow = ({className, onClick, mode}) => {
    return (
        <div
            className={className + " projects-info__next " + (mode === true ? "" : "dark")}
            onClick={onClick}
        ><i className={"fas fa-angle-right " + (mode === true ? "" : "dark")} /></div>
    );
}

const SamplePrevArrow = ({className, onClick, mode}) => {
    return (
        <div
            className={className + " projects-info__prev " + (mode === true ? "" : "dark")}
            onClick={onClick}
        ><i className={"fas fa-angle-left " + (mode === true ? "" : "dark")} /></div>
    );
}

const Projects = ({mode, projects}) => {
    const infinite = projects !== null && projects.content.length > 4;
    const settings = {
        dots: false,
        infinite: infinite,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        nextArrow: <SampleNextArrow mode={mode} />,
        prevArrow: <SamplePrevArrow mode={mode} />,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: infinite,
                    dots: false
                }
            }
        ]
    };
    return (
        <section className={mode === true ? "projects-info" : "projects-info dark"}>
            <div className="container">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h1 className={mode === true ? "projects-info__subject" : "projects-info__subject dark"}>What I Made</h1>
                    <Link className={mode === true ? "btn" : "btn dark"} to="/projects" style={{margin: '0 0 2.5rem 2.5rem'}}>VIEW PROJECTS</Link>
                </div>
                {projects ? <Slider {...settings}>
                    {projects.content.map((project, index) => <CustomSlide {...project} mode={mode} key={index}/>)}
                </Slider> : ''}
            </div>
        </section>
    );
};

export default Projects;

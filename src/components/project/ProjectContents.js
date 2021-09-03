import React, {Fragment} from 'react';
import removeDayFromDate from "../../utils/removeDayFromDate";
import {Link} from "react-router-dom";

const SkillsBlock = ({project}) => {
    const skills = project.skills.map(skill => {
        let skillColor;

        if (skill.use === 'WORK') {
            skillColor = 'work'
        } else if (skill.use === 'TOY') {
            skillColor = 'toy'
        } else {
            skillColor = 'study'
        }

        return (<div className={`contents-footer__skill ${skillColor}`} key={skill.id}>
            {skill.name}
        </div>)
    });

    return (
        <ul className="contents-footer__skills">
            {skills}
        </ul>
    );
};

const ProjectContents = ({mode, project}) => {

    return (
        <Fragment>
            <div className={mode === true ? "contents-header" : "contents-header dark"}>
                <div className="container">
                    {project ? <div className="contents-header__box">
                        <div>
                            <h3 className="contents-header__title">{project.title}</h3>
                            <p className="contents-header__period">{`${removeDayFromDate(project.timeRange.startDate)} ~ ${removeDayFromDate(project.timeRange.endDate)}`}</p>
                        </div>
                        <div className="contents-header__buttons">
                            {project.prevId != 0 ? <Link className={mode === true ? "btn" : "btn dark"} to={`/projects/${project.prevId}`}><i
                                className="fas fa-arrow-left">&nbsp;Prev</i></Link> : ''}
                            {project.nextId != 0 ? <Link className={mode === true ? "btn" : "btn dark"} to={`/projects/${project.nextId}`}>Next&nbsp;<i
                                className="fas fa-arrow-right" /></Link> : ''}
                        </div>
                    </div> : ''}
                </div>
            </div>
            <div className={mode === true ? "contents-body" : "contents-body dark"}>
                <div className="container">
                    {project ? <div className="contents-body__description" dangerouslySetInnerHTML={{__html: project.description}}/> : ''}
                </div>
            </div>
            <div className={mode === true ? "contents-footer" : "contents-footer dark"}>
                <div className="container">
                    {project ? <h3 className="contents-footer__title">개발 기술</h3> : ''}
                    {project ? <SkillsBlock project={project}/> : ''}
                </div>
            </div>
        </Fragment>
    );
}

export default ProjectContents;
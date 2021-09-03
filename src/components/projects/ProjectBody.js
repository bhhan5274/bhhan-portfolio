import React from 'react';
import {Link} from 'react-router-dom';
import removeDayFromDate from "../../utils/removeDayFromDate";

const ProjectItem = ({mode, project}) => {
    const skills = project.skills.map(skill => {
        let skillColor;

        if (skill.use === 'WORK') {
            skillColor = 'work'
        } else if (skill.use === 'TOY') {
            skillColor = 'toy'
        } else {
            skillColor = 'study'
        }

        return (<div className={`project-item__skill ${skillColor}`} key={skill.id}>
            {skill.name}
        </div>)
    });
    return (
        <Link className={mode === true ? "project-item" : "project-item dark"} to={`/projects/${project.id}`}>
            <div className="project-item__image">
                <img src={project.images[0].path}/>
            </div>
            <h3 className="project-item__title">{project.title}</h3>
            <ul className="project-item__skills">
                {skills}
            </ul>
            <p className="project-item__text">{removeDayFromDate(project.timeRange.startDate)} ~ {removeDayFromDate(project.timeRange.endDate)}</p>
        </Link>
    );
};

const ProjectBody = ({mode, projects}) => {
    return (
        <div className={mode === true ? "project-body" : "project-body dark"}>
            <div className="container">
                {projects ? projects.content.map(project => <ProjectItem key={project.id} project={project}
                                                                         mode={mode}/>) : ""}
            </div>
        </div>
    );
};

export default ProjectBody;

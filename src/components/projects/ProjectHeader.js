import React from 'react';

const ProjectHeader = ({mode, projects}) => {
    return (
        <div className={mode === true ? "project-header" : "project-header dark"}>
            <div className="container">
                <div>
                    <h3 className="project-header__title">개발을 통해 문제를 해결하고 개선한</h3>
                    <h3 className="project-header__title">프로젝트들을 정리 했어요</h3>
                </div>
                <span className="project-header__hidden">프로젝트 <span>&nbsp;&nbsp;{projects ? projects.totalElements: ""} 개</span></span>
                <div className="project-header__right">
                    <p className="project-header__text">프로젝트</p>
                    <p className="project-header__number">{projects ? projects.totalElements : ""} 개</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeader;

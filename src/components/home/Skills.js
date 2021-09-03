import React from 'react';
import {Link} from "react-router-dom";

const Skills = ({mode}) => {
    return (
        <section className={mode === true ? "skills-info" : "skills-info dark"}>
            <div className="container">
                <h1 className={mode === true ? "skills-info__title" : "skills-info__title dark"}>What I Can Do</h1>

                <div className="skills-info__box">
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-file-code" />
                        <h1 className="skills-info__subject">Application</h1>
                        <p className="skills-info__content">펌웨어 / 윈도우 응용프로그램</p>
                    </Link>
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-desktop" />
                        <h1 className="skills-info__subject">Frontend</h1>
                        <p className="skills-info__content">HTML/CSS/jQuery 웹 퍼블리싱<br />React SPA 개발</p>
                    </Link>
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-server" />
                        <h1 className="skills-info__subject">Backend</h1>
                        <p className="skills-info__content">SpringFramework 서버 구축<br />도메인 모델 설계</p>
                    </Link>
                    <Link className={mode === true ? "skills-info__item" : "skills-info__item dark"} to='/skills'>
                        <i className="fas fa-cogs" />
                        <h1 className="skills-info__subject">DevOps</h1>
                        <p className="skills-info__content">CI/CD 파이프라인 구축<br />소스코드 형상 관리<br />클라우드 리소스 활용</p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Skills;

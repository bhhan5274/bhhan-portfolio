import React from 'react';

const APPLICATION = "APPLICATION";
const FRONTEND = "FRONTEND";
const BACKEND = "BACKEND";
const DEVOPS = "DEVOPS";

const WORK = "WORK";
const TOY = "TOY";

const SkillItem = ({name, path, use, description, mode}) => {

    const useToKorean = (use) => {
        if(use === WORK){
            return "실무";
        }else if(use === TOY){
            return "토이";
        }else {
            return "스터디";
        }
    };

    return (
        <div className={mode === true ? "skill-intro__item" : "skill-intro__item dark"}>
            <div className="skill-intro__image">
                <img src={path} alt="image" />
            </div>
            <div className="skill-intro__content">
                <div>
                    <h6>{name}</h6>
                    <span className={"skill-intro__badge " + use.toLowerCase()}>{useToKorean(use)}</span>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

const SkillIntro = ({mode, skills}) => {
    function getItems(type) {
        return skills ? skills.filter(skill => skill.type === type).map(skill => <SkillItem mode={mode} {...skill} key={skill.id}/>) : "";
    }

    return (
        <section className={mode === true ? "skill-intro" : "skill-intro dark"}>
            <div className="container">
                <div>
                    <div className={mode === true ? "skill-intro__title" : "skill-intro__title dark"}>
                        <h3>기술스택 소개</h3>
                        <p>현업에서 사용하여 프로젝트를 진행하거나 관심 있게 학습해본 경험이 있는 기술 스택입니다.</p>
                        <p>실무·토이는 해당 언어를 사용하여 결과물을 도출해본 경험이 있으며 개발된 소스코드를 이해할 수 있습니다.</p>
                        <p>스터디 단계는 관심 있게 학습 중이며 일정 학습 정도가 되면 토이 프로젝트를 진행할 계획이 있습니다.</p>
                    </div>
                </div>
                <div>
                    <div className="skill-intro__box">
                        <div className={mode === true ? "skill-intro__left" : "skill-intro__left dark"}>
                            <i className="fas fa-file-code" />
                            <div>
                                <h5>Application</h5>
                                <p>펌웨어 & 응용프로그램 개발</p>
                            </div>
                        </div>
                        <div className="skill-intro__right">
                            {getItems(APPLICATION)}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="skill-intro__box">
                        <div className={mode === true ? "skill-intro__left" : "skill-intro__left dark"}>
                            <i className="fas fa-desktop" />
                            <div>
                                <h5>Frontend</h5>
                                <p>퍼블리싱 & SPA프레임워크</p>
                            </div>
                        </div>
                        <div className="skill-intro__right">
                            {getItems(FRONTEND)}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="skill-intro__box">
                        <div className={mode === true ? "skill-intro__left" : "skill-intro__left dark"}>
                            <i className="fas fa-server" />
                            <div>
                                <h5>Backend</h5>
                                <p>MVC웹 개발 & RestAPI 서버 구축</p>
                            </div>
                        </div>
                        <div className="skill-intro__right">
                            {getItems(BACKEND)}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="skill-intro__box">
                        <div className={mode === true ? "skill-intro__left" : "skill-intro__left dark"}>
                            <i className="fas fa-cogs" />
                            <div>
                                <h5>Backend</h5>
                                <p>형상관리와 유지보수 & 서버 구축</p>
                            </div>
                        </div>
                        <div className="skill-intro__right">
                            {getItems(DEVOPS)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillIntro;

import React from 'react';

const SelfIntro = ({mode}) => {
    return (
        <section className={mode === true ? "self-intro" : "self-intro dark"}>
            <div className="container">
                <div>
                    <div className={mode === true ? "self-intro__title" : "self-intro__title dark"}>
                        <h3>웹 브라우저로 사람을 연결하는 개발자</h3>
                        <h3>Bhhan에 대해 알아보세요!</h3>
                    </div>
                    <ul className={mode === true ? "self-intro__keywords" : "self-intro__keywords dark"}>
                        <li>
                            <i className="far fa-smile"/>
                            <p>개발을</p>
                            <p>즐기는</p>
                        </li>
                        <li>
                            <i className="fas fa-book-open"/>
                            <p>꾸준한</p>
                            <p>자기계발</p>
                        </li>
                        <li>
                            <i className="fas fa-arrows-alt-h"/>
                            <p>다양한</p>
                            <p>개발경험</p>
                        </li>
                        <li>
                            <i className="fas fa-search"/>
                            <p>문제의식</p>
                            <p>해결과정</p>
                        </li>
                        <li>
                            <i className="far fa-handshake"/>
                            <p>핵심가치</p>
                            <p>신뢰</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className={mode === true ? "self-intro__introduce" : "self-intro__introduce dark"}>
                        <h2>개발자 소개</h2>
                        <p>웹 브라우저를 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발 길을 걷고 있습니다.</p>
                        <p>문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에 적극적으로 도전합니다.</p>
                        <br />
                        <p>다양한 개발 스코프를 공부하면서 웹 기획부터 배포·유지보수까지의 과정에 대해 경험해 보았습니다.</p>
                        <p>최근에는 마이크로서비스와 Devops에 관심을 가지고 확장성이 좋고 유지 보수하기가 쉬운 시스템을 설계할 수 있도록 노력하고 있습니다.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SelfIntro;

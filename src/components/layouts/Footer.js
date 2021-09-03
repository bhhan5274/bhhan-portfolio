import React, {Fragment} from 'react';

const Footer = ({mode}) => {
    return (
        <Fragment>
            <div className={"footer" + (mode === true ? "" : " dark")}>
                <div className="container">
                    <div className={"footer__top" + (mode === true ? "" : " dark")}>
                        <span>Bhhan</span>
                        <div className={"footer__icons" + (mode === true ? "" : " dark")}>
                            <a href="mailto:hbh5274@gmail.com">
                                <i className="fas fa-envelope" />
                            </a>
                            <a href="#">
                                <i className="fas fa-comment-dots"></i>
                            </a>
                            <a href="https://github.com/bhhan5274" target="_blank">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div className={"footer__bottom" + (mode === true ? "" : " dark")}>
                        <ul className={"footer__info" + (mode === true ? "" : " dark")}>
                            <li>한병호</li>
                            <li>이메일 hbh5274@gmail.com</li>
                            <li>카카오톡 hanss5274</li>
                            <li>깃허브 bhhan5274</li>
                        </ul>
                        <span>Copyright &copy; 2020 Bhhan All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;

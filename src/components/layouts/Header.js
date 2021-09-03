import React, {Fragment} from 'react';
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom';

const Header = ({mode, nav, toggleMode, toggleNav}) => {
    const modeClick = (mode) => {
        toggleMode(mode);
    };

    const navClick = () => {
        toggleNav();
    };

    return (
        <Fragment>
            <div className={mode === true ? "header" : "header dark"}>
                <div className="container">
                    <ul className="header__nav">
                        <li>
                            <Link className="header__brand" to="/">
                                <img src={logo} alt="logo" className="header__logo" />
                                &nbsp;Bhhan
                            </Link>
                        </li>
                        <li className="web-link">
                            <Link className={mode === true ? "header__link" : "header__link dark"} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="web-link">
                            <Link className={mode === true ? "header__link" : "header__link dark"} to="/skills">
                                Skills
                            </Link>
                        </li>
                        <li className="web-link">
                            <Link className={mode === true ? "header__link" : "header__link dark"} to="/projects">
                                Projects
                            </Link>
                        </li>
                        <li className="web-link">
                            <div className={mode === true ? "toggle" : "toggle dark"}>
                                <div className={mode === true ? "circle" : "circle dark move"} onClick={() => modeClick(!mode)}>
                                    {mode === true ? <i className="fas fa-sun" /> : <i className="fas fa-moon dark" />}
                                </div>
                            </div>
                        </li>
                        <li>
                            {mode === true ? <i className="fas fa-bars mobile-nav__toggle" onClick={navClick} /> : <i className="fas fa-bars mobile-nav__toggle dark"  onClick={navClick} />}
                        </li>
                    </ul>
                </div>
            </div>
            <div className={nav === true ? ("mobile-nav show " + (mode === true ? "" : "dark")) : ("mobile-nav " + (mode === true ? "" : "dark"))}>
                <i className={mode === true ? "fas fa-times mobile-nav__close" : "fas fa-times mobile-nav__close dark"} onClick={navClick} />
                <div className={mode === true ? "mobile-nav__mode toggle" : "mobile-nav__mode toggle dark"}>
                    <div className={mode === true ? "circle" : "circle dark move"} onClick={() => modeClick(!mode)}>
                        {mode === true ? <i className="fas fa-sun" /> : <i className="fas fa-moon dark" />}
                    </div>
                </div>
                <ul className="mobile-nav__container">
                    <li>
                        <Link className={mode === true ? "mobile-nav__item" : "mobile-nav__item dark"} to="/" onClick={navClick}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={mode === true ? "mobile-nav__item" : "mobile-nav__item dark"} to="/skills" onClick={navClick}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link className={mode === true ? "mobile-nav__item" : "mobile-nav__item dark"} to="/projects" onClick={navClick}>
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Header;

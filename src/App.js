import React, {useEffect} from 'react';
import './css/App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "./components/layouts/Header";
import {TOGGLE_NAV} from "./actions/types";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Projects from "./components/pages/Projects";
import NotFound from "./components/layouts/NotFound";
import Footer from "./components/layouts/Footer";
import {modeCheck} from './actions/modeAction';
import ScrollToTop from "./components/layouts/ScrollToTop";
import Project from "./components/pages/Project";

function App({mode, nav, dispatch}) {
   useEffect(() => {
       modeCheck.init(dispatch);
   }, []);

    const toggleMode = (mode) => {
        modeCheck.toggle(dispatch, mode);
    };

    const toggleNav = () => {
        dispatch({
            type: TOGGLE_NAV
        });
    };

    return (
        <Router>
            <ScrollToTop>
                <div className={mode === true ? "background" : "background dark"}>
                    <Header mode={mode} nav={nav} toggleMode={toggleMode} toggleNav={toggleNav}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/skills" component={Skills}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/projects/:id" render={(props) => <Project {...props} />} />
                        <Route component={NotFound}/>
                    </Switch>
                    <Footer mode={mode}/>
                </div>
            </ScrollToTop>
        </Router>
    );
}

const mapStateToProps = (state) => ({
    mode: state.mode,
    nav: state.nav
});

export default connect(mapStateToProps)(App);

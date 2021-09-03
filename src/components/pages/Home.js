import React, {Fragment, useEffect} from 'react';
import Banner from "../home/Banner";
import Skills from "../home/Skills";
import Projects from "../home/Projects";
import axios from "axios";
import {GET_PROJECTS} from "../../actions/types";
import {connect} from "react-redux";

const Home = ({mode, projects, dispatch}) => {

    const getProjects = async () => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/career/v1/projects?page=1&size=20&sort=id,desc`);
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            });
        }catch(err){
            dispatch({
                type: GET_PROJECTS,
                payload: null
            });
        }
    };

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <Fragment>
            <Banner mode={mode} />
            <Skills mode={mode} />
            <Projects mode={mode} projects={projects} />
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    mode: state.mode,
    projects: state.projects
});

export default connect(mapStateToProps)(Home);

import React, {Fragment, useEffect} from 'react';
import ProjectHeader from "../projects/ProjectHeader";
import ProjectBody from "../projects/ProjectBody";
import axios from "axios";
import {GET_PROJECTS} from "../../actions/types";
import Paging from "../projects/Paging";
import {connect} from "react-redux";

const Projects = ({mode, dispatch, projects}) => {

    const getPageProjects = async (page) => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/v1/projects?page=${page}&size=6&sort=id,desc`);

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
        getPageProjects(1);
    }, []);

    return (
        <Fragment>
            <ProjectHeader mode={mode} projects={projects}/>
            <ProjectBody mode={mode} projects={projects} />
            <Paging mode={mode} projects={projects} getPageProjects={getPageProjects}/>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    mode: state.mode,
    projects: state.projects
});

export default connect(mapStateToProps)(Projects);

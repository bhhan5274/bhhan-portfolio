import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import {GET_PROJECT} from "../../actions/types";
import {connect} from 'react-redux';
import ScaleLoader from 'react-spinners/ScaleLoader';
import ProjectGallery from "../project/ProjectGallery";
import ProjectContents from "../project/ProjectContents";

const Project = ({mode, dispatch, project, match: {params: {id}}}) => {
    const [loading, setLoading] = useState(false);

    const getProject = async (id) => {
        try{
            setLoading(true);
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/v1/projects/${id}/view`);
            dispatch({
                type: GET_PROJECT,
                payload: res.data
            });
        }catch(err){
            dispatch({
                type: GET_PROJECT,
                payload: null
            });
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProject(id);

        return () => {
            dispatch({
                type: GET_PROJECT,
                payload: null
            });
        };
    }, [id]);

    if(loading){
        return (
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '20px',
            }}>
                <ScaleLoader color="#ff3366" loading={loading} size={100}/>
            </div>
        )
    }

    return (
        <Fragment>
            <ProjectGallery mode={mode} project={project} />
            <ProjectContents mode={mode} project={project} />
        </Fragment>
    );
}

const mapStateToProps = (state) => ({
    mode: state.mode,
    project: state.project
});

export default connect(mapStateToProps)(Project);

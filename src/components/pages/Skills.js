import React, {Fragment, useEffect} from 'react';
import SelfIntro from "../skills/SelfIntro";
import SkillIntro from "../skills/SkillIntro";
import axios from "axios";
import {GET_SKILLS} from "../../actions/types";
import {connect} from "react-redux";

const Skills = ({mode, skills, dispatch}) => {
    const getSkills = async () => {
        try{
            const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/career/v1/skills`);
            dispatch({
                type: GET_SKILLS,
                payload: res.data
            });
        }catch(err){
            dispatch({
                type: GET_SKILLS,
                payload: null
            });
        }
    };

    useEffect(() => {
        getSkills();
    }, []);

    return (
        <Fragment>
            <SelfIntro mode={mode}/>
            <SkillIntro mode={mode} skills={skills}/>
        </Fragment>
    );
};

const mapStateToProps = (state) => ({
    mode: state.mode,
    skills: state.skill
});

export default connect(mapStateToProps)(Skills);

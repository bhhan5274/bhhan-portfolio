import {combineReducers} from "redux";
import mode from "./modeReducer";
import nav from "./navReducer";
import projects from "./projectsReducer";
import project from './projectReducer';
import skill from "./skillReducer";

export default combineReducers({
    mode,
    nav,
    projects,
    project,
    skill
});
import {TOGGLE_FALSE, TOGGLE_TRUE} from "../actions/types";

export default (state = true, action) => {
    switch (action.type) {
        case TOGGLE_TRUE:
            return true;
        case TOGGLE_FALSE:
            return false;
        default:
            return state;
    }
};
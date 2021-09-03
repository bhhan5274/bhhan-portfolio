import {TOGGLE_NAV} from "../actions/types";

export default (state = false, action) => {
    switch (action.type) {
        case TOGGLE_NAV:
            return !state;
        default:
            return state;
    }
};
import {GET_PROJECT} from "../actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case GET_PROJECT:
            return action.payload;
        default:
            return state;
    }
}
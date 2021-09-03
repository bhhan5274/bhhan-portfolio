import {TOGGLE_TRUE, TOGGLE_FALSE} from "./types";

export const modeCheck = (() => {
    return {
        toggle: function(dispatch, mode){
            if(mode){
                dispatch({type: TOGGLE_TRUE});
                localStorage.setItem('bhhan-mode', 'white');
            }else {
                dispatch({type: TOGGLE_FALSE});
                localStorage.setItem('bhhan-mode', 'dark');
            }
        },
        init: function(dispatch){
            let mode = localStorage.getItem('bhhan-mode');
            if(mode){
                this.toggle(dispatch, mode === 'white');
            }
        }
    }
})();
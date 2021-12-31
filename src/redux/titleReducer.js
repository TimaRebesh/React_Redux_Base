import { CHANGE_TITLE } from './types';

const initialState = {
    text: '',
}

const titleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TITLE: return { ...state, text: action.text };
        default: return state;
    }
}

export default titleReducer;

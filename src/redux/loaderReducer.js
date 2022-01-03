import { LOADER_ON, LOADER_OFF } from './types';

const initialState = {
    loading: false
}

const loderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_ON: return { ...state, loading: true };
        case LOADER_OFF: return { ...state, loading: false };
        default: return state;
    }
}

export default loderReducer;

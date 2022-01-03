import { NEW_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, COMMENTS_LOAD } from './types';

const initialState = {
    comments: [],
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENTS_LOAD: return { ...state, comments: action.data.map(d => ({ id: d.id, text: d.body })) };
        case NEW_COMMENT: return { ...state, comments: [...state.comments, action.data] };
        case UPDATE_COMMENT: return { ...state, comments: state.comments.map(c => c.id === action.data.id ? action.data : c) };
        case DELETE_COMMENT: return { ...state, comments: state.comments.filter(c => c.id !== action.id) };
        default: return state;
    }
}

export default commentsReducer;

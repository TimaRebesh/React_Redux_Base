import { DECREMENT, INCREMENT } from './types';

const initialState = {
    likes: 0,
}

const likesReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT: return { ...state, likes: state.likes + 1 };
        case DECREMENT: return state.likes > 0 ? { ...state, likes: state.likes - 1}: state;
        default: return state;
    }
}

export default likesReducer;

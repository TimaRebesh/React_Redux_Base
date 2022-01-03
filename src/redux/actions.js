import {
    DECREMENT,
    INCREMENT,
    CHANGE_TITLE,
    NEW_COMMENT,
    UPDATE_COMMENT,
    DELETE_COMMENT,
    COMMENTS_LOAD,
    LOADER_ON,
    LOADER_OFF
} from './types';

export const incrementLikes = () => ({ type: INCREMENT });
export const decrementLikes = () => ({ type: DECREMENT });
export const changeTitle = (text) => ({ type: CHANGE_TITLE, text });
export const newComment = (text, id) => ({ type: NEW_COMMENT, data: { id, text } });
export const updateComment = (text, id) => ({ type: UPDATE_COMMENT, data: { id, text } });
export const deleteComment = (id) => ({ type: DELETE_COMMENT, id });
export const loaderOn = () => ({ type: LOADER_ON });
export const loaderOff = () => ({ type: LOADER_OFF });
export const commentsLoad = () => {
    return async (dispatch) => {
        dispatch(loaderOn());
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
        const jsonData = await response.json();
        dispatch({ type: COMMENTS_LOAD, data: jsonData });
        dispatch(loaderOff());
    }
}

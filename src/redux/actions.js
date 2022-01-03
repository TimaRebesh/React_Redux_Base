import { DECREMENT, INCREMENT, CHANGE_TITLE, NEW_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from './types';

export const incrementLikes = () => ({ type: INCREMENT });
export const decrementLikes = () => ({ type: DECREMENT });
export const changeTitle = (text) => ({ type: CHANGE_TITLE, text });
export const newComment = (text, id) => ({ type: NEW_COMMENT, data: { id, text } });
export const updateComment = (text, id) => ({ type: UPDATE_COMMENT, data: { id, text } });
export const deleteComment = (id) => ({ type: DELETE_COMMENT, id });

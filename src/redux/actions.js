import { DECREMENT, INCREMENT, CHANGE_TITLE } from './types';

export const incrementLikes = () => ({ type: INCREMENT });
export const decrementLikes = () => ({ type: DECREMENT });
export const changeTitle = (text) => ({ type: CHANGE_TITLE, text });

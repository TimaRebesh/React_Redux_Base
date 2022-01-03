import { combineReducers } from "redux";
import likesReducer from "./likesReducer";
import titleReducer from "./titleReducer";
import commentsReducer from "./commentsReducer";
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
    likesReducer,
    titleReducer,
    commentsReducer, 
    loaderReducer
})
export default rootReducer;

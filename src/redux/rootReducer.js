import { combineReducers } from "redux";
import likesReducer from "./likesReducer";
import titleReducer from "./titleReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({
    likesReducer,
    titleReducer,
    commentsReducer
})
export default rootReducer;

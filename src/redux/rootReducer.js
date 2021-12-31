import { combineReducers } from "redux";
import likesReducer from "./likesReducer";
import titleReducer from "./titleReducer";

const rootReducer = combineReducers({
    likesReducer,
    titleReducer,
})
export default rootReducer;

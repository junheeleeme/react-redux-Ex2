import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({
    counts : counterReducer
})

export default rootReducer;
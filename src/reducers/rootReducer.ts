import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {statsReducer} from "./statsReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer,
})
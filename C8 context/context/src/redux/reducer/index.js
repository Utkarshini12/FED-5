import { combineReducers } from "redux";
import { counterReducer } from "./countReducer";
// import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    count: counterReducer,
    // user: userReducer
})

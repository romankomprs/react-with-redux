import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const reducers = combineReducers({
    account: accountReducer // account is a key, accountReducer - value
}); 

export default reducers;
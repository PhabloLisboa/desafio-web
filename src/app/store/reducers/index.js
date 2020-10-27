import { combineReducers } from "redux";
import Auth from "./authReducer";
import Dialog from "./dialogReducer";

const reducer = () => combineReducers({ Auth, Dialog });

export default reducer;

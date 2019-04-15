import { combineReducers } from 'redux';
import issuesReducer from "./issues/duck";

export default combineReducers({
    issues: issuesReducer
})
import { combineReducers } from 'redux';
import auth from "./auth";
import settings from "./settings";
import tasks from "./tasks";


export default combineReducers({
    auth,
    settings,
    tasks
});

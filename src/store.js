import {applyMiddleware, createStore} from "redux";
import combineReducers from "./redux/reducers";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)));
export let getStore=store.getState();
export default store
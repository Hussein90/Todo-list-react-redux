import {createStore, combineReducers } from "redux";
import {reducer} from "./reducer";


export default combineReducers({
    reducer : reducer
  })
export let store = createStore(reducer);


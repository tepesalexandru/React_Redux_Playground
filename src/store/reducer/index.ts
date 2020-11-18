import { combineReducers } from "redux"
import sessions from "./sessions"
import filters from './filters';

export default combineReducers({ 
    sessions,
    filters
 })

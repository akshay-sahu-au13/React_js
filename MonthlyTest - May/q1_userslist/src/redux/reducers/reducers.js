import { combineReducers } from 'redux';
import posts from './posts';
import postDetails from './postDetails';


export default combineReducers({
    posts,
    postDetails
})
import { combineReducers } from 'redux';
import search from './search';
import loader from './loader';
import video from './video';
import profile from './profile';
import auth from './auth';

export default combineReducers({
    loader,
    video,
    search,
    profile,
    auth
});

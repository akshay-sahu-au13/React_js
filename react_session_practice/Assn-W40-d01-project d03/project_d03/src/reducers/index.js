import { combineReducers } from 'redux';
import search from './search';
import loader from './loader';
import video from './video';
import profile from './profile';

export default combineReducers({
    loader,
    video,
    search,
    profile
});

import { combineReducers } from 'redux';
import search from './search';
import loader from './loader';
import video from './video';

export default combineReducers({
    loader,
    video,
    search
});

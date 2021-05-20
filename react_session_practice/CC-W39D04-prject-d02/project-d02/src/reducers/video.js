import { videoTypes } from '../actionTypes';


const initialState = [];

const videos = (state, action) => {
    state = state || initialState;

    if (action.type === videoTypes.list) {
        return action.payload;
    } else {
        return state;
    }

}

export default videos;
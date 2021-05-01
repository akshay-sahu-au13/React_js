import { postDetailsType } from "../actionTypes/actionTypes";

const initialState = {
    postInfo: {}
}

const postDetails = (state,action) => {
    state = state || initialState;

    switch(action.type){
        case postDetailsType.postInfo:
            return {
                postInfo: {...action.payload}
            }
        default:
            return state;
    }
}

export default postDetails;

